import express from 'express';
import { adminAuth } from '../controllers/adminController.js';

const routerAdmin = express.Router();

routerAdmin.post('/auth', adminAuth);

export default routerAdmin;