;(function($){
	'use strict';

	$('a[href*="#"]').on('click', function() {
		event.preventDefault();

		$('body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 600);

	});

	$('.ba-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		arrows: false
	});

	function centerMap($markers, map) {

	    if ($markers.length == 1) {
	        var lat = $markers.data('lat');
	        var lng = $markers.data('lng');
	        var latLng = new google.maps.LatLng(lat, lng);
	        map.setCenter(latLng);
	    } else {
	        var bounds = new google.maps.LatLngBounds();
	        $markers.each(function () {
	            var lat = $(this).data('lat');
	            var lng = $(this).data('lng');
	            var latLng = new google.maps.LatLng(lat, lng);
	            bounds.extend(latLng);
	        });

	        map.fitBounds(bounds);

	    }

	}


	createMap();

})(jQuery);
