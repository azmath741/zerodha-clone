const { UserModel } = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  const token = req.cookies.token;;
  if (!token) {
    return res.status(401).json({ message: "unauthorized", success: false });
  }
  try {
    const decode = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = await UserModel.findById(decode.id).select("-password");
    if (!req.user) {
      return res.status(401).json({ message: "unauthorized", success: false });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalide token", success: false })
  }
}
module.exports = protect;