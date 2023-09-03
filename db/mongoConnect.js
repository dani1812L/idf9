const mongoose = require("mongoose");
// יאפשר לאפליקציה לקרוא משתנים מקובץ
// ENV
require("dotenv").config();
main().catch((err) => console.log(err));

async function main() {
  //console.log(process.env.TEST_VAR);

  await mongoose.connect(process.env.MONGO_DB);
  console.log("mongo connect market");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  //התחברות למונגו mongodb+srv://koko:4372@cluster0.9boifyw.mongodb.net/
}
