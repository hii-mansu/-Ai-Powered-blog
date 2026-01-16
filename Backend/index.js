import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/db.js';
import routerAdmin from './routes/adminRoutes.js';


const app = express();
await connectDB();

app.use(cors());
app.use(express.json());



app.get('/', (req, res)=>{
    res.send('API is running...');
})
app.use('/api/admin', routerAdmin);


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

export default app;