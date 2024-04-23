const checkAuth = (req, res, next) => {
  console.log("from middleware");

  next();
};

export default checkAuth;