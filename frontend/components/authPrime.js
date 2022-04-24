import { useRouter } from 'next/router'
import { useEffect } from 'react'

const authPrime = WrappedComponent => {
    const Wrapper = props => {
        const { token } = props
        const router = useRouter()
        useEffect(() => {
            if (!token)
                router.push('/userPrime')
        }, [token])
        return (<WrappedComponent {...props} />)
    }
    return Wrapper
}

export default authPrime