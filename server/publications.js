Meteor.publish('legends', function() { 
	return Legends.find();
});