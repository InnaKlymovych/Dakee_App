import mysql from "mysql2";

const connection = mysql.createConnection({
   host: "127.0.0.1",
   user: "root",
   port: 3306,
   password: "31101987",
   database: "dakee_app",
});

// Connect to the database
connection.connect((error) => {
   if (error) {
   console.error("Error connecting to the database: ", error);
   return;
   }
   console.log("Connected to the database");
});

// Create a new record
export const createRecord = (name, email) => {
   const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
   const values = [name, email];

   connection.query(sql, values, (error, result) => {
      if (error) {
      console.error("Error creating record: ", error);
      return;
      }
      console.log("Record created successfully");
   });
};