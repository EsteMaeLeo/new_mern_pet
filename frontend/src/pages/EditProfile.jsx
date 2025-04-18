import adminNav from "../components/adminNav";
function EditProfile() {
  return (
    <>
      <adminNav />
      <h2 className="font-black text-3xl text-center mt-10">Edit your profile</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Modify your {""}{" "}
        <span className="text-indigo-600 font-bold">Information here</span>
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          <form action=""></form>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
