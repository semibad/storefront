import { useState } from "react"
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

// hook
const initialState: CartItem[] = products.map(({id}) => ({ id, count: 0 }));

const useCart = () => {
    const [cart, setCart] = useState<CartItem[]>(initialState);

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

    const total = augmentedProducts.reduce((val, item) => val + item.subtotal, 0);

    return { cart, products: augmentedProducts, total };
}

export { useCart as default };
