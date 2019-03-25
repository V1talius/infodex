jQuery( document ).ready( function( $ ) {

	'use strict';

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


	var testiCarousel1 = new Swiper( '.testimonials-1', {
		slidesPerView: 2,
		spaceBetween: 30,
		pagination: {
			el: '.testimonials-pagination-1',
			clickable: true,
		},
	});

	var testiCarousel2 = new Swiper( '.testimonials-2', {
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.testimonials-pagination-2',
			clickable: true,
		},
	});

	var brandsCarousel = new Swiper( '.brands', {
		slidesPerView: 6,
		spaceBetween: 30,
		pagination: {
			el: '.brands-pagination',
			clickable: true,
		},
	});

	$( '.section-10 h2' ).on( 'click', function(){
		testiCarousel1.slideNext( 1000, true );
	});

	//////////////////fdkjhfkjdfg///////////////////

	$( '.ellipse-avatar-button' ).on( 'click', function(){
		randomize();
	});

	function randomize() {
		var $ellipse__avatar        = $( '.ellipse__avatar' ),
			$ellipse__avatar__item  = $( '.ellipse__avatar__item', $ellipse__avatar );

			$ellipse__avatar__item.each( function( index ) {
				var $item       = $( this ),
					randomSide  = Math.round( Math.random() ),
					randomXRage = randomSide == 0 ? { min: 0, max: 20 } : { min: 80, max: 100 },
					randomX     = getRndInteger( randomXRage.min, randomXRage.max ),
					randomY     = getRndInteger( 40, 60 ),
					randomR     = Math.floor(Math.random() * 360);

				$item.css( {
					'top': randomY + '%',
					'left': randomX + '%',
					'transform': 'rotate(' + randomR + 'deg)'
				});
			});
	}

	randomize();

	function getRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min) ) + min;
	}
	////////////////////////////////

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

	///// Video ///////

	$('.author-video').each( function(){
		var $this  = $( this ),
			$cover = $( '.cover', $this ),
			$video = $( 'video', $this );

			$cover.on( 'click', function() {
				$cover.fadeOut( 'fast', function() {
					$( this ).remove();
				} )
				$video[0].play();
			} );
	});

} );
