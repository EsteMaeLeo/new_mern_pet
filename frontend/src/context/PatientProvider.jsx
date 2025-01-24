import { createContext, useState, useEffect } from "react";
import clientAxios from "../config/axios";

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  return 
  <PatientContext.Provider value={{ patients }}>
    {children}
  </PatientContext.Provider>;
};
