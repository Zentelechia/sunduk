var Friends=FacebookCollections.getFriends("me"); 
var posts=Friends.find().fetch();

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
    posts : function(){
        return posts;
    }
});

// Fetch posts as they are loaded from Facebook
Deps.autorun(function(){
    var posts = Friends.find().fetch();
});
