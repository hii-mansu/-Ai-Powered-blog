import express from 'express';
import auth from '../middlewares/auth.js'
import { adminAuth, getAllBlog, getBlogById, getSiteAllSettibgs } from '../controllers/adminControllers.js';

const routerAdmin = express.Router();

routerAdmin.post('/auth', adminAuth);
routerAdmin.get('/allblogs', auth, getAllBlog);
routerAdmin.get('/blogbyid/:blogId', auth, getBlogById);
routerAdmin.get('/siteadminsettings', auth, getSiteAllSettibgs);

export default routerAdmin;