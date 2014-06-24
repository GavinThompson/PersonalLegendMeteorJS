Template.dashboardLayout.events({ 
	'mouseenter #dashboardSide': function(e) {
		$("#dashboardSideArrow").fadeOut( 250, function(){})
		$("#dashboardSide").animate({
			// opacity: "0.4",
			width: "130px"
		}, 500, 'easeOutBounce', function(){
			$("#innerMenu").fadeIn( 500 )
		})
 		// TODO: show inner sidemenu div; hide arrow (to be implemented) 
	},

	'mouseleave #dashboardSide': function(e) {
		$("#innerMenu").fadeOut( 250, function(){})
		$("#dashboardSide").animate({
			// opacity: "1.0",
			width: "38px"
		}, 500, 'easeOutBounce', function(){
			$("#dashboardSideArrow").fadeIn( 500 )
		})
		// TODO: hide inner sidemenu div; show arrow (to be implemented)
	},

	'mouseenter #innerMenu li': function(e) {
		$(e.target).css({
			"color": "ghostwhite",
			"background": "rgba(164, 164, 164, 0.7)",
			"border":"1px solid #FF7256" 
		})		
	},

	'mouseleave #innerMenu li': function(e) {
		$(e.target).css({
			"color": "inherit",
			"background": "inherit",
			"border": "none"
		})
	}

});