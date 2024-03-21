import { FC, ReactNode, memo } from 'react'
import { ITitleProps } from './Title.interface'

const Title: FC<ITitleProps> = ({ children, level, ...props }) => {
    let Heading: ReactNode = <></>
    switch (level) {
        case 'h1': Heading = <h1 {...props}>{children}</h1>; break
        case 'h2': Heading = <h2 {...props}>{children}</h2>; break
        case 'h3': Heading = <h3 {...props}>{children}</h3>; break

    }
    return <>{Heading}</>
}

export default memo(Title)