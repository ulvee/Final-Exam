const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
dotenv.config();

const DB = process.env.DB_URL;
mongoose.connect(DB, { UseNewUrlParser: true });

const { Schema } = mongoose;

const CardSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
    },
  },
  { timestamps: true }
);

const Cards = mongoose.model("cards", CardSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());

//Get all data
app.get("/cards", async (req, res) => {
  try {
    const cards = await Cards.find({});
    res.send(cards);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//Get data by id
app.get("/cards/:id", async (req, res) => {
  try {
    const cardsId = req.params.id;
    const cards = await Cards.findById(cardsId);
    res.send(cards);
  } catch (err) {
    res.status(404).json({ message: "Not Exist" });
  }
});

//Add new data
app.post("/cards", async (req, res) => {
  const createCards = req.body;
  try {
    let cards = new Cards(createCards);
    cards.save();
    res.send(cards);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//Data delete by id
app.delete("/cards/:id", async (req, res) => {
  try {
    const cardsId = req.params.id;
    const cards = await Cards.findByIdAndDelete(cardsId);
    res.send({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(404).json({ message: "Not Exist" });
  }
});

//Update data
app.put("/cards/:id", async (req, res) => {
  try {
    const cardsId = req.params.id;
    const updatedCards = req.body;
    const result = await Cards.findByIdAndUpdate(cardsId, updatedCards, {
      new: true,
    });
    res.send(result);
  } catch (err) {
    res.status(404).json({ message: "Not Exist" });
  }
});

const Port = process.env.Port;
app.listen(Port, () => {
  console.log(`Server is up on Port: ${Port}`);
});
