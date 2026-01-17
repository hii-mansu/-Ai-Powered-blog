import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    metTitle: {type: String, required: true},
    metaDescription: {type: String, required: true},
    tags: {type: [], required: true},
    image: {type: String,},
    category: {type: String, required: true},
    isLive: {type: Boolean, required: true},
}, {timestamps: true});

const BLOG = mongoose.model("BLOG", blogSchema);

export default BLOG;