import styles from "../styles/About.module.css";
import QuizzesList from "../components/QuizzesList";

const Deserts = ({quizzes2}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Deserts
            </h1>
            <QuizzesList quizzes={quizzes2}/>
        </div>

    );
};

export const getServerSideProps = async () => {
    const resp = await fetch('http://localhost:1337/api/quizzes');
    const quizzes2 = await resp.json();

    return {
        props: {
            quizzes2,
        },
    };
}

export default Deserts;