import { useState } from 'react'
import styles from './Header.module.scss'
import { formatPrice } from '@utils'
import type { AugmentedProductType } from '@hooks/useCart'

type HeaderProps = {
  total: number,
  products: AugmentedProductType[]
}

type CartProps = HeaderProps & {
  isOpen: boolean,
}

const Cart = ({ products, total, isOpen }: CartProps) => (
  isOpen ? (
    <div className={styles.cart}>
      <table className={styles.cartTable}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>£/each</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>{formatPrice(item.price)}</td>
              <td>{formatPrice(item.subtotal)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Total</td>
            <td>{formatPrice(total)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  ) : null
)

const Header = ({ total, products }: HeaderProps) => {
  const [cartOpen, setCartOpen] = useState(false);
  const productsInCart = products.filter(item => item.count);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Storefront</h1>
        <button className={styles.cartButton} onClick={() => setCartOpen(!cartOpen)}>{ formatPrice(total) }</button>
      </div>
      <Cart total={total} products={productsInCart} isOpen={cartOpen} />
    </header>
  )
}

export { Header }
