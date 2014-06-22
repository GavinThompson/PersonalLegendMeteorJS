Template.dashboardLayout.events({ 
	'mouseenter #dashboardSide': function(e) {
		console.log("mouseenter")
		$("#dashboardSide").animate({
			width: "200px",
			opacity: "0.4"
		}, 500, 'easeOutBounce', function(){
			$("#dashboardSideArrow").fadeOut( 250, function(){
				// 
			})
			$("#sideInner").fadeIn( 500 )

		})
 		// TODO: show inner sidemenu div; hide arrow (to be implemented) 
	},

	'mouseleave #dashboardSide': function(e) {
		$("#dashboardSide").animate({
			width: "38px",
			opacity: "1.0"
		}, 500, 'easeOutBounce', function(){

			$("#sideInner").fadeOut( 250, function(){
				// 
			})
			$("#dashboardSideArrow").fadeIn( 500 )
		})
		// TODO: hide inner sidemenu div; show arrow (to be implemented)
	}

});