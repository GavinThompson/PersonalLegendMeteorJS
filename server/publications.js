Meteor.publish('legends', function() { 
	return Legends.find();
});

Meteor.publish('chapters', function(legendId) { 
	return Chapters.find({legendId: legendId});
});



Meteor.publish('user', function(name) { 
	return Meteor.users.find({username: name});
});