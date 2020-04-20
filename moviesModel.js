//Please note that credecnce_assignment written in the code below is the name of data base which i had created in MongoDB on my local

var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/credence_assignment",{ useNewUrlParser: true ,useUnifiedTopology: true});
var userSchema=  mongoose.Schema;
var moviesSchema={

  "name":String,
  "img":String,
  "summary": String

};

module.exports=mongoose.model("Movies",moviesSchema);
