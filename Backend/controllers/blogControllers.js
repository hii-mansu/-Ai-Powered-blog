import fs from "fs";
import imageKit from "../config/imageKitConfig.js";
import BLOG from "../dbModels/BLOG.js";
import mainGemini from "../config/gemini.js";

export const postBlog = async (req, res) => {
  try {
    const {
      title,
      description,
      seoTitle,
      seoDescription,
      tags,
      category,
      isLive,
      content,
    } = JSON.parse(req.body.blog);
    const image = req.file ? req.file.path : null;

    if (
      !title ||
      !description ||
      !seoTitle ||
      !seoDescription ||
      !tags ||
      !category ||
      !content ||
      isLive === undefined
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const fileBuffer = fs.readFileSync(image);
    console.log("1");

    const responsee = await imageKit.upload({
      file: fileBuffer,
      fileName: req.file.originalname,
      folder: "/blogs",
    });
    console.log("3");

    console.log("2");
    const optimizeThumbnailUrl = imageKit.url({
      path: responsee.filePath,
      transformations: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ],
    });

    const finalTHumbnail = optimizeThumbnailUrl;

    console.log("4");

    await BLOG.create({
      title,
      description,
      content,
      seoTitle,
      seoDescription,
      tags,
      image: finalTHumbnail || response.filePath,
      category,
      isLive,
    });

    res
      .status(201)
      .json({ success: true, message: "Blog posted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Error ${error.message}` });
  }
};

export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Blog id missing." });
    }

    const deletedBlog = await BLOG.findByIdAndDelete({_id:id});
    if (!deletedBlog) {
      return res.status(400).json({
        success: false,
        message: "Blog not found or error in deletion.",
      });
    }
    return res.status(201).json({ success: true, message: "Blog deleted." });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Error ${error.message}` });
  }
};

export const togglePublishBlog = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Blog id missing." });
    }

    const blog = await BLOG.findById({ _id: id });
    if (!blog) {
      return res
        .status(400)
        .json({ success: false, message: "Blog not found" });
    }

    await BLOG.findByIdAndUpdate(id, { isLive: !blog.isLive });

    return res
      .status(201)
      .json({ success: true, message: "Blog status updated." });
  } catch (error) {
    return res
      .status(201)
      .json({ success: false, message: `Error, ${error.message}` });
  }
};

export const getAllPublicBlog = async (req, res) => {
  try {
    const blogs = await BLOG.find({ isLive: true });
    if (blogs.length < 0) {
      return res
        .status(400)
        .json({ success: false, message: "No blogs found." });
    }

    return res.status(201).json({ success: true, blogs });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Error ${error.message}` });
  }
};

export const getPublicBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;

    if (!blogId) {
      return res
        .status(400)
        .json({ success: false, message: "Blog id missing." });
    }

    const blog = await BLOG.findById({ _id: blogId, isLive: true });
    if (!blog) {
      return res
        .status(400)
        .json({ success: false, message: "Blog not found." });
    }

    return res.status(201).json({ success: true, blog });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Error ${error.message}` });
  }
};

export const generateBlogByAi = async (req, res) => {
  try {
    const { prompt } = req.body;
    const content = await mainGemini(
      prompt +
        " generate an blog content for ths prompt in json formate, i want ready to use json without doing any extra code , i want json info feilds like, blogTitle, blogDescription, metaTitle, metaDescription, tags, and blog content",
    );
    res.json({ success: true, blog: content });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Error ${error.message}` });
  }
};
