import styles from '../styles/About.module.css'

export default function Home() {
    console.log('about render');
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                About page content here
            </h1>
        </div>
    )
}
