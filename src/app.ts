import express, { urlencoded } from 'express';


//import redis client 
import connectToRedis from './db/redis'
//import mongo client
import connectToMongo from './db/mongoDb'

connectToMongo();
connectToRedis();

const app  =  express();
app.use(express.json())
app.use(urlencoded({extended : true}));



app.listen(8000, () => console.log('Server running on port 8000'));