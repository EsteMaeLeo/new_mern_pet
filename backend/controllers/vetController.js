import veterinarian from "../models/veterinarian.js";

const register = async (req, res) => {
  console.log(req.body);
  const { email, password, name } = req.body;
  console.log(name);
  console.log(email);
  console.log(password);

  try {
    //save new veterinarian
    const vet = new veterinarian(req.body);
    const vetSave = await vet.save();
    res.json({ msg: "Creating the user" });
  } catch (error) {
    console.log(error);
  }
};

const profile = (req, res) => {
  res.json({ msg: "USER info" });
};

export { register, profile };
