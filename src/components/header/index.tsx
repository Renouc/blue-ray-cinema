import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import { Input } from 'antd'

function Header() {
  const navigate = useNavigate()
  return (
    <div className={styles['header']}>
      <div className={styles['wrapper']}>
        <div className={styles['logo']} onClick={() => navigate('/')}>
          <img src="/vite.svg" alt="" />
          <h3 className={styles['title']}>蓝光</h3>
        </div>
        <div className={styles['search']}>
          <Input placeholder="请输入关键词" />
        </div>
      </div>
    </div>
  )
}

export default Header
