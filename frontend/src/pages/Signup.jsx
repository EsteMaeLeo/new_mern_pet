import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [alert, setAlert] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, email, password, confirmPassword].includes("")) {
      setAlert({ msg: "Empty fields", error: true });
      return;
    }

    if (password !== confirmPassword) {
      setAlert({ msg: "Passwords not match", error: true });
      return
    }

    if (password.length < 6) {
      setAlert({ msg: "Password is to short", error: true });
      return
    }

    setAlert({});

    try{
        const url = "http://localhost:4005/api/veterinarian";
        const response = await axios.post(url, {name,email,password})
        console.log(response)
    }cach(error){
        console.log(error)
    }
  };

  const { msg } = alert;

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-5xl">
          SignUp and Manage your <span className="text-black">Patients</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-xl px-5 py-10 rounded-lg bg-white">
        {msg && <Alert alert={alert} />}

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
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-7-- block text-xl font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Your Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-7-- block text-xl font-bold">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Your Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Create"
            className="bg-indigo-600 w-full py-3 px-25 rounded-2xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800"
          />
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link className="block text-center my-5 text-gray-600" to="/">
            Do you have account? Sign
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
export default Signup;
