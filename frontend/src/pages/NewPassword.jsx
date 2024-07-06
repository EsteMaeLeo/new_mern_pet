import { useEffect, useState } from "react";

const NewPassword = () => {
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkTocken = async (req, res) => {
      const { token } = req.params
      console.log('***')
    }
  })

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-5xl">
          Recover your password and keep record of{" "}
          <span className="text-black">Your Patients</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-xl px-5 py-10 rounded-lg bg-white">
        <form>
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
            className="bg-indigo-600 w-full py-3 px-10 rounded-2xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800"
          />
        </form>
      </div>
    </>
  );
};

export default NewPassword;
