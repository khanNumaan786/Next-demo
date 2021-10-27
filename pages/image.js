import Image from 'next/image'
import styles from '../styles/Home.module.css'



const MyImage = (props) => {
  return (
      <>
      <div className={styles.image}>
          
    <Image
      src="/profile.png"
      alt="Picture of the author"
      width={1465}
      height={700}
      />
      </div>
    </>
  )
}

export default MyImage