import express from 'express';
import uploadFile from '../middlewares/multer.js';
import { postBlog, togglePublishBlog, deleteBlogById, getAllPublicBlog, getPublicBlogById, generateBlogByAi } from '../controllers/blogControllers.js'
import auth from '../middlewares/auth.js';
const routerBlog = express.Router();

routerBlog.post('/write', uploadFile.single('image'),auth, postBlog);
routerBlog.post('/write/ai', auth, generateBlogByAi);
routerBlog.patch('/togglepublish', auth, togglePublishBlog);
routerBlog.delete('/deletebyid/:id', auth, deleteBlogById);
routerBlog.get('/allblogs', getAllPublicBlog);
routerBlog.get('/blogbyid/:blogId', getPublicBlogById);


export default routerBlog;