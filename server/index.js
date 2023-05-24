const express = require("express");

const app = express();

const mysql = require('mysql');

const db = mysql.createConnection({
   user: 'root',
   host: 'localhost',
   password: '',
   database: 'dakee_app',
})

app.post('/signup' , (req , res) => {
   const name = req.body.name;
   const email = req.body.email;
   const password = req.body.password;

   db.query(
      'INSERT INTO newusers (name , email , password) VALUES(?, ?, ?)'
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

app.listen(3001, ()=> {
   console.log("Hi Inna ; your server is running on port 3001");
} );