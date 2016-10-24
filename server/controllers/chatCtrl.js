var chats = [];
module.exports = {

  getChats:function(req,res){
    res.status(200).json(chats);
  },
  postChats:function(req,res){
    req.body.screenname = req.session.screenname;
    chats.push(req.body);
    res.status(200).json(chats);
  },
  deleteChats:function(req,res){
    chats = [];
    res.status(200).json(chats);
  }
};
