Meteor.publish('legends', function() { 
	return Legends.find();
});

Meteor.publish('comments', function(legendId) { 
	return Comments.find({legendId: legendId});
});