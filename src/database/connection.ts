import { DataSource } from 'typeorm';
import { Image} from '../models/Image';
import { Comment } from '../models/Comment';

export const AppDatabase = new DataSource({  //Used data source object instead of createConnection because it is more flexible and can be used with multiple connections
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Image, Comment], 
    synchronize: true,
    ssl: { rejectUnauthorized: false },
});

export const connectDatabase = async () => {
    try{
      await AppDatabase.initialize();
      console.log('Database connection established successfully');
    }catch (error) {
      console.error('Failed to connect to the database', error);
      throw new Error('Database connection failed');
    }
};