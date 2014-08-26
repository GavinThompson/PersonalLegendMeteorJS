// If resizing is required - checkout s3 package branch: http://atmospherejs.com/package/S3-Images-Blaze

S3.config = {
    key: process.env.AMAZONKEY,
    secret: process.env.AMAZONSECRET,
    bucket: process.env.S3_BUCKET,
    // directory: '/subfolder/' //This is optional, defaults to root
    directory: '/uploads/'
};


Meteor.methods({
    s3ChapterImageCallback:function(url,context){
    	console.log(context)
    	console.log(context.id)
    	console.log(context.data)
    	console.log(context._id)
        console.log('Add '+url+' to the id of '+context);


            var currentChapterId = context._id;
            console.log("currentChapterId")
            console.log(currentChapterId)
            var currentLegendId = context.legendId;
            console.log("currentLegendId")
            console.log(currentLegendId)

        	var amazonS3Url = url;
        	console.log("amazonS3Url")
        	console.log(amazonS3Url)

        	var chapterProperties = {
        		uploadedImgURL: amazonS3Url
            };

            console.log("chapterProperties")
            console.log(chapterProperties)
         

         // INSTEAD OF SAVING TO CHAPTER - SAVE TO IT'S OWN COLLECTION -- RE-EVALUATE AFTER OKAY GROW PACKAGE AVAILABLE
        	Chapters.update(currentChapterId, 
        		{$set:
        			chapterProperties
        		},	
        		function(error){ 
        			if(error){
        		        // display the error to the user
        				alert(error.reason); 
        			}else{
        				console.log("no errors?")
        		        // Router.go('legendEdit', {_id: currentLegendId});
        		        Session.set("amazonS3UrlSaved", "true");
        		        console.log("Redirected??")
                	}
        		}
        	); 

    }
});