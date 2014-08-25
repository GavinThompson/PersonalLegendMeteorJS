// If resizing is required - checkout s3 package branch: http://atmospherejs.com/package/S3-Images-Blaze

S3.config = {
    key: process.env.AMAZONKEY,
    secret: process.env.AMAZONSECRET,
    bucket: process.env.S3_BUCKET
    // directory: '/subfolder/' //This is optional, defaults to root
    // directory: '/'
};