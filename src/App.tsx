import styles from './App.module.scss'
import routes from './router/routes'
import Loading from './components/loading'

import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
function App() {
  return (
    <div className={styles['app']}>
      <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
