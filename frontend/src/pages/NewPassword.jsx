import { useEffect, useState } from "react";
import { useParam, Link } from "react-router-dom";
import Alert from "../components/Alert";
import clientAxios from "../config/axios";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState(false);
  const [alert, setAlert] = useState({});
  const [tokenValid, setTokenValid] = useState(false);

  const params = useParam();
  const { token } = params;

  

  useEffect(() => {
    const checkToken = async () => {
      try {
        await clientAxios(`/veterinarian/forgot-password/${token}`);
        setAlert({
          msg: "Write new password",
        });
        setTokenValid(true);
      } catch (error) {
        setAlert({
          msg: "Error on the link",
          error: true,
        });
      }
    };

    checkToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    if (password.length < 6) {
      setAlert({
        msg: "Password to short",
        error: true,
      });
      return;
    }

    try {
      const url = `/veterinarian/forgot-password/${token}`;
      const { data } = await clientAxios.post(url, { password });
      console.log(data);

      setAlert({
        msg: data.msg,
      });
    } catch (error) {
      console.log(error);
      setAlert({
        msg: error.presonse.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alert;
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-5xl">
          Recover your password and keep record of{" "}
          <span className="text-black">Your Patients</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-xl px-5 py-10 rounded-lg bg-white">
        {msg && <Alert alert={alert} />}

        {tokenValid && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <label className="uppercase text-gray-7-- block text-xl font-bold">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Your New Password"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <input
                type="submit"
                value="Save"
                className="bg-indigo-600 w-full py-3 px-10 rounded-2xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
              />
            </form>

            {newPassword && <Link className="block text-center my-5 text-gray-600" to="/">
              Sign In
            </Link>}
          </>
        )}
      </div>
    </>
  );
};

export default NewPassword;
