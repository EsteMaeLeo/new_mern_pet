const register = (req, res) => {
  res.json({msg:"Creating the user"});
};

const profile = (req, res) => {
    res.json({msg:"USER info"});
};

export { register, profile };
