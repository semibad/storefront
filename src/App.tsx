import { Header } from '@components/Header'
import Product from '@components/Product/Product'
import products from '@data/products'
import styles from './App.module.scss'

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <div className={styles.inner}>
          <ul className={styles.productList}>
            {products.map((item) => <Product key={item.name} item={item} />)}
          </ul>
        </div>
      </main>
    </div>
  )
}
