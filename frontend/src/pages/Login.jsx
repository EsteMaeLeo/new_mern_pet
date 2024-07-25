import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-5xl">
          Login and Manage your <span className="text-black">Patients</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-xl px-5 py-10 rounded-xl bg-white">
        <form>
          <div className="my-5">
            <label className="uppercase text-gray-7-- block text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
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
