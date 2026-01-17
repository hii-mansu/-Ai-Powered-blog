import express from 'express';
import uploadFile from '../middlewares/multer.js';
import { postBlog, togglePublishBlog, deleteBlogById, getAllPublicBlog, getPublicBlogById } from '../controllers/blogControllers.js'
import auth from '../middlewares/auth.js';
const routerBlog = express.Router();

routerBlog.post('/write', uploadFile.single('image'),auth, postBlog);
routerBlog.patch('/togglepublish', auth, togglePublishBlog);
routerBlog.delete('/deletebyid', auth, deleteBlogById);
routerBlog.get('/allblogs', getAllPublicBlog);
routerBlog.get('/blogbyid', getPublicBlogById);


export default routerBlog;