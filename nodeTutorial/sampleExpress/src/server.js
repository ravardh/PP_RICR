import express from "express";

const app = express();

app.use(express.json());

app.get("/login",(req,res)=>[
    res.send("Login Done")
])


app.post("/signup",(req,res)=>{
    let {nm,unm,pass} = req.body;

    console.log(req.body);
    console.log("User Login Data");
    
    console.log(nm,unm,pass);
    res.status(400).json({message:"User Created"})
})

app.listen(5000, () => {
  console.log("Server is running at 5000");
  console.log("I am backend server");
  
});
