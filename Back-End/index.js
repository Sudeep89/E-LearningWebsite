import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import courseRoute from "./route/course.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;
const DBURI = process.env.MongoDBURI;
//connect to MongoDB
try {
  mongoose.connect(DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error: ", error);
}

//Defining routes
app.use("/course", courseRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
