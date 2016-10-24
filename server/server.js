var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var port = 3737;

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
// app.use(cors());

app.use(session({
    secret: 'no secrets here',
    saveUninitialized: false,
    resave: false
}));

app.post("/api/screenname", function(req, res){
  req.session.screenname = req.body.screenname;
  res.status(200).json(req.session.screenname);
});

app.get("/api/chats", chatCtrl.getChats);
app.post("/api/chats", chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);



app.listen(port, function(){
  console.log("Listeing on port ", port, " INSERT-WITTY-STATEMENT-HERE");
});
