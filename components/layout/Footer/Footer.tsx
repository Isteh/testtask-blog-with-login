import Image from 'next/image';
import { FC, memo } from 'react'
import styles from './Footer.module.scss'

const Footer: FC = () => {
    const date = new Date;

    return <footer className={styles.footer}>
        <ul className={styles.linksList}>
            <li>
                <a className={styles.link} href='#'>
                    <Image src='/facebook-logo.svg'
                        alt='My facebook'
                        width={30}
                        height={30} />
                </a>
            </li>
            <li>
                <a className={styles.link} href='#'>
                    <Image src='/instagram-logo.svg'
                        alt='My instagram' width={30}
                        height={30} />
                </a>
            </li>
            <li>
                <a className={styles.link} href='#'>
                    <Image src='/twitter-logo.svg'
                        alt='My twitter' width={30}
                        height={30} />
                </a>
            </li>
            <li>
                <a className={styles.link} href='#'>
                    <Image src='/linkedin-logo.svg'
                        alt='My linkedin' width={30}
                        height={30} />
                </a>
            </li>
        </ul>
        <span className={styles.copyright}> Copyright ©{date.getFullYear()} All rights reserved  </span>
    </footer>
}

export default memo(Footer)