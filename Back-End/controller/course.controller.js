import Course from "../model/course.model.js";

export const getCourse = async (req, resp) => {
  try {
    const course = await Course.find();
    resp.status(200).json(course);
  } catch (error) {
    console.log("Error: ", error);
    resp.status(500).json({ message: error.message });
  }
};
