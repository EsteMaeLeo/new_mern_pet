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
  const patient = await Patient.find();
};

const getPatient = async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findById(id);

  if (patient.vet._id.ToString() !== req.vet._id.toString()) {
    return res.json({ msg: "Action or request not valid" });
  }

  if (patient) {
    res.json(patient);
  }
};

const updatePatient = async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findById(id);

  if (!patient) {
    res.status(404).json({ msg: "Patient not found" });
  }

  if (patient.vet._id.ToString() !== req.vet._id.toString()) {
    return res.json({ msg: "Action or request not valid" });
  }

  patient.name = req.body.name;

  try {
    const patientUpdate = await patient.save();
    res.json(patientUpdate);
  } catch (error) {
    console.log(error);
  }
};

const deletePatient = async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findById(id);

  if (!patient) {
    res.status(404).json({ msg: "Patient not found" });
  }

  if (patient.vet._id.ToString() !== req.vet._id.toString()) {
    return res.json({ msg: "Action or request not valid" });
  }

  try {
    await patient.deleteOne();
  } catch (error) {
    console.log(error);
  }
};

export { addPatient, getPatients, getPatient, updatePatient, deletePatient };
