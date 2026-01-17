const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");


//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors());


app.get('/api',(req,res)=>{
  res.json({message:"hello world. server is running..."})
})


//routes
const directoryPath = './routes';
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach((file) => {
    const filePath =directoryPath+'/'+ file;
    const routes=require(filePath);
    
    //routes middlewares
    app.use('/api', routes);
    console.log('imported routes',filePath);
  });
});

//port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

