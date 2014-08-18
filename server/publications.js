Meteor.publish('legends', function() { 
	return Legends.find();
});

Meteor.publish('chapters', function(legendId) { 
	return Chapters.find({legendId: legendId});
});