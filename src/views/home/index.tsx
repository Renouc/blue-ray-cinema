import styles from './index.module.scss'
import cover1 from '@/assets/images/cover1.webp'
import cover2 from '@/assets/images/cover2.webp'
import cover3 from '@/assets/images/cover3.webp'
import cover4 from '@/assets/images/cover4.webp'
import cover5 from '@/assets/images/cover5.webp'
import cover6 from '@/assets/images/cover6.webp'
import cover7 from '@/assets/images/cover7.webp'

const list = [
  {
    title: '刀剑神域：序列之争',
    desc: '刀剑神域剧场版',
    cover: cover1,
  },
  {
    title: '命运之夜——天之杯：恶兆之花',
    desc: '圣杯战争，开幕！',
    cover: cover2,
  },
  {
    title: '紫罗兰永恒花园外传：永远与自动手记人偶',
    desc: '紫罗兰永恒花园系列',
    cover: cover3,
  },
  {
    title: '航海王：红发歌姬',
    desc: '红发歌姬乌塔登场',
    cover: cover4,
  },
  {
    title: '海蒂和爷爷',
    desc: '“元首”演员高分作',
    cover: cover5,
  },
  {
    title: '情书',
    desc: '岩井俊二纯爱经典',
    cover: cover6,
  },
  {
    title: '叶问',
    desc: '我要打十个',
    cover: cover7,
  },
]
function Home() {
  return (
    <div className={styles['home']}>
      {list.map((item, index) => (
        <div className={styles['video-item']} key={index}>
          <div className={styles['cover']}>
            <img src={item.cover} alt="" />
          </div>
          <p className={styles['title']}>{item.title}</p>
          <p className={styles['desc']}>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default Home
