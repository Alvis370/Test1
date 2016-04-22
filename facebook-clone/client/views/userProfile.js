import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.userProfile.helpers({
	hasFriendRequest: function() {
		console.log(this.user);
		return Meteor.user().hasRequestFrom(this.user);
	},

	friends: function() {
		return this.user.friends().fetch();
	}
});

Template.userProfile.events({
	'click .add-friend': function(e, tpl) {
		var user = tpl.data.user;
		console.log('adding a friend', user.username);

		user.requestFriendship();
	},
	'click .cancel-friendship': function(e, tpl) {
		var user = tpl.data.user;
		friendRequest = Request.collection.findOne();

		if (friendRequest) {
			friendRequest.cancel();
		}
	},
	'click .confirm-friendship': function(e, tpl) {
		var user = tpl.data.user;
		friendRequest = Request.collection.findOne();

		if (friendRequest) {
			friendRequest.accept();
		}
	}
});