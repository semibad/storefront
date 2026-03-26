import { Header } from './components/Header'
import styles from './App.module.scss'

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main} />
    </div>
  )
}
