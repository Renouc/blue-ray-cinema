import { Suspense } from 'react'
import styles from './App.module.scss'
import routes from './router/routes'
import { useRoutes } from 'react-router-dom'
import Loading from './components/loading'
function App() {
  return (
    <div className={styles['app']}>
      <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
