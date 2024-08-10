import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //const {children} = props;
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) return;
      console.log(token);
    };
    authUser();
  }, []);

  return (
    <AuthContext.Provider>
      value=
      {{
        auth,
        setAuth,
      }}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
