var Posts=FacebookCollections.getPosts("me"); 

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
        return Posts.find().fetch();
    }
});

// Fetch posts as they are loaded from Facebook
Deps.autorun(function(){
    var posts = Posts.find().fetch();
    console.log(posts);
}
