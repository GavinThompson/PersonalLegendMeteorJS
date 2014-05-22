Comments = new Meteor.Collection('comments');

Meteor.methods({
	
	comment: function(commentAttributes) {
		
		var user = Meteor.user();
		var legend = Legends.findOne(commentAttributes.legendId); 
		
		// ensure the user is logged in
		if(!user){
			throw new Meteor.Error(401, "You need to login to make comments");
		}
		if(!commentAttributes.body){
			throw new Meteor.Error(422, 'Please write some content');
		}
		if(!legend){
			throw new Meteor.Error(422, 'You must comment on a legend');
		}

		comment = _.extend(_.pick(commentAttributes, 'legendId', 'body'), { 
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime()
		});

		// update the post with the number of comments
		Legends.update(comment.legendId, {$inc: {commentsCount: 1}});

		return Comments.insert(comment); 

	}
});