import { createContext, useContext, useState, useEffect } from "react";

export const RefreshContext = createContext({})

function RefreshProvider({ children }) {
    const [ refresh, setRefresh ] = useState(false)

    return (
        <RefreshContext.Provider value={{refresh, setRefresh}}>
            {children}
        </RefreshContext.Provider> 
    )
}

function useRefresh() {
    const context = useContext(RefreshContext)
    
    return context
}

export { RefreshProvider, useRefresh }