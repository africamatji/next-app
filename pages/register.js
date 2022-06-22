import styles from "../styles/About.module.css";
import Link from "next/link";
import {createQuiz} from "./posts";

const Register = () => {
    return (
        <div>
            <Link href="">
                <a href="" onClick={registerUser}>Register</a>
            </Link>
        </div>
    );
}

export const registerUser = async () => {
    const user = {
        data: {
            email: 'twillio@test.com',
            username: 'twilliotest',
            password: 'password1',
            phone: '+27814894520'
        },
    };
    const resp = await fetch('http://localhost:1337/api/users', {
        'method': 'POST',
         headers: {
              'Content-Type': 'application/json',
          },
         body: JSON.stringify(user.data),
    });

    const postResp = await resp;
    console.log('postResp', postResp);

    return {
        props: {
            postResp
        },
    };
}

export default Register;

