import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer"; //for image storage

const foodRouter = express.Router(); //get,post methods

//Image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()} ${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood); //send the data to server to get a response from the browser

foodRouter.get("/list", listFood);

foodRouter.post("/remove", removeFood);

export default foodRouter;
