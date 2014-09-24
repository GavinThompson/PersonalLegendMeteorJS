// LEGENDS


Meteor.publish('legends', function() { 
	return Legends.find();
});

Meteor.publish('legend', function(legendId) { 
	return Legends.find({_id: legendId});
});



// CHAPTERS

Meteor.publish('chapters', function(legendId) { 
	return Chapters.find({legendId: legendId});
});




// THEMES

Meteor.publish('themes', function() { 
	return Themes.find();
});



// USER

Meteor.publish('user', function(name) { 
	return Meteor.users.find({username: name});
});

