import { createContext, useState, useEffect } from "react";
import clientAxios from "../config/axios";

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  useEffect(()=>{
    const getPatient = async ()=>{}

    getPatient()

  },[])

  const savePatient = async (patient) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await clientAxios.post("/patients", patient, config);

      const {__V, ...patienSave} = data;
      setPatients([patienSave, ...patients])
      
    } catch (error) {
      console.log(error.response.data.msg);
    }
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

export default PatientContext;
