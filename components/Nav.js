import Link from 'next/link';
import styles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <div className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/deserts">Deserts</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;