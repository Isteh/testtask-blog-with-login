import { FC } from 'react'
import styles from './WorkPreviewCard.module.scss'
import Title from '../Title/Title'
import { IWorkPreviewCardProps } from './WorkPreviewCard.interface'
import Link from 'next/link'
import Image from 'next/image'

const WorkPreviewCard: FC<IWorkPreviewCardProps> = ({ title, date, description, tags, href, img }) => {
    const formatDate = <>
        {date.toLocaleDateString('en-US', { year: 'numeric' })}
    </>
    return <Link href={href} className={styles.link}><article className={styles.article}>
        <Image src={img} alt={`Image for ${title}`} width={246} height={180} className={styles.img} />
        <div className={styles.textWrapper}>
            <Title level='h3' className={styles.title}>{title}</Title>
            <div className={styles.additional}>
                <time dateTime={date.toLocaleDateString()} className={styles.time}>{formatDate}</time>
                <span className={styles.tags}>{tags.join(', ')}</span>
            </div>
            <p className={styles.description}>{description}</p>
        </div>
    </article>
    </Link>
}

export default WorkPreviewCard