import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app =express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.render("cover.ejs");
})

app.get("/index",(req,res)=>{
  res.render("index.ejs");
})

app.get("/about",(req,res)=>{
    res.render("about.ejs");
  })

app.get("/work",(req,res)=>{
    res.render("work.ejs");
  })
app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
  })
  
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  }); 