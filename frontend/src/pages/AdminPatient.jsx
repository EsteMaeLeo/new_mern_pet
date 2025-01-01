import { Outlet } from "react-router-dom";
import Form from "../components/Form";
import PatientList from "../components/PatientList";

const AdminPatient = () => {
  return (
    <>
      <div className="flex">
        <div className="md:w-1/2">
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
 