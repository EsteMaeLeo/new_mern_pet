import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children} ) => {

    //const {children} = props;
    const [auth, setAuth] = useState({})

    return(
        <AuthContext.Provider>
            value={{
                auth,
                setAuth
            }}
        </AuthContext.Provider>
    )
};

export { AuthProvider };
export default AuthContext;
