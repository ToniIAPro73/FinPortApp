const { validationResult } = require("express-validator");
const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email } = req.body;

  try {
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(409).json({ error: "❌ El email ya está registrado" });
    }

    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "❌ Error al crear usuario" });
  }
};
