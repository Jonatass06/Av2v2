import { useRouter } from "next/router"
import { useEffect } from "react"

export default () => {
    const router = useRouter()

    useEffect(() => {
        router.push("/login")
    }, [1000])
    return (<>
    </>)
}