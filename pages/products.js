import Link from "next/link"
import Top from "../components/top-bar/top"
import Foot from "../components/footer/foot"
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css'
import OutlinedCard from '../components/card/cards'
import BasicCard2 from "../components/card/card2";
import BasicCard3 from "../components/card/card3";
import BasicCard4 from "../components/card/card4";
import BasicCard5 from "../components/card/card5";
import BasicCard6 from "../components/card/card6";
import { style } from "@mui/system";


export default function Products() {
    return (
        <>
            <Top />
            <div className={styles.Products}>
                <h1 className={styles.titleproduct}>
                    Description of Card
                </h1>
                <OutlinedCard />
                <BasicCard2 />
                <BasicCard3 />
                <BasicCard4 />
                <BasicCard5 />
                <BasicCard6 />
                <Link href="/">
                    <Button className={styles.back}
                    variant="contained">Click For Back</Button>
                </Link>
            </div>
            <Foot />
        </>
    )
}