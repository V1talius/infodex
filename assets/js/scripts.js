jQuery( document ).ready( function( $ ) {

	$( '#main-slider' ).sliderPro( {
		width: '100%',
		height: 770,
		arrows: true,
		buttons: false,
		waitForLayers: true,
		autoplay: false,
		autoScaleLayers: false,
		slideDistance: 0,
		breakpoints: {
			992: {
				height: 500,
			},
			540: {
				height: 300,
			}
		}
	} );

	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 2,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	var $tabs         = $( '.tabs' ),
		$controlItems = $tabs.find( '.tabs__control-item'),
		$contentItems = $tabs.find( '.tabs__content-item');

		$controlItems.on( 'click', function() {
			var $this = $( this ),
				index = $this.data( 'index' );

			switchContent( index );
		} );

	function switchContent( jopa ) {

		$contentItems.each( function( index ) {
			var $this = $( this );

			if ( index === jopa ) {
				$this.addClass( 'active-content' );
				$controlItems.eq( index ).addClass( 'active-control' );
			} else {
				$this.removeClass( 'active-content' );
				$controlItems.eq( index ).removeClass( 'active-control' );
			}

		} );
	}

	switchContent( 1 );

} );
