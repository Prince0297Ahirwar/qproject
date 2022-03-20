const mongoose = require('mongoose');
// atlas mongo
const mon = "mongodb+srv://kady1411:Kadyan@cluster0.ft1d1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
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