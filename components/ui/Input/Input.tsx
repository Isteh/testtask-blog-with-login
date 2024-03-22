import { FC } from 'react'
import styles from './Input.module.scss'
import { IInputProps } from './Input.interface'
import classNames from 'classnames'

const Input: FC<IInputProps> = ({ ...props }) => {
    return <input {...props} className={classNames(props.className,
        styles.input)} />
}

export default Input