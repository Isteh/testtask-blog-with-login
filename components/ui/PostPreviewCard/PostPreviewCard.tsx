import { FC } from 'react'
import styles from './PostPreviewCard.module.scss'
import Title from '../Title/Title'
import { IPostPreviewCardProps } from './PostPreviewCard.interface'
import Link from 'next/link'

const PostPreviewCard: FC<IPostPreviewCardProps> = ({ title, date, description, tags, href }) => {
    const formatDate = <>
        {date.toLocaleDateString('en-US', { day: 'numeric' })}
        &nbsp;
        {date.toLocaleDateString('en-US', { month: 'short' })}
        &nbsp;
        {date.toLocaleDateString('en-US', { year: 'numeric' })}
    </>
    return <Link href={href} className={styles.link}><article className={styles.article}>
        <Title level='h3' className={styles.title}>{title}</Title>
        <div className={styles.additional}>
            <time dateTime={date.toLocaleDateString()} className={styles.time}>{formatDate}</time>
            <span className={styles.tags}>{tags.join(', ')}</span>
        </div>
        <p className={styles.description}>{description}</p>
    </article>
    </Link>
}

export default PostPreviewCard