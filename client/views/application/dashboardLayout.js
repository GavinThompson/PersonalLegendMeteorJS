Template.dashboardLayout.events({ 
	'mouseenter #dashboardSide': function(e) {
		console.log("mouseenter")
		$("#dashboardSide").animate({
			width: "200px",
			opacity: "0.4"
		}, 500, 'easeOutBounce', function(){
			// 
		})
 		// TODO: show inner sidemenu div; hide arrow (to be implemented) 
	},

	'mouseleave #dashboardSide': function(e) {
		$("#dashboardSide").animate({
			width: "30px",
			opacity: "1.0"
		}, 500, 'easeOutBounce', function(){
			// 
		})
		// TODO: hide inner sidemenu div; show arrow (to be implemented)
	}

});