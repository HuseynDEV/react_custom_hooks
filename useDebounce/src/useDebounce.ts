import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, duration = 500) => {

    const [debouncedSearch, setDebouncedSearch] = useState<T>(value)
    useEffect(() => {

        const timeout = setTimeout(() => {
            setDebouncedSearch(value)
        }, duration)

        return () => clearInterval(timeout)
    }, [value, duration])

    return debouncedSearch

}