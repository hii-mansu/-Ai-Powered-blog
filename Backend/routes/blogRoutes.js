import express from 'express';
import { postBlog } from '../controllers/blogController.js';

const blogRouter = express.Router();

blogRouter.post('/write', postBlog)