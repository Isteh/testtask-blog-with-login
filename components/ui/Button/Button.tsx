import { FC } from 'react'
import { IButtonProps } from './Button.interface'
import styles from './Button.module.scss'
import classNames from 'classnames'

const Button: FC<IButtonProps> = ({ children, ...props }) => {
    return <button {...props}
        className={classNames(styles.button,
            props.className)}>{children}</button>
}

export default Button