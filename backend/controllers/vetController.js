import veterinarian from "../models/veterinarian.js";
import generateJWT from "../helpers/generateJWT.js";
import generateid from "../helpers/generateid.js";

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
  const { veterinario } = req;
  console.log(veterinario);
  res.json({ profile: veterinario });
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

const login = async (req, res) => {
  console.log(req.body);

  const { email, password } = req.body;

  const user = await veterinarian.findOne({ email });
  if (!user) {
    const error = new Error("User doesnt exist.....");
    return res.status(403).json({ msg: error.message });
  }
  console.log(user);
  if (user.confirm === "false") {
    console.log(user.confirm);
    const error = new Error("User is not confirm.....");
    return res.status(403).json({ msg: error.message });
  }

  if (await user.checkPassword(password)) {
    console.log("password correct");
    res.json({ token: generateJWT(user.id) });
  } else {
    const error = new Error("WRONG Password.....");
    return res.status(403).json({ msg: error.message });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  const vetFind = await veterinarian.findOne({ email });
  if (!vetFind) {
    const error = new Error("User doesnt exist....");
    return res.status(403).json({ msg: error.message });
  }

  try {
    vetFind.token = generateid();
    await vetFind.save(
      res.json({
        msg: "Check the email for the instructions to reset the password",
      })
    );
  } catch (error) {}
};

const checkToken = (req, res) => {};

const newPassword = (req, res) => {};

export {
  register,
  profile,
  confirm,
  login,
  forgotPassword,
  checkToken,
  newPassword,
};
