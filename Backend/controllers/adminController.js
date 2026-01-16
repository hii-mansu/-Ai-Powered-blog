import jwt from 'jsonwebtoken';





export const adminAuth = async(req, res)=>{
    try {
        const {email, password} = req.body;

        if(email !== process.env.ADMINEMAIL || password !== process.env.ADMINPASSWORD){
            return res.status(401).json({seccess: false ,message: "Invalid credentials"});
        }

        const token = await jwt.sign({email}, process.env.JWTKEY);
        res.json({success: true, token});
    } catch (error) {
        return res.status(500).json({success: false, message: "Server Error"});
    }
}