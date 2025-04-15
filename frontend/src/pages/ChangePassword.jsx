import adminNav from "../components/adminNav";

const ChangePassword = () => {
  return (
    <>
      <adminNav />
      <h2 className="font-black text-3xl text-center mt-10">Change Password</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modify your {""}{" "}
        <span className="text-indigo-600 font-bold">Password here</span>
      </p>
    </>
  );
};

export default ChangePassword;
