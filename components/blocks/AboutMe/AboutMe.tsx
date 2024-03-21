import Button from '@/components/ui/Button/Button'
import Title from '@/components/ui/Title/Title'
import { FC } from 'react'
import styles from './AboutMe.module.scss'
import Image from 'next/image'

const AboutMe: FC = () => {
    return <section className={styles.section}>
        <div className={styles.textWrapper}>
            <Title level='h1' className={styles.title}>Hi, I am John <br /> Creative Technologist</Title>
            <p className={styles.text}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <Button>Download Resume</Button>
        </div>
        <Image src='/profile_photo.png' width={243} height={243} alt='My photo' className={styles.img} />
    </section>
}

export default AboutMe