Legends = new Meteor.Collection('legends');

Legends.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Legends.deny({
	update: function(userId, post, fieldNames) {
	    // may only edit the following two fields:
		return (_.without(fieldNames, 'url', 'title').length > 0); 
	}
});

Meteor.methods({
	legend: function(legendAttributes) {
		var user = Meteor.user(),
			legendWithSameLink = Legends.findOne({url: legendAttributes.url});

    	// ensure the user is logged in
		if (!user){
			throw new Meteor.Error(401, "You need to login to post new legends");
		}
		// ensure the post has a title
		if (!legendAttributes.title){
			throw new Meteor.Error(422, 'Please fill in a title');
		}

	    // check that there are no previous posts with the same link
		if (legendAttributes.url && legendWithSameLink) { 
			throw new Meteor.Error(
				302, 
				'This link has already been used', 
				legendWithSameLink._id
			);
    	}

	    // pick out the whitelisted keys
		var legend = _.extend(_.pick(legendAttributes, 'url', 'title', 'message'), {
			title: legendAttributes.title + (this.isSimulation ? '(client)' : '(server)'), 
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime()
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