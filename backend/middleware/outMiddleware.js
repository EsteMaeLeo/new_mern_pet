import jwt from "jsonwebtoken";
import Veterinarian from "../models/veterinarian.js";

const checkAuth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);
      const vet = await Veterinarian.findById(decoded.id).select(
        "-password -token -confirm"
      );
      req.veterinario = vet;
      console.log(vet);
      return next();
    } catch (error) {
      const e = new Error("Token not valid...");
      return res.status(403).json({ msg: e.message });
    }
  }

  if (!token) {
    const error = new Error("Token not valid or doesnt exist.....");
    res.status(403).json({ msg: error.message });
  }

  next();
};

export default checkAuth;
