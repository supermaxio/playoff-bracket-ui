
import { createContext, useState } from "react";
import { Authorization } from "../objects/Authorization"

type AuthorizationContextType = {
    auth: Authorization | null,
    setAuth: React.Dispatch<React.SetStateAction<Authorization | null>>
}
const iUserContextState = {
    auth: null,
    setAuth: () => {}
}
const AuthContext = createContext<AuthorizationContextType>(iUserContextState);

export const LocalAuthProvider = ({children} : any) => {
    const [auth, setAuth] = useState<Authorization | null>(null);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;