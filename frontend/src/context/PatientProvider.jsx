import { createContext, useState, useEffect } from "react";
import clientAxios from "../config/axios";

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  const savePatient = async (patient) => {
    console.log(patient);
  };

  return (
    <PatientContext.Provider
      value={{
        patients,
        savePatient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};
