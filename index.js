import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { IndicatorController, ObjectController, AddressController, TypeController } from "./controllers/index.js";

mongoose
  .connect("mongodb+srv://admin:7FZ1q6naYVYS0y0X@cluster0.rxr3kzw.mongodb.net/eco")
  .then(() => console.log("DB OK"))
  .catch((err) => console.log("DB ERROR", err));

const app = express();

app.use(express.json());
app.use(cors());

app.post("/types", TypeController.create);
app.post("/addresses", AddressController.create);
app.post("/objects", ObjectController.create);
app.post("/indicators", IndicatorController.create);

app.get("/types", TypeController.getAll);
app.get("/addresses", AddressController.getAll);
app.get("/objects", ObjectController.getAll);
app.get("/indicators", IndicatorController.getAll);

app.get("/types/:id", TypeController.getOne);
app.get("/addresses/:id", AddressController.getOne);
app.get("/objects/:id", ObjectController.getOne);
app.get("/indicators/:id", IndicatorController.getOne);

app.patch("/indicators/:id", IndicatorController.update);

app.listen(process.env.PORT || 4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
