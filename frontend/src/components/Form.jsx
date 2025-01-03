const Form = () => {
  return (
    <>
      <p className="text-lg text-center mb-10">
        Add the patients and {""}
        <span className="text-indigo-600 font-bold">Management</span>
      </p>

      <form>
        <div className="mb-5">
          <label htmlFor="pet" className="text-gray-700 uppercase font-bold">
            Pet Name
          </label>

          <input
            id="pet"
            type="text"
            placeholder="Pet Name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
           <label htmlFor="owner" className="text-gray-700 uppercase font-bold">
            Pet Owner
          </label>

          <input
            id="owner"
            type="text"
            placeholder="Pet Owner"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
      </form>
    </>
  );
};

export default Form;
