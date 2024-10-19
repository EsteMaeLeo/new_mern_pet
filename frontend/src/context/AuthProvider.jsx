import { useState, useEffect, createContext } from "react";
import clientAxios from "../config/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //const {children} = props;

  const [load, setLoad] = useState(true);
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem("token");

      console.log(token);
      if (!token) {
        setLoad(true);
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await clientAxios("/veterinarian/profile", config);
        console.log(data);
        setAuth(data);
        console.log("show");
      } catch (error) {
        console.log(error);
        setAuth({});
      }

      setLoad(false);
    };
    authUser();
  }, []);

  const closeSession = () =>{}

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        load,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
