import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dummyData from './dummyData.js'; 
const app = express();
app.use(cors())
app.use(express.json());
dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
})

app.get('/', (req, res) => {
    res.json(dummyData)
});

