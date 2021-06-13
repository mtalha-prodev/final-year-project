const mongoose = require("mongoose");

const db_connection = mongoose
  .connect(process.env.DB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connect successfully..."))
  .catch((error) => console.log(error));

module.exports = db_connection;
