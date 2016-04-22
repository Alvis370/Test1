import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.home.onRendered(function() {
  Meteor.typeahead.inject();
  $('.typeahead').bind('typeahead:select', function(ev, suggestion){
  	console.log('Selection:', suggestion.value);
  	Router.go('userProfile', {username: suggestion.value });
  });	
});


Template.home.helpers({
  usernames: function() {
    return Meteor.users.find().fetch().map(function(user){
    	return user.username; 
 	});
  }
});
