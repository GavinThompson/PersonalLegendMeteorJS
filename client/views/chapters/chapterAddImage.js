Template.chapterAddImage.helpers({ 
	// 
	"files": function(){
		return S3.collection.find();
	}
});


Template.chapterAddImage.events({ 
	"click button.upload": function(){

		if(!Meteor.user()) throw 'You must be logged in.';

		var currentChapterId = this._id;
		var currentLegendId = this.legendId;
		var currentUserId = Meteor.user()._id
		var imageUrl = null
		var imageSecureUrl = null
		var imageRelativeUrl = null

		var files = $("input.file_bag")[0].files

		S3.upload(files,"/uploads",function(e,response){

			imageURL = response.url;
			imageSecureUrl = response.secure_url;
			imageRelativeURL = response.relative_url;

			var uploadedImage = {
				url: imageURL,
				secureUrl: imageSecureUrl,
				relativeUrl: imageRelativeURL,
				chapterId: currentChapterId,
				legendId: currentLegendId,
				userId: currentUserId
			};

			var chapterProperties = {
				hasImage: true
			};
			// console.log("uploadedImage: ")
			// console.log(uploadedImage)
			// console.log("chapterProperties: ")
			// console.log(chapterProperties)
			Meteor.call('uploadedImage', uploadedImage, function(error, uploadedImageId){ 
				if(error){
					throwError(error.reason); 
					if (error.error === 302){
						Router.go('chapterAddImage', {_legendId: currentLegendId, _id: currentChapterId});
					}
				}else{
					Router.go('legendChapters', {_id: currentLegendId});
				}
			});

			Chapters.update(currentChapterId, 
				{$set:
					chapterProperties
				},	
				function(error){ 
					if(error){
						// display the error to the user
						alert(error.reason); 
					}else{
						Router.go('legendChapters', {_id: currentLegendId});
					}
				}
			); 
		});

		return false
	}
	// 
	// 'submit form': function(e, template) {
	//     e.preventDefault();
	//     if(!Meteor.user()) throw 'You must be logged in.';


	//     var currentChapterId = this._id;
	//     var currentLegendId = this.legendId;


	// 	var chapterProperties = {
	// 		// uploadImg: null;
	//     	// legendId: this.legendId
	//     };
  
	// 	Chapters.update(currentChapterId, 
	// 		{$set:
	// 			chapterProperties
	// 		},	
	// 		function(error){ 
	// 			if(error){
	// 				// display the error to the user
	// 				alert(error.reason); 
	// 			}else{
	// 		        Router.go('legendEdit', {_id: currentLegendId});
	//         	}
	// 		}
	// 	); 
	// },
});