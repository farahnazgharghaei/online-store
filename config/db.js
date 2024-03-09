const  mongoose  = require("mongoose");

const connectDB = async () => {
  //   Mongoose.connect(process.env.DB_URL)
  //     .then(() => console.log("database connected"))
  //     .catch((error) => console.log(error));

  try {
    const db= await mongoose.connect(process.env.DB_URL);
    console.log("database connected", db.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
