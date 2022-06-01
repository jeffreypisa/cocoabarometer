import $ from "jquery";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

// Init plugins
// import { slick_init } from './scripts/slick.js';
import { matchheight_init } from './scripts/matchheight.js';
import { animejs } from './scripts/anime.js';
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
	
	$(window).scroll((function() {
	  let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
	  $(".progress-bar").css({width: w + "%"})
	}));
	

	var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
	var collapseList = collapseElementList.map(function (collapseEl) {
	  	return new bootstrap.Collapse(collapseEl, {
	  		toggle: false
		})
	})
	
	$('.uitklap').click(function() {
		var thecollapsable = $(this).next();
		new bootstrap.Collapse(thecollapsable)
	});
	
  	$('#dynamic_select').on('change', function () {
	  	var url = $(this).val(); // get selected value
	  	if (url) { // require a URL
		  	window.location = url; // redirect
	  	}
	  	return false;
  	});

	  
});

$(window).on('load', function() {
	matchheight_init();
	animejs();
	sticky_header();
	site_is_loaded();
});