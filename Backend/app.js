// const express = require ('express');
// const mongoose = require('mongoose') ;
// const app=express();
// const UserRouter = require('./src/routes/userRoutes'); 

// const cors = require("cors");
// const bodyParser = require("body-parser"); app.use(bodyParser.json()); app.use(cors());
// //Routes 
// //app.use('/',UserRouter); 
// mongoose.connect('mongodb+srv://21a91a04l4:Qm14VBw6xhUVg9rN@cluster0.0zbst7t.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0')

// .then(() => app.listen(5000))
// .then(() =>
// console.log("Connected to Database & Listining to localhost 5000")
// )
// .catch((err) => console.log(err));

// const app = express(); app.use("/api", (req, res, next)=>{
// res.send("hi hello")
// })
// app.listen(5000)


//import express from 'express';
const express = require ('express');
const mongoose = require('mongoose') ;
const cors = require("cors"); 
const app = express();
const bodyParser = require("body-parser"); app.use(bodyParser.json()); app.use(cors());
//import mongoose from 'mongoose';
const nodemailer = require ( 'nodemailer');
const multer =require('multer');
//import User from './models/user.js';
const User = require('./models/user.js');
const UserRouter = require('./src/routes/userRoutes'); 
app.use('/images',express.static('public/images'))
mongoose.connect('mongodb+srv://21a91a04l4:Qm14VBw6xhUVg9rN@cluster0.0zbst7t.mongodb.net/cluster0?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>app.listen(4000)) 
.then(()=>
console.log("connected successfully"))
.catch((err)=>console.log(err))
app.post('/adddata',(req,res,next)=>{
    console.log(req.body.formdata)
})
app.post('/addstud',(req,res,next)=>{
    console.log(req.body)
    
})
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, Date.now() + "_" + file.originalname)
  }
})

const upload = multer({ storage: storage })
app.post('/addFile',upload.single("image"),async(req,res,next)=>{
  const image =(req.file)? req.file.filename :null
    // console.log(req.body)
    const{newstype,headline,description,createdat,addedby,updatedby,updatedat,}=req.body
    const user=new User({
        
        newstype,
        headline,
        description,
        createdat,
        addedby,
        updatedby,
        updatedat,
        image
    })
    user.save();
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'kommireddysudha918@gmail.com',
          pass: 'zdor huim lkec goqf'
        }
      });
      
      var mailOptions = {
        from: 'kommireddysudha918@gmail.com',
        to: 'radhasravanthib@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).json({msg:"success"})
        }
      });
      
    
    
})

app.get('/getnews',async(req,res)=>{
  let newsdata
  try{
    newsdata=await User.find()

  }
  catch(err){
    console.log(err)
  }
  return res.status(201).json(newsdata)
})
