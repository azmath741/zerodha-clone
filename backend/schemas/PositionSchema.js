const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const PositionSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  product: String,
  name: {
    type: String,
    default: function () {
      const stocks = ["EVEREADY", "TCS", "RELIANCE", "INFY", "HDFC"];
      return stocks[Math.floor(Math.random() * stocks.length)];
    }
  },
  qty: Number,
  avg: Number,
  price: Number,
});
module.exports = { PositionSchema };