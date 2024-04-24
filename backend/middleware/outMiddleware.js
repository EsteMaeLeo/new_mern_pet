const checkAuth = (req, res, next) => {
  console.log("from middleware");
  console.log(req.headers);

  next();
};

export default checkAuth;