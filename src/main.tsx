import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import 'normalize.css'
import '@/assets/css/index.scss'
import App from './App'

const root = createRoot(document.getElementById('root')!)
root.render(
  <HashRouter>
    <App />
  </HashRouter>
)
