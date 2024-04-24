const checkAuth = (req, res, next) => {
  console.log("from middleware");
  console.log(req.headers);
  console.log(req.header.authorization);

  if (
    req.header.authorization &&
    req.header.authorization.startsWith("Bearer")
  ) {
    console.log("Has Token Valid  with Bearer");
  } else {
    const error = new Error("Token not valid or doesnt exist.....");
    return res.status(403).json({ msg: error.message });
  }

  next();
};

export default checkAuth;
