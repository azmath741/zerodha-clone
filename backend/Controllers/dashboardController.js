const { HoldingsModel } = require('../model/HoldingsModel');
const { OrdersModel } = require('../model/OrdersModel');
const { PositionModel } = require('../model/PositionModel');

module.exports.ordersData = async (req, res) => {
  try {
    const orders = await OrdersModel.find({ userId: req.user.id });
    res.status(200).json(orders);
  } catch (err) {
    console.error(err);
    res.json({ message: "error while fetching orders" });
  }
};

module.exports.holdingsData = async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({ userId: req.user.id });
    res.status(200).json(holdings);
  } catch (err) {
    console.error(err);
    res.json({ message: "error while fetching holdings" });
  }
};

module.exports.positionsData = async (req, res) => {
  try {
    const positions = await PositionModel.find({ userId: req.user.id });
    res.status(200).json(positions);
  } catch (err) {
    console.error(err);
    res.json({ message: "error while fetching positions" });
  }
};

module.exports.newOrder = async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      userId: req.body.userId,
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.send("Order Placed Successfully");
    console.log("REQ BODY:", req.body);
    //positions
    const position = new PositionModel({
      userId: req.body.userId,
      product: req.body.name,
      qty: req.body.qty,
      avg: avg,
      price: req.body.price
    });

    await position.save();

  } catch (err) {
    console.error(err);
    res.json({ message: "error while newOrder" });
  }
};
