import styles from './Product.module.scss'
import { formatPrice } from '@utils'
import type { AugmentedProductType } from '@hooks/useCart'

type ProductProps = {
  item: AugmentedProductType
}

const PriceAndControls = ({ item }: ProductProps) => (
  <div className={styles.priceAndControls}>
    <span className={styles.price}>{ formatPrice(item.price) }</span>
    <div className={styles.count}>
      <button onClick={item.decrement}>-</button>
      <span className={styles.countLabel}>{ item.count } in basket</span>
      <button onClick={item.increment}>+</button>
    </div>
  </div>

)

const Product = ({ item }: ProductProps) => (
  <li className={styles.product}>
    <h2 className={styles.name}>{item.name}</h2>
    <p className={styles.description}>{item.description}</p>
    <PriceAndControls item={item} />
  </li>
)

export { Product, type ProductProps }
