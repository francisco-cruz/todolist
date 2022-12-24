const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@todolist.znsqrko.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedtopology: true,
      }
    )
    .then(() => console.log("MongoDB Atlas CONNECTED!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
