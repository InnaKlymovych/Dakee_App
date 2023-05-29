import mysql from "mysql2";

export const connection = mysql
   .createPool({
   host: "127.0.0.1",
   user: "root",
   port: 3306,
   password: "31101987",
   database: "dakee_app",
   })
   .promise();

// Create a new record
export const createUser = async (name, email, password) => {
   try {
     const query = "INSERT INTO newusers (name, email, password) VALUES (?, ?, ?)";
     const values = [name, email, password];
     const result = await connection.query(query, values);
 
     return {
       success: 1,
       id: result[0].insertId,
       message: "User created successfully",
     };
   } catch (error) {
     return {
       success: 0,
       id: -1,
       message: "Error creating user",
       error: error,
     };
   }
 };

// Read all records
export const readUser = async () => {
   try {
      const query = "SELECT * FROM newusers";
      const res = await connection.query(query);

   return {
      success: 1,
      users: res[0],
      message: "Users read successfully",
   };
   } catch (error) {
   return {
      success: 0,
      message: "Error reading users",
      error: error,
   };
   }
};

// Update a record
export const updateUser = async (id, name, email) => {
   try {
      const values = [name, email, id];
      const query = "UPDATE newusers SET name = ?, email = ? WHERE id = ?";
      await connection.query(query, values);

   return {
      success: 1,
      message: "User updated successfully",
   };
   } catch (error) {
   return {
      success: 0,
      message: "Error updating user",
      error: error,
   };
   }
};

// Delete a record
export const deleteUser = (id) => {
   const sql = "DELETE FROM users WHERE id = ?";
   const values = [id];

   connection.query(sql, values, (error, result) => {});
};

export const finishSignup = async (data) => {
   
   try {
     const query =
       "INSERT INTO profiles (user_id, age, gender, currentCity, cityAdvices, travelPrefs) VALUES (?,?,?,?,?,?)";
 
     const values = [
       data.id,
       data.age,
       data.gender,
       data.currentCity,
       data.cityAdvices,
       data.travelPrefs,
     ];
     const result = await connection.query(query, values);
     return {
       success: 1,
       message: "Profile created successfully",
     };
   } catch (error) {
     return {
       success: 0,
       message: "Error creating profile",
       error: error,
     };
   }
 };

 export const getUserById = async (id) => {
   try {
     const query = "SELECT * FROM newusers WHERE id=?";
     const res = await connection.query(query, [id]);
      console.log("database" , res[0]);
     return {
       success: 1,
       users: res[0][0],
       message: "User read successfully",
     };
   } catch (error) {
     return {
       success: 0,
       message: "Error reading user",
       error: error,
     };
   }
 }

 export const get_profile_by_userID = async (id) => {
   try {
     const query = "SELECT * FROM profiles WHERE user_id=?";
     const res = await connection.query(query, [id]);
  
     return {
       success: 1,
       profile: res[0][0],
       message: "Profile read successfully",
     };
   } catch (error) {
     return {
       success: 0,
       message: "Error reading profile",
       error: error,
     };
   }
 }