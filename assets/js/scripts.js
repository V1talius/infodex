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

} );
