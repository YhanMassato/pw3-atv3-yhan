import { Outlet,Link } from 'react-router-dom';
import styles from './NavBar.module.css'

export default function NavBar(){
    return(
        <>
            <ul className={styles.list}>
                <li className={styles.item} >
                    <Link className={styles.navItem} to="/">Home</Link>
                </li>

                <li className={styles.item}>
                    <Link className={styles.navItem} to="/create">Create</Link>
                </li>

                <li className={styles.item}>
                    <Link className={styles.navItem} to="/delete">Delete</Link>
                </li>

                <li className={styles.item}>
                    <Link className={styles.navItem} to="/get">Get</Link>
                </li>

                <li className={styles.item}>
                    <Link className={styles.navItem} to="/list">List</Link>
                </li>

                <li className={styles.item}>
                    <Link className={styles.navItem} to="/update">Update</Link>
                </li>
            </ul>

            <Outlet/>
        </>
    )
}