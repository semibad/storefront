import { useState } from "react"
import products, { type ProductType } from "@data/products";

// types
type CartItem = {
    id: number,
    count: number,
}

export type AugmentedProductType = ProductType & {
    count: number,
    increment: () => void,
    decrement: () => void
}

// manipulation
const modifyValue = (cart: CartItem[], setCart: (arg1: CartItem[]) => void, mod: number, id: number) => () => {
    const currentIndex = cart.findIndex(item => item.id === id);
    const currentCount = cart[currentIndex]?.count || 0;
    const newCount = Math.max(currentCount + mod, 0);
    const newItem = { id, count: newCount }
    setCart(currentIndex >= 0 ? cart.with(currentIndex, newItem) : [...cart, newItem])
}

// hook
const initialState: CartItem[] = products.map(({id}) => ({ id, count: 0 }));

const useCart = () => {
    const [cart, setCart] = useState<CartItem[]>(initialState);

    const augmentedProducts: AugmentedProductType[] = products.map(product => ({ 
        ...product,
        count: cart.find(item => item.id === product.id)?.count || 0,
        increment: modifyValue(cart, setCart, 1, product.id),
        decrement: modifyValue(cart, setCart, -1, product.id),
    }))

    return { cart, augmentedProducts };
}

export { useCart as default };
