const { ordersData, holdingsData, positionsData, newOrder } = require('../Controllers/dashboardController');
// const protect = require('../middlewares/AuthMiddleware');
const dashboardRouter = require("express").Router();
dashboardRouter.get("/orders", ordersData)
  .get("/holdings", holdingsData)
  .get("/positions", positionsData)
  .post("/newOrder", newOrder);
module.exports = dashboardRouter;