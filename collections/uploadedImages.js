UploadedImages = new Meteor.Collection('uploadedImages');


UploadedImages.deny({
	update: function(userId, uploadedImage, fieldNames) {
		// NEEDS fixing
		// REVIEW WHAT THE ABOVE DOES IN Discover Meteor
	}
});

UploadedImages.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Meteor.methods({
	
	uploadedImage: function(uploadedImageAttributes) {
		
		var user = Meteor.user();
		var chapter = Chapters.findOne(uploadedImageAttributes.chapterId); 
		
		// ensure the user is logged in
		if(!user){
			throw new Meteor.Error(401, "You need to login to upload images.");
		}
		if(!uploadedImageAttributes.url){
			throw new Meteor.Error(422, 'There appears to be an error communicating with ther server and no image URL could be generated.');
		}
		if(!chapter){
			throw new Meteor.Error(422, "We're not sure how this happened, but we need a chapterID for this image! :(");
		}

		uploadedImage = _.extend(_.pick(uploadedImageAttributes, 'chapterId', 'url'), { 
			userId: user._id,
			legendId: uploadedImageAttributes.legendId,
			chapterId: uploadedImageAttributes.chapterId,
			url: uploadedImageAttributes.url,
			secureUrl: uploadedImageAttributes.secureUrl,
			relativeUrl: uploadedImageAttributes.relativeUrl,
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

		return UploadedImages.insert(uploadedImage); 

	}
});