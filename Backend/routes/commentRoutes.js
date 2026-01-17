import express from 'express';
import auth from '../middlewares/auth.js'
import { addComment, deleteComment, getAllComments, getCommentsByBlog, toggleCommentStatus } from '../controllers/commentControllers.js';

const routerComment = express.Router();

routerComment.post('/add', addComment);
routerComment.patch('/status/:id',auth, toggleCommentStatus);
routerComment.get('/onblog/:id', getCommentsByBlog);
routerComment.get('/all',auth, getAllComments);
routerComment.delete('/delete/:id',auth, deleteComment);

export default routerComment;