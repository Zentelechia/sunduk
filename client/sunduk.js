/*var Friends=FacebookCollections.getFriends("me"); 
var myFriends=Friends.find().fetch();

Template.login.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },
 
    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});
Template.friends.helpers({
    friends : function(){
        return myFriends;
    }
});

// Fetch posts as they are loaded from Facebook
Deps.autorun(function(){
    var posts = Friends.find().fetch();
});
*/
if(Meteor.isClient) {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1740318656189950',
      status     : true,
      xfbml      : true
    });
  };
}