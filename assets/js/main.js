import $ from "jquery";
import 'bootstrap';

// Init plugins
// import { slick_init } from './scripts/slick.js';
import { matchheight_init } from './scripts/matchheight.js';
// import { animejs } from './scripts/anime.js';
import { lity_init } from './scripts/lity.js';
import { simpleparallax } from './scripts/simpleparallax.js';

// Scripts
import { site_is_loaded } from './scripts/site_is_loaded.js';
// import { footer_down } from './scripts/footer_down.js';
// import { mobilemenu } from './scripts/mobilemenu.js';
import { sticky_header } from './scripts/sticky_header.js';

lity_init();
simpleparallax();

$( document ).ready(function() {
	//footer_down();
	// mobilemenu();
	// slick_init();
	
	$(".js-scrolldown").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $(this).closest('section').next().offset().top
		}, 400);
	});
	
	$(".js-scrollup").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 600);    
	});
});

$(window).on('load', function() {
	matchheight_init();
	// animejs();
	sticky_header();
	site_is_loaded();
	
	var jaa = $('.text_popover_global').attr('data-content');
	$('.text_popover_global').append('<span class="cor">' + jaa + '</span>');
});