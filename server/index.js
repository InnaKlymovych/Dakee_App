import express from 'express';
import {createRecord} from './db.js';
import bodyParser from 'body-parser';

const urlencodedParser = bodyParser.urlencoded({ extended: false }); 
const app = express();

app.post ('/test', urlencodedParser , (req , res) => {
   console.log(req.body);
   console.log("Hello");
})

app.post('/signup' , urlencodedParser , (req , res) => {
   const name = req.body.name;
   const email = req.body.email;
   const password = req.body.password;

   db.query(
      'INSERT INTO newusers (name , email , password) VALUES(?, ?, ?)',
      [name , email , password] , (err , result) => {
         if (err){
            console.log(err)
         }
         else {
            res.send("Value Inserted");
         }
      }
      );
} )

app.post('/login' , (req , res) => {
   const name = req.body.name;
   const password = req.body.password;

   db.query(
      'SELECT * FROM newusers WHERE name = ? AND password = ? ',
      [name ,  password] , (err , result) => {
         if (err){
            req.setEncoding({err: err});
         }
         else {
            if(result.length > 0){
               res.send(result);
            }
            else{
               res.send({message: "WATCH USERNAME OR PASSWORD"});
            }
         }
      }
      );
} )

app.listen(3001, ()=> {
   console.log("Hi Inna ; your server is running on port 3001");
} );