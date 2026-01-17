import BLOG from '../dbModels/BLOG.js';
import Comment from '../dbModels/Comment.js';




export const addComment = async(req, res)=>{
    try {
        const {name, blog, comment} = req.body;

        if(!name || !blog || !comment){
            return res.status(400).json({success: false, message: 'Something missing.'});
        }

        const checkblog = BLOG.findById(blog);

        if(!checkblog){
            return res.status(404).json({success: false, message: 'Blog not found'});
        };

        Comment.create({
            name,
            comment,
            blog
        });

        await Comment.save();
        return res.status(201).json({ success: true, message: 'Comment added successfully.'});

    } catch (error) {
        return res.status(500).json({ success: false, message: `Error ${error.message}` });
    }
}

export const toggleCommentStatus = async(req, res)=>{
    try {
        const {id} = req.params;

        if(!id){
            return res.status(400).json({success: false, message: 'Comment id is missing.'});
        }

        const comment = await Comment.findById(id);

        if(!comment){
            return res.status(404).json({success: false, message: 'Comment not found'});
        }

        comment.isApproved = !comment.isApproved;

        await comment.save();

        return res.status(200).json({success: true, message: 'Comment status updated successfully.'});
    } catch (error) {
        return res.status(500).json({ success: false, message: `Error ${error.message}` });
    }
}

export const getCommentsByBlog = async(req, res)=>{
    try {
        const {blogId} = req.params;
        if(!blogId){
            return res.status(400).json({success: false, message: 'Blog id is missing.'});
        };

        const comments = await Comment.find({blog: blogId, isApproved: true}).sort({createdAt: -1});

        if(!comments || comments.length<1){
            return res.status(404).json({success: false, message: 'No comments found for this blog .'});
        };

        return res.status(200).json({success: true, comments});
    } catch (error) {
        return res.status(500).json({ success: false, message: `Error ${error.message}` });
    }
}

export const getAllComments = async(req, res)=>{
    try {
        const comments = await Comment.find().populate('blog').sort({createdAt: -1});

        return res.status(200).json({success: true, comments});
    } catch (error) {
        return res.status(500).json({ success: false, message: `Error ${error.message}` });
    }
}

export const deleteComment = async(req, res)=>{
    try {
        const {id} = req.params;

        if(!id){
            return res.status(400).json({success: false, message: 'Comment id is missing.'});
        }

        const comment = await Comment.findByIdAndDelete(id);

        if(!comment){
            return res.status(404).json({success: false, message: 'Comment not deleted. Comment not found'});
        }

        return res.status(200).json({success: true, message: 'Comment deleted successfully.'});
    } catch (error) {
        return res.status(500).json({ success: false, message: `Error ${error.message}` });
    }
}