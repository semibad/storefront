import styles from './Header.module.scss'

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <h1 className={styles.title}>Storefront</h1>
    </div>
  </header>
)
