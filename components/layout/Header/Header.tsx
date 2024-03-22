'use client'

import { FC, useState } from 'react'
import styles from './Header.module.scss'
import { linksList } from './Header.data'
import NavLink from '@/components/ui/NavLink/NavLink'
import classNames from 'classnames'
import Button from '@/components/ui/Button/Button'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { userActions } from '@/store/slices/userSlice'

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>()
    return <header className={styles.header}>
        <nav className={classNames(styles.nav,
            { [`${styles.listOpen}`]: isOpen })}>

            <button className={styles.toggler}
                onClick={() => setIsOpen(!isOpen)} />

            <ol className={classNames(styles.linksList,
                { [`${styles.listOpen}`]: isOpen })}>
                {linksList.map((link) => <li key={link.content}>
                    <NavLink href={link.href}>{link.content}</NavLink>
                </li>)}
                <li>
                    <Button className={styles.button}
                        onClick={() => dispatch(userActions.logout())}>Logout</Button>
                </li>
            </ol>


        </nav>
    </header>
}

export default Header