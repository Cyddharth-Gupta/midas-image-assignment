import './config'
import {Request, Response, Application} from 'express';
import express from 'express';
import { json } from 'body-parser';
import { connectDatabase } from './src/database/connection';

const startApp = async () => {
    await connectDatabase();
    
    const app: Application = express();
    
    app.use(json());

    app.get('/', (req: Request, res: Response) => {
        res.send('Welcome to Midas Image Assignment');
    });
    
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
};

startApp();


