Template.chapterEdit.helpers({ 
	// 
	testyyyy: function(){
		stringy = this.body
		splitty = stringy.replace(/\n/g,"<br>")
		console.log(splitty)
	}
});


Template.chapterEdit.events({ 
	// 
	'submit form': function(e, template) {
	    e.preventDefault();
	    if(!Meteor.user()) throw 'You must be logged in.';


	    var currentChapterId = this._id;
	    var currentLegendId = this.legendId;

		var $subtitle = $(e.target).find('[name=subtitle]');
		var $body = $(e.target).find('[name=body]');
		var $dateSpan = $(e.target).find('[name=dateSpan]');
		var $backgroundColour = $(e.target).find('[name=backgroundColour]');


		var chapterProperties = {
			subtitle: $subtitle.val(),
			body: $body.val(),
			dateSpan: $dateSpan.val(),
			backgroundColour: $backgroundColour.val(),
	    	// legendId: this.legendId
	    };
  
		Chapters.update(currentChapterId, 
			{$set:
				chapterProperties
			},	
			function(error){ 
				if(error){
			        // display the error to the user
					alert(error.reason); 
				}else{
			        Router.go('legendEdit', {_id: currentLegendId});
	        	}
			}
		); 
	},

	'click .delete': function(e) { 
		e.preventDefault();
		if (confirm("Delete this chapter?")) { 
			var currentChapterId = this._id;
			var currentLegendId = this.legendId;

			var dmCount = Legends.findOne( currentLegendId ).chaptersCount
			console.log("dmCOUNT")
			console.log(dmCount)

			var dmCountMinus = (dmCount - 1)
			console.log("dmCOUNTMinus")
			console.log(dmCountMinus)

			Chapters.remove(currentChapterId);
			Legends.update(chapter.legendId, {$set: {chaptersCount: dmCountMinus}});
			console.log("dmCOUNT After")
			console.log(Legends.findOne( currentLegendId ).chaptersCount)


			Router.go('legendEdit', {_id: currentLegendId});
		}
	}
});