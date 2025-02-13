import { createContext, useState, useEffect } from "react";
import clientAxios from "../config/axios";

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getPatient = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clientAxios("/patient", config);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getPatient();
  }, []);

  const savePatient = async (patient) => {

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    if (patient.id) {
      try {
        const {data} = await clientAxios.put(`/patient/${patient._id}`, patient, config)
      } catch (error) {
        console.log(error)
      }
    } else {
      try {

        const { data } = await clientAxios.post("/patient", patient, config);

        const { __V, ...patienSave } = data;
        setPatients([patienSave, ...patients]);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    }
  };

  const setEdition = (patient) => {
    setEdition(patient);
  };

  return (
    <PatientContext.Provider
      value={{
        patients,
        savePatient,
        setEdition,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export default PatientContext;
