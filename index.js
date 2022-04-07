import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5001; //backend 

//intialize body parser middleware..
app.use(bodyParser.json());

app.use('/', usersRoutes);
//create routes 
app.get('/', (req, res) => {
   res.send('Hello from Homepage.') });
app.listen(PORT, () => console.log(`Running Server on port: http://localhost:${PORT}`));
