const register = (req, res) => {
  res.json({url:"FROM API VETS DUDE!!!!"});
};

const profile = (req, res) => {
  res.send("FROM API API/VET/profile");
};

export { register, profile };
