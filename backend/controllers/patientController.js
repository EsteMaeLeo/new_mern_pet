import Patient from "../models/Patient.js";

const addPatient = async (req, res) => {
  const patient = new Patient(req.body);
  patient.vet = req.veterinario._id;

  try {
    const patientSave = await patient.save();
    res.json(patientSave);
  } catch (error) {
    console.log(error);
  }
};

const getPatients = async (req, res) => {
  const patients = await Patient.find().where("vet").equals(req.veterinario);

  res.json(patients);
};

const getPatient = async (req, res) => {
  const { id } = req.params;

  const patientFind = await Patient.findById(id.trim());

  if (patientFind.vet._id.toString() !== req.veterinario._id.toString()) {
    return res.json({ msg: "Action or request not valid" });
  }

  if (patientFind) {
    res.json(patientFind);
  }
};

const updatePatient = async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findById(id);

  if (!patient) {
    res.status(404).json({ msg: "Patient not found" });
  }

  if (patient.vet._id.toString() !== req.veterinario._id.toString()) {
    return res.json({ msg: "Action or request not valid" });
  }

  patient.name = req.body.name || patient.name;
  patient.owner = req.body.owner || patient.owner;
  patient.email = req.body.email || patient.email;
  patient.registerDate = req.body.registerDate || patient.registerDate;
  patient.symptoms = req.body.symptoms || patient.symptoms;

  try {
    const patientUpdate = await patient.save();
    res.json(patientUpdate);
  } catch (error) {
    console.log(error);
  }
};

const deletePatient = async (req, res) => {
  const { id } = req.params;

  try {
    const patient = await Patient.findById(id);

    if (patient.vet._id.toString() !== req.veterinario._id.toString()) {
      return res.json({ msg: "Action or request not valid" });
    }

    try {
      await patient.deleteOne();
      res.json({ msg: "Patient deleted" });
    } catch (error) {}
  } catch (error) {
    res.status(404).json({ msg: "Patient not found" });
  }
};

export { addPatient, getPatients, getPatient, updatePatient, deletePatient };
