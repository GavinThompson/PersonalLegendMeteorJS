Template.home.rendered= function() {

	$('#homeVideo').videoBG({
		mp4:'/media/your-video-file.mp4',
		ogv:'/media/your-video-file.ogv',
		webm:'/media/your-video-file2.webm',
		poster:'images/stock/10.jpg',
		scale:true,
		zIndex:0
	});

}


Template.home.helpers({ 
	legends: function() {
		return Legends.find({}, {sort: {submitted: -1}});
	}
});