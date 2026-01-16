import fs from "fs";
import { imagekit } from "../config/imageKitConfig.js";
import BLOG from "../dbModels/BLOG.js";

export const postBlog = async (req, res) => {
  try {
    const {
      title,
      description,
      metTitle,
      metaDescription,
      tags,
      category,
      isLive,
    } = JSON.parse(req.body.blog);
    const thumbbail = req.file ? req.file.path : null;

    if (
      !title ||
      !description ||
      !metTitle ||
      !metaDescription ||
      !tags ||
      !category ||
      isLive === undefined
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    if (thumbbail) {
      const fileBuffer = fs.readFileSync(thumbbail.path);

      const response = await imagekit.upload({
        file: fileBuffer,
        fileName: thumbbail.originalname,
        folder: "/blogs"
      });
    }

    const optimizeThumbnailUrl = imagekit.url({
        path: response.filePath,
        transcodeions: [
            { quality: 'auto' },
            { format: 'webp' },
            { width: '1280' }
        ]
    });

    const finalTHumbnail = optimizeThumbnailUrl;

    await BLOG.create({
        title,
        description,
        metTitle,
        metaDescription,
        tags,
        thumbbail: finalTHumbnail,
        category,
        isLive,
    })

    res.status(201).json({ success: true, message: "Blog posted successfully" });


  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
