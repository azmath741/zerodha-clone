const { Signup, Login, getMe, Logout } = require('../Controllers/AuthController');
const protect = require('../middlewares/AuthMiddleware');
const authRouter = require("express").Router();

authRouter.post("/signup", Signup)
  .post("/login", Login)
  .post("/logout", Logout)
  .get("/me", protect, getMe);

module.exports = authRouter;
