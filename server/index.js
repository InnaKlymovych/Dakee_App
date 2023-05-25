import express from 'express';
import {createUser} from './db.js';
import bodyParser from 'body-parser';

const urlencodedParser = bodyParser.urlencoded({ extended: false }); 
const app = express();

app.post ('/test', urlencodedParser , (req , res) => {
   console.log(req.body);
   console.log("Hello");
})

app.post("/signup", urlencodedParser, async (req, res) => {
   const name = req.body.name;
   const email = req.body.email;
   const password = req.body.password;

   const queryResult = await createUser(name, email, password);

   console.log(queryResult);
   if (queryResult.success) {
      res.redirect("http://localhost:3000/");
   } else {
      res.redirect("http://localhost:3000/signup");
   }
});

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