const checkAuth = (req, res, next) => {
  console.log("from middleware");
  console.log(req.headers);
  console.log(req.header.authorization);

  next();
};

export default checkAuth;