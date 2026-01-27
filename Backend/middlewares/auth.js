import jwt from 'jsonwebtoken';
import User from '../dbModels/User.js';

const auth = async(req, res, next)=>{
    const token = req.headers.authorization;

    try {
        if(!token){
            return res.status(401).json({success: false, message: 'Unauthorized, token required.'});
        }
        const decoded = jwt.verify(token, process.env.JWTKEY);
        const adminCheck = await User.findOne({email: decoded.email});
        if(decoded && adminCheck && (decoded.email === adminCheck.email && adminCheck.role === "Admin")){
            /* && decoded.email === process.env.ADMINEMAIL */
            next();
        }else{
            return res.status(401).json({success: false, message: 'Unauthorized token.'});
        }
    } catch (error) {
        return res.status(401).json({success: false, message: `Unauthorized: ${error.message}`});
    }
}

export default auth;