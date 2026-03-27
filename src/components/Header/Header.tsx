import styles from './Header.module.scss'
import { formatPrice } from '@utils'

type HeaderProps = {
  total: number
}

const Header = ({ total }: HeaderProps) => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <h1 className={styles.title}>Storefront</h1>
      <button className={styles.cartButton}>{ formatPrice(total) }</button>
    </div>
  </header>
)

export { Header }
