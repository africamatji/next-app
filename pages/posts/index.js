import styles from "../../styles/About.module.css";
import { useState, useEffect } from 'react';
import QuizzesList from "../../components/QuizzesList";
import Link from "next/link";

const PostsIndex = ({quizzes}) => {
    console.log('quizzes', quizzes);
    //const [quizzes, setQuizzes] = useState([{ message: 'default message...' }]);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Posts Index page
            </h1>
            <div className={styles.container}>
                <QuizzesList quizzes={quizzes} />
            </div>
            <div className={styles.container}>
                <ul>
                    <li>
                        <Link href="/posts/1">Post  </Link>
                    </li>
                    <li>
                        <Link href="/posts/2">Post 2</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.container}>
                <Link href="">
                    <a href="" onClick={createQuiz}>Create Quiz</a>
                </Link>
            </div>
        </div>
    );
};

export const createQuiz = async () => {
    const data = {
        data: {
            question: {
                id: 4,
                question: "Another question here..."
            },
            answer: [
                {
                    id: 1,
                    answer: "Willy wanka",
                    correct: false,
                },
                {
                    id: 2,
                    answer: "Ok",
                    correct: true,
                },
                {
                    id: 3,
                    answer: "Starbucks",
                    correct: true,
                },
            ],
        },
    };
    const resp = await fetch('http://localhost:1337/api/quiz-create', {
        method: 'GET',
        /*headers: {
            'Content-Type': 'application/json',
        },*/
       // body: JSON.stringify(data),
    });
    const postResp = await resp;
    console.log('postResp', postResp);

    return {
        props: {
            postResp
        },
    };
}

export const getStaticProps = async () => {
    const resp = await fetch('http://localhost:1337/api/quizzes');
    const quizzes = await resp.json();

    return {
        props: {
            quizzes,
        },
    };
};

export default PostsIndex;