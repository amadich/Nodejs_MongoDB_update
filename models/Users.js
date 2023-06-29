const { Schema , model } = require("mongoose");

const UserSchema = Schema({
   user : {type: String},
   pwd : {type: String}
})
const Usermodel = model("users",UserSchema);
module.exports = Usermodel;