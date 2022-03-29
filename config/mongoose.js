const mongoose = require('mongoose');
// atlas mongo
// const mon = "mongodb+srv://kady1411:Kadyan@cluster0.ft1d1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mon = "mongodb://Quantiphi123:Quantiphi123@mock-project-database.cja5akqsen0c.us-west-2.docdb.amazonaws.com:27017/mock-project-database?tls=true&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false"
mongoose
  .connect(mon, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('database connected');
  })
  .catch((err) => {
    console.log(err);
  });


const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;