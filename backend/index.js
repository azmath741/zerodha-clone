require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const { PositionModel } = require("./model/PositionModel");
const { HoldingsModel } = require("./model/HoldingsModel");
const { OrdersModel } = require("./model/OrdersModel");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { userVerification } = require("./middlewares/AuthMiddleware");
const authRouter = require("./routes/auth.routes");
const dashboardRouter = require('./routes/dashboard.routes');


const app = express();
const PORT = process.env.PORT || 3002;
const mongoUrl = process.env.MONGO_URL;

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/auth', authRouter);
app.use('/api', dashboardRouter);



app.get("/allPositions", async (req, res) => {
  let positionModel = await PositionModel.find({});
  res.json(positionModel);
});


app.get("/allHoldings", async (req, res) => {
  let holdingsModel = await HoldingsModel.find({});
  res.json(holdingsModel);
});

app.listen(PORT, () => {
  console.log(`app is listening at ${PORT}`);
  //Mongo Atlas connection
  mongoose.connect(mongoUrl)
    .then(() => console.log('Database Connected!'))
    .catch((err) => { console.log(err) });
});