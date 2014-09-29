Template.legendView.helpers({ 
	chapters: function() {
		return Chapters.find({legendId: this._id, published: true}, {sort: {dateSpan: 1}});
	},

	chaptersWithTOCIndex: function() {

		var chapters = Chapters.find({legendId: this._id, published: true}, {sort: {dateSpan: 1}});
	    
	    for(var i = 0; i < chapters.length; i++) {
	    	// Table of contents start on '1' - so add '2' to 'i'
	        chapters[i].tableOfContentIndex = i+2;
	    }

	    return chapters;
	},

	condensedChapterTitle: function() { 
		fullTitle = this.subtitle
		titleLength = fullTitle.length
		if(titleLength >= 14){
			newTitle = fullTitle.slice(0, 16)
			newTitle = newTitle + "..."
			return newTitle
		}else{
			return fullTitle
		}
	}
});



Template.legendView.rendered = function() {
    // Anything here will get executed right when the template
    // is finished rendering.

    // console.log( "Init Skrollr ... begin")
	// var skroll = skrollr.init()
	// console.log( "Init Skrollr ... end")

	legendBookPage = function() {

		var $container = $( '#legendLayoutContainer' ),
			$bookBlock = $( '#bb-bookblock' ),
			$items = $bookBlock.children(),
			itemsCount = $items.length,
			current = 0,
			bb = $( '#bb-bookblock' ).bookblock( {
				speed : 800,
				perspective : 2000,
				shadowSides	: 0.8,
				shadowFlip	: 0.4,
				onEndFlip : function(old, page, isLimit) {
					
					current = page;
					// update TOC current
					updateTOC();
					// updateNavigation
					updateNavigation( isLimit );
					// initialize jScrollPane on the content div for the new item
					setJSP( 'init' );
					// destroy jScrollPane on the content div for the old item
					setJSP( 'destroy', old );

				}
			} ),
			$navNext = $( '#bb-nav-next' ),
			$navPrev = $( '#bb-nav-prev' ).hide(),
			$menuItems = $container.find( 'ul.menu-toc > li' ),
			$tblcontents = $( '#tblcontents' ),
			transEndEventNames = {
				'WebkitTransition': 'webkitTransitionEnd',
				'MozTransition': 'transitionend',
				'OTransition': 'oTransitionEnd',
				'msTransition': 'MSTransitionEnd',
				'transition': 'transitionend'
			},
			transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
			supportTransitions = Modernizr.csstransitions;

		function init() {
			console.log("Init???")

			console.log($bookBlock)
			console.log($items)
			console.log(itemsCount)

			// initialize jScrollPane on the content div of the first item
			setJSP( 'init' );
			initEvents();

		}
		
		function initEvents() {

			// add navigation events
			$navNext.on( 'click', function() {
				bb.next();
				return false;
			} );

			$navPrev.on( 'click', function() {
				bb.prev();
				return false;
			} );
			
			// add swipe events
			$items.on( {
				'swipeleft'		: function( event ) {
					if( $container.data( 'opened' ) ) {
						return false;
					}
					bb.next();
					return false;
				},
				'swiperight'	: function( event ) {
					if( $container.data( 'opened' ) ) {
						return false;
					}
					bb.prev();
					return false;
				}
			} );

			// show table of contents
			$tblcontents.on( 'click', toggleTOC );

			// click a menu item
			$menuItems.on( 'click', function() {

				var $el = $( this ),
					idx = $el.index(),
					jump = function() {
						bb.jump( idx + 1 );
					};

				console.log( $( this ) )
				
				current !== idx ? closeTOC( jump ) : closeTOC();

				return false;
				
			} );

			// reinit jScrollPane on window resize
			$( window ).on( 'debouncedresize', function() {
				// reinitialise jScrollPane on the content div
				setJSP( 'reinit' );
			} );

		}

		function setJSP( action, idx ) {
			// set JSScrollPane
			
			var idx = idx === undefined ? current : idx,
				$content = $items.eq( idx ).children( 'div.content' ),
				apiJSP = $content.data( 'jsp' );
			
			if( action === 'init' && apiJSP === undefined ) {
				$content.jScrollPane({verticalGutter : 0, hideFocus : true });
			}
			else if( action === 'reinit' && apiJSP !== undefined ) {
				apiJSP.reinitialise();
			}
			else if( action === 'destroy' && apiJSP !== undefined ) {
				apiJSP.destroy();
			}

		}

		function updateTOC() {
			$menuItems.removeClass( 'menu-toc-current' ).eq( current ).addClass( 'menu-toc-current' );
		}

		function updateNavigation( isLastPage ) {
			
			if( current === 0 ) {
				$navNext.show();
				$navPrev.hide();
			}
			else if( isLastPage ) {
				$navNext.hide();
				$navPrev.show();
			}
			else {
				$navNext.show();
				$navPrev.show();
			}

		}

		function toggleTOC() {
			var opened = $container.data( 'opened' );
			opened ? closeTOC() : openTOC();
		}

		function openTOC() {
			$navNext.hide();
			console.log("test1")
			$navPrev.hide();
			console.log("test2")
			$container.addClass( 'slideRight' ).data( 'opened', true );
			console.log("test3")
			console.log($container.data('opened'))
		}

		function closeTOC( callback ) {

			updateNavigation( current === itemsCount - 1 );
			$container.removeClass( 'slideRight' ).data( 'opened', false );
			if( callback ) {
				if( supportTransitions ) {
					$container.on( transEndEventName, function() {
						$( this ).off( transEndEventName );
						callback.call();
					} );
				}
				else {
					callback.call();
				}
			}

		}

		// return { init : init };

		init();
		$(".bb-item").hide()
		$(".bb-coverpage").fadeIn(500)

	}();




};