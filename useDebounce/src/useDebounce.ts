
import { useEffect, useState } from "react";


export function useDebounce<T>(value: T, duration = 500) {

    const [debouncedSearch, setDebouncedSearch] = useState<T>(value)


    useEffect(() => {
        const interval = setTimeout(() => {
            setDebouncedSearch(value)
        }, duration)

        return () => clearInterval(interval)

    }, [value, duration])

    return debouncedSearch

}