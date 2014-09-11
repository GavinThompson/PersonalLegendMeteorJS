Template.manageLegendList.helpers({ 
	legends: function() {
		// needs refactoring... call at the router level?
		return Legends.find({ userId: Meteor.userId() }, {sort: {submitted: -1}});
	}
});

Template.manageLegendList.events({
	'click .sidebar-nav-submenu': function(e, template) {
	    e.preventDefault();

		if( $(e.target).hasClass("open") ){
			$(e.target).removeClass("open")
		}else{
			$(e.target).addClass("open")
		}
	}
});