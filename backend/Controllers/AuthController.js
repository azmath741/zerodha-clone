const { UserModel } = require("../model/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All field's are required", success: false
      });
    }
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist!!", success: false });
    }
    const user = await UserModel.create({
      username,
      email,
      password,
    });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,      // true in production (https)
      sameSite: "lax",
    });
    res.status(200).json({
      message: "User created sucessfully!!", success: true, user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      }
    });
  } catch (error) {
    console.error("signUp not successfull", error);
    res.status(500).json({ message: "SignnUp error", success: false });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: 'All fields are required' })
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ message: 'Incorrect password or email', success: false })
    }
    const isMatch = await user.comparedPassword(password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Credentials", success: false
      });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,      // true in production (https)
      sameSite: "lax",
    });
    res.status(200).json({
      message: "Login successfull",
      success: true,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      }
    });
  } catch (error) {
    console.error("login not successFull", error.message);
    res.status(500).json({ message: "Login Error", success: false });
  }
}

module.exports.getMe = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).json({ message: "unauthorized", success: false });
    }
    console.log(user);
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "getMe Error", success: false });
  }
}
module.exports.Logout = (req, res) => {
  try {
    const token = req.cookies.token;
    if (token) {
      res.clearCookie("token");
      res.json({ success: true });
    }
  } catch (error) {
    console.error(error);
    res.ststus(500).json({ message: "logout Error", success: false });
  }
}