const mongoose = require("mongoose");

const connectDataBase = () => {
  const DB_URI =
    "mongodb+srv://Hozefa:Hozefa123@cluster0.1dfc8.mongodb.net/SMB?retryWrites=true&w=majority";
  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongoDB conneced with server ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDataBase;
