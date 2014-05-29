Datemarkers = new Meteor.Collection('datemarkers');

Meteor.methods({
	
	datemarker: function(datemarkerAttributes) {
		
		var user = Meteor.user();

		var legend = Legends.findOne(datemarkerAttributes.legendId); 
		
		// ensure the user is logged in
		if(!user){
			throw new Meteor.Error(401, "You need to login to make datemarkers");
		}
		if(!datemarkerAttributes.body){
			throw new Meteor.Error(422, 'Please write some content');
		}
		if(!legend){
			throw new Meteor.Error(422, 'You must datemarker on a legend');
		}

		datemarker = _.extend(_.pick(datemarkerAttributes, 'legendId', 'body'), { 
			userId: user._id,
			subtitle: datemarkerAttributes.subtitle + (this.isSimulation ? '(client)' : '(server)'), 
			body: datemarkerAttributes.body + (this.isSimulation ? '(client)' : '(server)'), 
			dateSpan: datemarkerAttributes.dateSpan + (this.isSimulation ? '(client)' : '(server)'), 
			backgroundColour: datemarkerAttributes.backgroundColour + (this.isSimulation ? '(client)' : '(server)'), 
			submitted: new Date().getTime()
		});

		// update the post with the number of datemarkers
		Legends.update(datemarker.legendId, {$inc: {datemarkersCount: 1}});


		// wait for 5 seconds
			if (! this.isSimulation) {
				var Future = Npm.require('fibers/future'); 
				var future = new Future(); 
				Meteor.setTimeout(function() {
					future.return(); 
				}, 5 * 1000); 
				future.wait();
			}

		return Datemarkers.insert(datemarker); 

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