import { Header } from './components/Header'
import styles from './App.module.scss'

import products from './data/products'
import Product from './components/Product/Product'

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
