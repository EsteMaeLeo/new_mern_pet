import jwt from "jsonwebtoken";
import veterinarian from "../models/veterinarian.js";

const checkAuth = (req, res, next) => {
  console.log("from middleware");
  console.log(req.headers);
  console.log(req.headers.authorization);
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    console.log("Has Token Valid  with Bearer");
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded)
      const veterinarian
    } catch (error) {
      const e = new Error("Token not valid...");
      res.status(403).json({ msg: e.message });
    }
  }

  const error = new Error("Token not valid or doesnt exist.....");
  res.status(403).json({ msg: error.message });

  next();
};

export default checkAuth;
