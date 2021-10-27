import style from './Top.module.css'
// import Link from 'next/link'
import Button from '@mui/material/Button';
import { Link } from '@mui/material'

export default function Top(){
    return(
        <>
        <div className={style.navbar}>
        <Link href="/">
        <Button> <h3 className={style.home}>Home</h3></Button>
        </Link>
        <Link href="/About">
        <Button> <h3 className={style.about}>About</h3></Button>
        </Link>
        <Link href="/Contact-us">
        <Button> <h3 className={style.contact}>Contact us</h3></Button>
        </Link>
        <Link href="/Email">
        <Button> <h3 className={style.email}>Email </h3></Button>
        </Link>
        </div>
        </>
    )
}