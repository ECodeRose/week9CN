const User = require("./model");

const signupUser = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    res.status(201).json({ message: "user added", user: user });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["username", "email"],
      exclude: ["password"],
    });
    res.status(200).json({ message: `all users`, users: users });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getSingleUserById = async (req, res) => {
  const user = await User.findOne({ where: { username: req.params.username } });

  res.send({ message: "success", user: user });
};

module.exports = {
  signupUser: signupUser,
  getAllUsers: getAllUsers,
  getSingleUserById: getSingleUserById,
};
