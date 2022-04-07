import express from "express";
import pkg from 'express/lib/application';
const { route } = pkg;
import res from "express/lib/response";
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();
let users = []

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
})

router.post('/', (req, res) => {
    console.log('POST ROUTE REACHED');
    
    const user = req.body;
    users.push({ ...user, id: uuidv4()});

    // we can also write it differently such as :
    // const userId = uuidv4();
    // const userwithId = {// calling the uuidv4();}
    // const push(userwithId);
    res.send(`user with the name ${user.name} added to the database.`);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser =  users.find((user) => user.id == id);
    res.send(foundUser);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id!= id); //filter function removes element when false happens, 
    //therefore, user.id and id = while the operaton is != alias (false). 
    res.send(`user with the id ${id} deleted from the database.`);
})

router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const user = users.find((user) => user.id == id);
    const {name, address, phone_number} = req.body;
    if(name) user.name = name;
    if(address) user.address = address;
    if(phone_number) user.phone_number = phone_number;
    res.send(`user with the id ${id} has been updated.`);
    
})
export default router;