import jwt from "jsonwebtoken";
import BLOG from "../dbModels/BLOG.js";
import SITESETTINGS from "../dbModels/SiteSettings.js";
<<<<<<< HEAD
=======
import User from "../dbModels/User.js";
>>>>>>> main

export const adminAuth = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all credentials" });
    };

    const userCheck = await User.findOne({email:email});
    console.log(userCheck);
    if(!userCheck || userCheck.role !=='Admin' || password !== process.env.ADMINPASSWORD){
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized or invalid details." });
    }

    /*if (
      email !== process.env.ADMINEMAIL ||
      password !== process.env.ADMINPASSWORD
    ) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }*/

    const token = await jwt.sign({ email }, process.env.JWTKEY);
    return res.json({ success: true, token, role: userCheck.role });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const adminCheck = async (req, res)=>{
  try {


    const adminInfo = await User.findOne({role:"Admin"});

    const token = await jwt.sign({ email:adminInfo.email }, process.env.JWTKEY);
    res.json({ success: true, token, role: userCheck.role });

    return res.status(200).json({success:true, })
  } catch (error) {
    res.json({ success: false, message:"Error in auth." });

  }
}

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


export const getSiteAllSettibgs = async (req, res) => {
  try {

    const SiAdminInfo = await SITESETTINGS.find();

    return res.status(201).json({ success: true, SiAdminInfo });
  } catch (error) {
    return res
      .status(500)
      .json({ success: true, message: `Error ${error.message}` });
  }
};