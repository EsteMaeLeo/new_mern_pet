const register = (req, res) => {
  console.log(req.body)
  const {email, password, name} = req.body;
  console.log(name)
  console.log(email)
  console.log(password)
  res.json({msg:"Creating the user"});
};

const profile = (req, res) => {
    res.json({msg:"USER info"});
};

export { register, profile };
