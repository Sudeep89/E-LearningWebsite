import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { FullName, Email, Password } = req.body;
    const user = await User.findOne({ Email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const HashPassword = await bcryptjs.hash(Password, 10);
    const newUser = new User({
      FullName: FullName,
      Email: Email,
      Password: HashPassword,
    });
    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: newUser._id,
        FullName: newUser.FullName,
        Email: newUser.Email,
      },
    });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const user = await User.findOne({ Email });
    const isMatch = await bcryptjs.compare(Password, user.Password);
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid Username or Password" });
    } else {
      res.status(200).json({
        message: "User logged in successfully",
        user: {
          _id: user._id,
          FullName: user.FullName,
          Email: user.Email,
        },
      });
    }
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: error.message });
  }
};
