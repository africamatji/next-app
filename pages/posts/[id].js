import styles from "../../styles/About.module.css";
import { useRouter } from 'next/router'

const Post = ({quiz}) => {
    const router = useRouter();
    const { id } = router.query;
    const { data } = quiz;
    console.log(`quiz question : ${data.attributes.question}`)
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Post {id}
            </h1>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const id = context.params.id;
    const resp = await fetch(`http://localhost:1337/api/quizzes/${id}`)
    const quiz = await resp.json();

    return {
        props: {
            quiz,
        },
    };
}

export default Post;