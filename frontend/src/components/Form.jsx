import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [registerDate, setRegisterDate] = useState(Date.now());
  const [symptoms, setSymptoms] = useState("");
  const [alert, setAlert] = useState("");

  return (
    <>
      <p className="text-lg text-center mb-10">
        Add the patients and {""}
        <span className="text-indigo-600 font-bold">Management</span>
      </p>

      <form className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md">
        <div className="mb-5">
          <label htmlFor="pet" className="text-gray-700 uppercase font-bold">
            Pet Name
          </label>

          <input
            id="pet"
            type="text"
            placeholder="Pet Name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="owner" className="text-gray-700 uppercase font-bold">
            Pet Owner
          </label>

          <input
            id="owner"
            type="text"
            placeholder="Pet Owner"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />

          <label htmlFor="owner" className="text-gray-700 uppercase font-bold">
            Email Owner
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email Owner"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="fecha" className="text-gray-700 uppercase font-bold">
            Register Date
          </label>

          <input
            id="fecha"
            type="date"
            placeholder="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={registerDate}
            onChange={(e) => setRegisterDate(e.target.value)}
          />

          <label
            htmlFor="symptoms"
            className="text-gray-700 uppercase font-bold"
          >
            symptoms
          </label>

          <textarea
            id="symptoms"
            placeholder="Describe symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={symptoms}
            onChange={(e) => setRegisterDate(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors"
          value="Add patient"
        />
      </form>
    </>
  );
};

export default Form;
