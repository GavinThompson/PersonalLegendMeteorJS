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
    }
});