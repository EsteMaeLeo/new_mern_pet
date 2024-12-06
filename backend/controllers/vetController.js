import veterinarian from "../models/veterinarian.js";
import generateJWT from "../helpers/generateJWT.js";
import generateid from "../helpers/generateid.js";
import emailSignup from "../helpers/emailSignup.js";
import emailForgotPassword from "../helpers/emailForgotPassword.js";

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

    //sent email
    emailSignup({
      email,
      name,
      token: vetSave.token,
    });

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
    user.token = generateJWT(user.id);
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token = generateJWT(user.id),
    });
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
    await vetFind.save();

    emailForgotPassword({
      email,
      name: vetFind.name,
      token: vetFind.token,
    });

    res.json({
      msg: "Please check the email for with the instructions for reset the password",
    });
  } catch (error) {}
};

const checkToken = async (req, res) => {
  const { token } = req.params;
  console.log(token);
  const validToken = await veterinarian.findOne({ token });

  if (validToken) {
    res.json({ msg: "Valid Token" });
  } else {
    const error = new Error("Token not valid....");
    return res.status(403).json({ msg: error.message });
  }
};

const newPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  console.log(token, password);

  const vet = await veterinarian.findOne({ token });
  if (!vet) {
    const error = new Error("Token not valid....");
    return res.status(403).json({ msg: error.message });
  }
  try {
    console.log(vet);
    vet.token = null;
    vet.password = password;
    await vet.save();
    res.json({ msg: "Password save successfully" });
  } catch (error) {
    console.log(error);
  }
};

export {
  register,
  profile,
  confirm,
  login,
  forgotPassword,
  checkToken,
  newPassword,
};
