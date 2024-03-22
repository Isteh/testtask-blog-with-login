'use client'
import { RootState } from '@/store/store'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

const IsAuth: FC = () => {
    const jwt = useSelector((state: RootState) => state.user.jwt)
    const router = useRouter()
    useEffect(() => {
        if (!jwt)
            router.push('/login')
    }, [jwt, router])
    return <></>
}

export default IsAuth