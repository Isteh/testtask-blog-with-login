import { FC } from 'react'
import { IButtonProps } from './Button.interface'
import styles from './Button.module.scss'

const Button: FC<IButtonProps> = ({ children, ...props }) => {
    return <button {...props}
        className={styles.button}>{children}</button>
}

export default Button