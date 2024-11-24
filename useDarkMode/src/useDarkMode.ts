import { useEffect, useState } from "react"

export const useDarkMode = (key: string) => {
    const [mode, setMode] = useState(() => {
        return JSON.parse(window.localStorage.getItem(key) || '[]')
    })

    useEffect(() => {
        return window.localStorage.setItem(key, JSON.stringify(mode))
    }, [mode])

    return [mode, setMode]


}