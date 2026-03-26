import { Header } from './components/Header'
import styles from './App.module.scss'

import products from './data/products'
import Product from './components/Product/Product'

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <ul>
          { products.map((item) => <Product item={item} />)}
        </ul>
      </main>
    </div>
  )
}
