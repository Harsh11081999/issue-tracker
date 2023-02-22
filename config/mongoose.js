const mongoose= require('mongoose');
//  const localdb = `mongodb://localhost/issueTracker`;
//  const dburl = process.env.DB_uri || localdb ;
const Db_uri ='mongodb+srv://harsh1108:harsh1108@cluster0.zvz1y6i.mongodb.net/issue-tracker?retryWrites=true&w=majority';
// mongoose.connect(`${process.env.Db_uri}`);
mongoose.connect(Db_uri);
const db = mongoose.connection;
// error
db.on("error", console.error.bind(console, "error connecting to db"));
// up and running then message
db.once("open", function () {
  console.log("Success fully connected to the database");
});
module.exports = db;