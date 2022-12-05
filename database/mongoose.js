const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/taskmanagerdb")
  .then(() => {
    console.log("Mongo Db connected!!");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose;
