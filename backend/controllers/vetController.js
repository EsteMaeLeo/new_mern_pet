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
    console.log(vetSave);
    res.json(vetSave);
  } catch (error) {
    console.log(error);
  }
};

const profile = (req, res) => {
  res.json({ msg: "USER info" });
};

const confirm = async (req, res) => {
  const { token } = req.params;

  const confirmUser = await veterinarian.findOne({ token });

  if (!confirmUser) {
    const error = new Error("Invalid Token");
    return res.status(404).json({ msg: error.message });
  }

  console.log(confirmUser);

  try {
    //save new veterinarian
    confirmUser.token = null;
    confirmUser.confirm = true;
    await confirmUser.save();
    res.json({ msg: "User confirm correctly" });
  } catch (error) {
    console.log(error);
  }
};

const login = (req, reg) => {
  res.json({ msg: "login" });
};
export { register, profile, confirm, login };
