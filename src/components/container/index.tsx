import styles from './index.module.scss'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'

const items: TabsProps['items'] = [
  {
    key: '/main',
    label: '首页',
    children: <Outlet />,
  },
  {
    key: '/main/film',
    label: '电影',
    children: <Outlet />,
  },
  {
    key: '/main/teleplay',
    label: '电视剧',
    children: <Outlet />,
  },
  {
    key: '/main/cartoon',
    label: '动漫',
    children: <Outlet />,
  },
]

function Container() {
  const navigate = useNavigate()
  const onChange = (key: string) => {
    navigate(key)
  }

  return (
    <div className={styles['container']}>
      <div className={styles['wrapper']}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  )
}

export default Container
