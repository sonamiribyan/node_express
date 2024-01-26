import express from 'express';
import dotenv from 'dotenv';
import sequelize from "./config/db.js";
import {
    User,
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    DeviceInfo,
    TypeBrand
} from './models/models.js';
import cors from 'cors';
import router from './routes/index.js';
import fileUpload from 'express-fileupload';
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

const PORT = process.env.PORT || 3000;

async function start() {
    try {
        // Correct the method name to `authenticate`
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        app.listen(PORT, () => {
            console.log('Server is running on port ' + PORT);
        });
    } catch (e) {
        console.error('Error starting the server:', e.message);
    }
}

// Call the start function to initiate the server
start();



