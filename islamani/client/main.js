//Meteor.subscribe("messages");
Messages = new Mongo.Collection("messages");

Template.body.events({
  "submit .new-message": function(event){
    var text = event.target.text.value;
    Messages.insert({
      content: text,
      time: new Date(),
      owner: Meteor.userId(),
      from: Meteor.user().username
    });  
    event.target.text.value = "";
    return false;
  }
});

Template.messagesList.helpers({
  messages: function () {
    return Messages.find({});
  }
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

