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
        <button className={styles.cartButton} onClick={() => setCartOpen(!cartOpen)}>
          {cartOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          )}
          {formatPrice(total)}
        </button>
      </div>
      <Cart total={total} products={productsInCart} isOpen={cartOpen} />
    </header>
  )
}

export { Header }
