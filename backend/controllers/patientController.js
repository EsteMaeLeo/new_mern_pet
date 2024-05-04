import Patient from "../models/Patient.js";

const addPatient = (req, res) => {
  console.log(req.body);
  const patient = new Patient(req.body);
  console.log(patient);

  try {
    
  } catch (error) {
    console.log(error)
  }
};

const getPatient = (req, res) => {};

export { addPatient, getPatient };
