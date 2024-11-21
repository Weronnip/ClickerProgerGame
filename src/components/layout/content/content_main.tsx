import { Outlet } from "react-router-dom";
import styles from './styles/content.module.css';

export function ContentMain() {
    return (
        <>
            <main className={styles.content}>
                <Outlet />
            </main>
        </>
    );
}