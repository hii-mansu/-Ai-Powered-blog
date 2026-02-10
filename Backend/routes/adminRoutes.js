import express from 'express';
import auth from '../middlewares/auth.js'
<<<<<<< HEAD
import { adminAuth, getAllBlog, getBlogById, getSiteAllSettibgs } from '../controllers/adminControllers.js';
=======
import { adminAuth, adminCheck, getAllBlog, getBlogById, getSiteAllSettibgs } from '../controllers/adminControllers.js';
>>>>>>> main

const routerAdmin = express.Router();

routerAdmin.post('/auth', adminAuth);
routerAdmin.get('/verify',auth, adminCheck);
routerAdmin.get('/allblogs', auth, getAllBlog);
routerAdmin.get('/blogbyid/:blogId', auth, getBlogById);
routerAdmin.get('/siteadminsettings', auth, getSiteAllSettibgs);

export default routerAdmin;