import { useState, useEffect } from "react"
import products, { type ProductType } from "@data/products";

// types
type CartItem = {
    id: number,
    count: number,
}

export type AugmentedProductType = ProductType & {
    count: number,
    subtotal: number,
    increment: () => void,
    decrement: () => void,
    empty: () => void
}

// manipulation
const modifyCount = (cart: CartItem[], setCart: (arg1: CartItem[]) => void, id: number, mod: number) => () => {
    const currentIndex = cart.findIndex(item => item.id === id);
    const currentCount = cart[currentIndex]?.count || 0;
    const newCount = Math.max(currentCount + mod, 0);
    const newItem = { id, count: newCount }
    setCart(currentIndex >= 0 ? cart.with(currentIndex, newItem) : [...cart, newItem])
}

const emptyCount = (cart: CartItem[], setCart: (arg1: CartItem[]) => void, id: number) => () => {
     const currentIndex = cart.findIndex(item => item.id === id);
     const newItem = { id, count: 0 };
     setCart(currentIndex >= 0 ? cart.with(currentIndex, newItem) : [...cart, newItem])
}

// persistence
const STORAGE_KEY = 'storefront-cart-storage'
// not sure i love this for a more complete implementation but keeps things simple at this scale
const defaultState: CartItem[] = products.map(({ id }) => ({ id, count: 0 }))

const lazyInitWithLoad = (): CartItem[] => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (!stored) return defaultState
        const parsed: unknown = JSON.parse(stored)
        // for a more complete implementation i would verify more thoroughly against the product data
        if (!Array.isArray(parsed)) return defaultState
        return parsed as CartItem[]
    } catch {
        return defaultState
    }
}

// hook
const useCart = () => {
    const [cart, setCart] = useState<CartItem[]>(lazyInitWithLoad);

    useEffect(() => {
        // store our state every time it'se changed
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
    }, [cart])

    // generating counts / totals whenever the state changes, and attaching everything we need
    // to display or update the cart state so we don't get lots of logic in our renders
    const augmentedProducts: AugmentedProductType[] = products.map(product => {
        const count = cart.find(item => item.id === product.id)?.count || 0;
            return {
                ...product,
                count,
                subtotal: count * product.price,
                increment: modifyCount(cart, setCart, product.id, 1),
                decrement: modifyCount(cart, setCart, product.id, -1),
                empty: emptyCount(cart, setCart, product.id),
            }
        })

    // sum everything for the header button, only when the state changes
    const total = augmentedProducts.reduce((val, item) => val + item.subtotal, 0);

    return { cart, products: augmentedProducts, total };
}

export { useCart as default };
