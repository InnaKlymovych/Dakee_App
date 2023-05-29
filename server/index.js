import express from "express";
import { createUser, getUserById, finishSignup, get_profile_by_userID } from "./db.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/test", (req, res) => {

});

app.get("/user/:id", async (req, res) => {
  const queryResult = await getUserById(req.params.id);
  res.json(queryResult);
});
app.post("/update_user/:id", async (req, res) => {
  const queryResult = await finishSignup(req.body);
  res.json(queryResult);
});

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const queryResult = await createUser(name, email, password);
  res.json(queryResult);
});



app.get("/get_user_profile/:id" , async (req, res) =>{
   
   const user_id = req.params.id;
   const userquery = await getUserById(user_id);
   console.log("index.js" , userquery.users.name);
   let queryResult = await get_profile_by_userID(user_id);
   
   queryResult.profile.name = userquery.users.name;
   queryResult.profile.email = userquery.users.email;
   
   
   res.json(queryResult);
   
   

});



app.post("/login", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

   db.query(
    "SELECT * FROM newusers WHERE name = ? AND password = ? ",
   [name, password],
   (err, result) => {
      if (err) {
         req.setEncoding({ err: err });
      } else {
         if (result.length > 0) {
         res.send(result);
         } else {
         res.send({ message: "WATCH USERNAME OR PASSWORD" });
         }
      }
   }
   );
});


app.listen(3001, () => {
   console.log("Hi Inna ; your server is running on port 3001");
});