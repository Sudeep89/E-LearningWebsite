import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  image: String,
  category: String,
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
