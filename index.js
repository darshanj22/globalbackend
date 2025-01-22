const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")
const PORT = 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/DBDarshan")
  .then(() => console.log("db connected"))
  .catch(() => console.log("db not connected"));

const mySchema = mongoose.Schema({
  user: String,
  email:String,
  
});

const user = mongoose.model("user", mySchema);

app.listen(PORT, () => {
  console.log("Server started successfully");
});



app.post("/post", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const details = {
    user: username,
    email:email,
  };

  const userDetails = new user(details);
  userDetails
    .save()
    .then(() => res.send("Success"))
    .catch(() => res.send("something went wrong"));
});


app.delete("/delete",(req,res)=>{
  const username=req.body.username;
  user.deleteOne({user:username})
  .then(()=>{
    res.send("user deleted")
  })
  .catch(()=>{
    res.send("user not deleted")
  })
})


app.get("/fetch"),(req,res)=>{
  const username=req.query.username;

}
