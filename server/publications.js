Meteor.publish('legends', function() { 
	return Legends.find();
});

Meteor.publish('comments', function() { 
	return Comments.find();
});