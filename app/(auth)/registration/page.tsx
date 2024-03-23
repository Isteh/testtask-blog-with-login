'use client'
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import Title from "@/components/ui/Title/Title";
import Link from "next/link";
import styles from './Login.module.scss'
import classNames from "classnames";
import { FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { registration, userActions } from "@/store/slices/userSlice";

export type LoginForm = {
    email: string,
    password: string
}

export default function Login() {
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()
    const { jwt, authErrorMessage: loginErrorMessage } = useSelector((state: RootState) => state.user)

    useEffect(() => {
        if (jwt) router.push('/')
    }, [jwt, router])

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(userActions.clearAuthError())
        const formData = new FormData(e.currentTarget)
        const { email, password } = Object.fromEntries(formData) as LoginForm
        await dispatch(registration({ email, password }))
    }

    return <main className={styles.main}>
        <Title className={styles.title} level="h1">Registration</Title>
        <span className={classNames(styles.error,
            { [`${styles.show}`]: loginErrorMessage })}>
            {loginErrorMessage ? loginErrorMessage : ''}
        </span>
        <form className={styles.form} onSubmit={submitHandler}>
            <Input name="email" placeholder="email" type="email" />
            <Input name="password" placeholder="password" type="password" />
            <Button>Sign Up</Button>
        </form>
        <span className={styles.text}>Already have an account?
            <Link className={styles.link} href='/login'>Sign In</Link>
        </span >

    </main >
}