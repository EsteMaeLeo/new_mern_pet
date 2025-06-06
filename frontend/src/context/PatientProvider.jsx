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
        const { data } = await clientAxios.put(
          `/patient/${patient.id}`,
          patient,
          config
        );
        const patientUpdated = patients.map((patientState) =>
          patientState._id === data._id ? data : patientState
        );
        setPatients(patientUpdated);
      } catch (error) {
        console.log(error);
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
    setPatient(patient);
  };

  const deletePatient = async (id) => {
    const confirmMsg = confirm("Confirm you want to delete?");
    if (confirmMsg) {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clientAxios.delete(`/patients/${id}`, config);
        console.log(data);
        const patientUpdated = patients.filter(
          (patientState) => patientState._id !== id
        );
        setPatients(patientUpdated);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <PatientContext.Provider
      value={{
        patients,
        savePatient,
        setEdition,
        patient,
        deletePatient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export default PatientContext;
