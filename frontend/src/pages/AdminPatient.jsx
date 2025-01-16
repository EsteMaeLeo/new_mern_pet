import { Outlet } from "react-router-dom";
import Form from "../components/Form";
import PatientList from "../components/PatientList";
import { useState } from "react";

const AdminPatient = () => {
  const [showForms, setShowForm] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <button
          type="button"
          className="bg-indigo-600 text-white font-bold mx-10 p-3 rounded-md mb-10"
          onClick={() => setShowForm(!showForms)}
        >
         {showForms? "Hide Form": "Show form"}
        </button>

        <div className={`${showForms ? "block" : "hidden"}md:w-1/2`}>
          <Form />
        </div>
        <div className="md:w-1/2 lg:w-3/5">
          <PatientList />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default AdminPatient;
