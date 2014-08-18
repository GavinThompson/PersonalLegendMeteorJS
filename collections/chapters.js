Chapters = new Meteor.Collection('chapters');


Chapters.deny({
	update: function(userId, chapter, fieldNames) {
	    // may only edit the following two fields:
		return (_.without(fieldNames, 'subtitle', 'body', 'dateSpan', 'backgroundColour').length > 0); 
		// REVIEW WHAT THE ABOVE DOES IN Discover Meteor
	}
});

Chapters.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Meteor.methods({
	
	chapter: function(chapterAttributes) {
		
		var user = Meteor.user();
		var legend = Legends.findOne(chapterAttributes.legendId); 
		
		// ensure the user is logged in
		if(!user){
			throw new Meteor.Error(401, "You need to login to make chapters");
		}
		if(!chapterAttributes.body){
			throw new Meteor.Error(422, 'Please write some content');
		}
		if(!legend){
			throw new Meteor.Error(422, 'You must chapter on a legend');
		}

		chapter = _.extend(_.pick(chapterAttributes, 'legendId', 'body'), { 
			userId: user._id,
			subtitle: chapterAttributes.subtitle,
			body: chapterAttributes.body,
			dateSpan: chapterAttributes.dateSpan,
			backgroundColour: chapterAttributes.backgroundColour,
			submitted: new Date().getTime()
		});

		// update the post with the number of chapters
		Legends.update(chapter.legendId, {$inc: {chaptersCount: 1}});


		// wait for 5 seconds
			if (! this.isSimulation) {
				var Future = Npm.require('fibers/future'); 
				var future = new Future(); 
				Meteor.setTimeout(function() {
					future.return(); 
				}, 5 * 1000); 
				future.wait();
			}

		return Chapters.insert(chapter); 

	}
});

// #date_type - day(00/00/0000) month( 00/0000) year(0000) or dateRange (00/0000 - 00/0000)
// # img?
// 	# ---or embed media event?
// # hero-icon?
	// color icon/img wash?

// # 
// # subtitle
// # background color?
// # Panel Content
// # Panel Theme


// need this ... see fixtures/legend.js
// 
// wait for 5 seconds
// if (! this.isSimulation) {
// 	var Future = Npm.require('fibers/future'); 
// 	var future = new Future(); 
// 	Meteor.setTimeout(function() {
// 		future.return(); 
// 	}, 5 * 1000); 
// 	future.wait();
// }