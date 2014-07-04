Legends = new Meteor.Collection('legends');

Legends.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Legends.deny({
	update: function(userId, legend, fieldNames) {
	    // may only edit the following two fields:
		// return (_.without(fieldNames, 'title', 'synopsis').length > 0); 
		// REVIEW WHAT THE ABOVE DOES IN Discover Meteor
	}
});

Meteor.methods({
	legend: function(legendAttributes) {
		var user = Meteor.user();

    	// ensure the user is logged in
		if (!user){
			throw new Meteor.Error(401, "You need to login to post new legends");
		}
		// ensure the post has a title
		if (!legendAttributes.title){
			throw new Meteor.Error(422, 'Please fill in a title');
		}

	    // ensure there is a quick synopsis
		if (!legendAttributes.synopsis){
			throw new Meteor.Error(422, 'Please fill in a quick synopsis to summarize your story.');
		}


	    // pick out the whitelisted keys
		var legend = _.extend(_.pick(legendAttributes, 'title', 'synopsis'), {
			title: legendAttributes.title,
			synopsis: legendAttributes.synopsis,
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime(),
			datemarkersCount: 0
		});

		// wait for 5 seconds
		if (! this.isSimulation) {
			var Future = Npm.require('fibers/future'); 
			var future = new Future(); 
			Meteor.setTimeout(function() {
				future.return(); 
			}, 5 * 1000); 
			future.wait();
		}
		
		var legendId = Legends.insert(legend);
		
		return legendId; 
	}
});