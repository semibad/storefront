import { Header } from '@components/Header'
import { Product } from '@components/Product'
import styles from './App.module.scss'
import useCart from './hooks/useCart'

export const App = () => {
  const { products, total } = useCart();
  
  return (
    <div className={styles.app}>
      <Header total={total} products={products} />
      <main>
        <div className={styles.inner}>
          <ul className={styles.productList}>
            {products.map((item) => <Product key={item.id} item={item} />)}
          </ul>
        </div>
      </main>
    </div>
  )
}
