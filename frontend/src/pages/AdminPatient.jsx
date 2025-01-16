import { Outlet } from "react-router-dom";
import Form from "../components/Form";
import PatientList from "../components/PatientList";
import { useState } from "react";

const AdminPatient = () => {
  const [showForms, setShowForm] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className={`${showForms ? "block" : "hidden"}md:w-1/2`}>
          <button
            type="button"
            className="bg-indigo-600 text-white font-bold mx-10 p-3 rounded-md"
            onClick={() => setShowForm(true)}
          >
            Show form
          </button>
          <Form />
        </div>
        <div className="md:w-1/2">
          <PatientList />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default AdminPatient;
