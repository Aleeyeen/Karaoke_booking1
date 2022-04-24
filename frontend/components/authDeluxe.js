import { useRouter } from 'next/router'
import { useEffect } from 'react'

const authDeluxe = WrappedComponent => {
    const Wrapper = props => {
        const { token } = props
        const router = useRouter()
        useEffect(() => {
            if (!token)
                router.push('/userDeluxe')
        }, [token])
        return (<WrappedComponent {...props} />)
    }
    return Wrapper
}

export default authDeluxe