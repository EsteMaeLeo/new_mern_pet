import veterinarian from "../models/veterinarian.js";

const register = async (req, res) => {
  console.log(req.body);
  const { email, password, name } = req.body;

  const findUser = await veterinarian.findOne({ email });

  if (findUser) {
    const error = new Error("User with the same email already register");
    return res.status(400).json({ msg: error.message });
  }

  console.log(name);
  console.log(email);
  console.log(password);

  try {
    //save new veterinarian
    const vet = new veterinarian(req.body);
    const vetSave = await vet.save();
    res.json(vetSave);
  } catch (error) {
    console.log(error);
  }
};

const profile = (req, res) => {
  res.json({ msg: "USER info" });
};

export { register, profile };
