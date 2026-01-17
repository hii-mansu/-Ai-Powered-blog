import jwt from 'jsonwebtoken';

const auth = (req, res, next)=>{
    const token = req.headers.authorization;

    try {
        if(!token){
            return res.status(401).json({success: false, message: 'Unauthorized'});
        }
        const decoded = jwt.verify(token, process.env.JWTKEY);
        if(decoded && (decoded.email === process.env.ADMINEMAIL)){
            /* && decoded.email === process.env.ADMINEMAIL */
            next();
        }else{
            return res.status(401).json({success: false, message: 'Unauthorized'});
        }
    } catch (error) {
        return res.status(401).json({success: false, message: `Unauthorized: ${error.message}`});
    }
}

export default auth;