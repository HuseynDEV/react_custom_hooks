import { useEffect, useState } from "react"

export const useCountDown = (length = 60) => {
    const [count, setCount] = useState(length)

    useEffect(() => {

        const timer = setTimeout(() => {
            return setCount(count=>count - 1)
        }, 1000)

        return () => clearInterval(timer)

    }, [])


    return count
}