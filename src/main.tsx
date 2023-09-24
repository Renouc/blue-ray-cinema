import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import zhCN from 'antd/locale/zh_CN'
import 'normalize.css'
import '@/assets/css/index.scss'
import App from './App'
import { ConfigProvider } from 'antd'

const root = createRoot(document.getElementById('root')!)
root.render(
  <ConfigProvider locale={zhCN}>
    <HashRouter>
      <App />
    </HashRouter>
  </ConfigProvider>
)
