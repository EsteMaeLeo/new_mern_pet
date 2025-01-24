import { useContext } from "react";
import PatientProvider from "../context/PatientProvider";

const usePatient = () => {
  return useContext(PatientProvider);
};

export default usePatient;
