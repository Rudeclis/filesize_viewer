var express = require("express");
var multer = require("multer");
var upload = multer();
var app = express();

app.get("/", function(req, res){
    res.sendFile('/home/ubuntu/workspace/filesizer/index.html');
})

app.post('/filesize', upload.single('file') ,function(req, res){
    var filesize = req.file.size + "bytes";
    res.end(filesize);
})

app.listen(8080, function(){
    console.log("listening");
})