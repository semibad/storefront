import type { AugmentedProductType } from "@hooks/useCart"
import styles from "./Cart.module.scss"
import { formatPrice } from "@utils"

type CartProps = {
  total: number,
  products: AugmentedProductType[]
  isOpen: boolean,
}

const Cart = ({ products, total, isOpen }: CartProps) => (
  isOpen ? (
    <div className={styles.cart}>
      { products.length
        ? (
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
        ): <p className={styles.noItems}>No items in your cart yet, add some!</p>
      }
      
    </div>
  ) : null
)

export { Cart }