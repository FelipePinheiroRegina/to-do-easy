import { createContext, useContext, useState, useEffect } from "react";

export const RefreshContext = createContext({})

function RefreshProvider({ children }) {
    const [ refresh, setRefresh ] = useState(false)
    const [ light, setLight ] = useState(Boolean)
    
    useEffect(() => {
        const checkExist = localStorage.getItem("@to-do-easy:light")
        
        if(checkExist) {
            setLight(true)
            document.documentElement.classList.add('light')
        } else {
            setLight(false)
        }
    }, [])

    return (
        <RefreshContext.Provider value={{
            refresh, 
            setRefresh,
            light,
            setLight
            }}>
            {children}
        </RefreshContext.Provider> 
    )
}

function useRefresh() {
    const context = useContext(RefreshContext)
    
    return context
}

export { RefreshProvider, useRefresh }