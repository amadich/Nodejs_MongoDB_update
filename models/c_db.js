const mongoose = require("mongoose");


const c_db = () => {
   mongoose.connect(`mongodb://127.0.0.1:27017/kora`).then(() => {console.log("MONGODB CONNECTED ...");}).catch((e) =>{
   console.log(e);
})
}

module.exports = c_db;