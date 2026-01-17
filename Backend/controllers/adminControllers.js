import jwt from "jsonwebtoken";
import BLOG from "../dbModels/BLOG.js";

export const adminAuth = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all credentials" });
    }

    if (
      email !== process.env.ADMINEMAIL ||
      password !== process.env.ADMINPASSWORD
    ) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = await jwt.sign({ email }, process.env.JWTKEY);
    res.json({ success: true, token });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getAllBlog = async (req, res) => {
  try {
    const blogs = await BLOG.find();
    if (blogs.length > 0) {
      return res.status(201).json({ success: true, blogs });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Error ${error.message}` });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;

    if (!blogId) {
      return res
        .status(400)
        .json({ success: false, message: "Blog id missing." });
    }

    const blog = BLOG.findById(blogId);
    if (!blog) {
      return res
        .status(400)
        .json({ success: false, message: "Blog not found." });
    }

    return res.status(201).json({ success: true, blog });
  } catch (error) {
    return res
      .status(500)
      .json({ success: true, message: `Error ${error.message}` });
  }
};

