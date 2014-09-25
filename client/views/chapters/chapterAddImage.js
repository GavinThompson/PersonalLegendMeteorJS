Template.chapterAddImage.helpers({ 
	// 
	"files": function(){
		return S3.collection.find();
	}
});


Template.chapterAddImage.events({ 
	"click button.upload": function(){
		var files = $("input.file_bag")[0].files
		S3.upload(files,"/uploads",function(e,r){
			console.log("e");
			console.log(e);
			console.log("r");
			console.log(r);
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