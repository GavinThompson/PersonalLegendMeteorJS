Template.manageLegendList.events({

	'click .sidebar-nav-submenu': function(e, template) {
	    e.preventDefault();

		if( $(e.target).hasClass("open") ){
			console.log("has open! Begin remove")
			$(e.target).removeClass("open")
			console.log("Removed....")
		}else{
			console.log("doesn't have open! Begin add")
			$(e.target).addClass("open")
			console.log("Added....")
		}
	}
});