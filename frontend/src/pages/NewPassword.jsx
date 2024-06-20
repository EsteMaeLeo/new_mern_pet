import { useState } from "react";

const NewPassword = () => {
  const [password, setPassword] = useState("");
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
        </form>
      </div>
    </>
  );
};

export default NewPassword;
