import dotenv from 'dotenv';
import DB_Connection from './db/DB.js';

dotenv.config({path: "./env"});
DB_Connection();