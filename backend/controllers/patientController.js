import Patient from "../models/Patient.js";

const addPatient = async (req, res) => {
  const patient = new Patient(req.body);
  patient.vet = req.veterinario._id;
  console.log(patient);

  try {
    const patientSave = await patient.save();
    res.json(patientSave);
  } catch (error) {
    console.log(error);
  }
};

const getPatients = async (req, res) => {
    const patient = await Patient.find()
    .where("vet")
    .equals(req.veterinario)
};

const getPatient= async (req, res) => {}
const updatePatient= async (req, res) => {}
const deletePatient= async (req, res) => {}

export { addPatient, getPatients, getPatient, updatePatient, deletePatient };
