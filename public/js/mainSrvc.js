angular.module("myChats").service("mainSrvc", function($http){

  this.getChats = function(){
    return $http.get('http://localhost:3737/api/chats');
  };

  this.addChats = function(chat){
    return $http({
      method: 'POST',
      url: 'http://localhost:3737/api/chats',
      data: chat
    });
  };

  this.deleteChats = function(){
    return $http.delete('http://localhost:3737/api/chats');
  };

  this.setScreenname = function(screenname){
    return $http({
      method: 'POST',
      url: 'http://localhost:3737/api/screenname',
      data: {screenname:screenname}
    });
  };
});
