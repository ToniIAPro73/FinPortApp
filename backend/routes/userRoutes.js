const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);

router.post(
  "/",
  [
    body("name").notEmpty().withMessage("El nombre es obligatorio"),
    body("email")
      .isEmail()
      .withMessage("Debe ser un email válido"),
  ],
  userController.createUser
);

module.exports = router;
