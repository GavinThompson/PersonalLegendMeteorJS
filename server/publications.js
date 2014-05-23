Meteor.publish('legends', function() { 
	return Legends.find();
});

Meteor.publish('datemarkers', function(legendId) { 
	return Datemarkers.find({legendId: legendId});
});