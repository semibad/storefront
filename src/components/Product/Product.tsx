import type { ProductType } from '../../data/products'
import styles from './Product.module.scss'

const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(price)

type ProductProps = {
  item: ProductType
}

const Product = ({ item }: ProductProps) => (
  <li className={styles.product}>
    <h2 className={styles.name}>{item.name}</h2>
    <p className={styles.description}>{item.description}</p>
    <div className={styles.price}>{formatPrice(item.price)}</div>
  </li>
)

export { Product as default, Product, type ProductProps }
