'use client'
import { FC } from 'react'
import styles from './NavLink.module.scss'
import Link from 'next/link'
import { INavLinkProps } from './Navlink.interface'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

const NavLink: FC<INavLinkProps> = ({ children, ...props }) => {
    const pathname = usePathname()
    return <Link {...props} className=
        {classNames(styles.link,
            { [`${styles.active}`]: pathname === props.href })}>
        {children}
    </Link >
}

export default NavLink