const express = require("express");
const app = express();
const cors = require("cors");
const c_db = require("./models/c_db");
const Usermodel = require("./models/Users");

c_db();

app.use(express.json());
app.use(cors());

app.post("/rej" , async (req,res) => {
   const {user, pwd} = req.body;
   
   const userdata = await Usermodel.findOne({user});
   if(userdata) return res.json({message : "This  User is Aradey Exist !!"});

   await new Usermodel({user,pwd}).save();
   return res.json({message: "Thanks , We Inserted This User in DataBase!!"});

})


app.post('/change', async (req, res) => {
   const { user, pwd } = req.body;
 
   try {
     const userdata = await Usermodel.findOne({ user });
     if (!userdata) {
       return res.status(404).json({ message: "User not found!" });
     }
 
     const updateFields = {};
 
     if (user) {
       updateFields.user = user;
     }
     if (pwd) {
       updateFields.pwd = pwd;
     }
 
     await Usermodel.updateOne({ user: userdata.user }, { $set: updateFields });
 
     return res.json({ message: "User updated successfully!" });
   } catch (error) {
     return res.status(500).json({ message: "An error occurred while updating the user." });
   }
 });
 
 

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {console.log(`We Connecting PORT -> ${PORT}`);})