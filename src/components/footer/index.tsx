import styles from './index.module.scss'
function Footer() {
  return (
    <div className={styles['footer']}>
      <p>作者：@Renouc</p>
      <p>
        github：
        <a href="https://github.com/Renouc/blue-ray-cinema" target="blank">
          https://github.com/Renouc/blue-ray-cinema
        </a>
      </p>
    </div>
  )
}

export default Footer
