Legends = new Meteor.Collection('legends');

Legends.allow({
	insert: function(userId, doc) {
	    // only allow create legends if you are logged in
	return !! userId; }
});