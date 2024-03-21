import { FC } from 'react'
import styles from './SectionWithArticlesList.module.scss'
import { ISectionWithArticlesListProps } from './SectionWithArticlesList.interface'
import Title from '@/components/ui/Title/Title'
import Link from 'next/link'

const SectionWithArticlesList: FC<ISectionWithArticlesListProps> = ({ children, title, href, ...props }) => {
    return <section {...props} className={styles.section}>
        <Link href={href} className={styles.link}>
            <Title level='h2' className={styles.title}>{title}</Title>
            <span className={styles.subText}>View all</span>
        </Link>
        {children}
    </section>
}

export default SectionWithArticlesList