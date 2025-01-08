import { Outlet } from "react-router-dom";
import Form from "../components/Form";
import PatientList from "../components/PatientList";
import { useState } from "react";

const AdminPatient = () => {
  
  const [showForms, setShowForm] = useState(false)
  
  return (
    <>
      <div className="flex flex-col md:flex-row">
      <div className={`${showForms ? 'block' : 'hidden'}md:w-1/2`}>
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
 