import { Children, createContext, useState } from "react";


export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    const [isAuth, setAuth] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginDetails = (e) => {
        e.target.type=="email" ? setEmail(e.target.value) : setPassword(e.target.value);
    }

    const logout = () => {
        setAuth(false);
    }

    return(
        <AuthContext.Provider value={{handleLoginDetails, logout, isAuth}}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider;