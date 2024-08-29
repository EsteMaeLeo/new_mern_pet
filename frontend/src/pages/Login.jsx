import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Alert from "../components/Alert";
import clientAxios from "../config/axios";

const Login = () => {
  const { auth } = useAuth();
  console.log(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlert({
        msg: "All fields are mandatory",
        error: true,
      });
      return;
    }
    try {
      const { data } = await clientAxios.post("veterinarian/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);

      console.log(data);
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alert;

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-5xl">
          Login and Manage your <span className="text-black">Patients</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-xl px-5 py-10 rounded-xl bg-white">
        {msg && <Alert alert={{ alert }} />}

        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-7-- block text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-7-- block text-xl font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Your password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Login"
            className="bg-indigo-600 w-full py-3 px-25 rounded-2xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800"
          />
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link className="block text-center my-5 text-gray-600" to="/signup">
            Dont have account? SignUp
          </Link>
          <Link
            className="block text-center my-5 text-gray-600"
            to="/forgot-password"
          >
            Forgot Password
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Login;
