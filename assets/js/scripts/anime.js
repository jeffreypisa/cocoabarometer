import inView from 'in-view';
import $ from "jquery";

export function animejs() {
		
	// Anime Reveal
	
	inView('.anime-reveal')
	.on('enter', el => {
		$(el).addClass('visible');
	});
	
	// Anime Fade in
	
	inView('.anime-fadein')
	.on('enter', el => {
		$(el).addClass('visible');
	});
	
		  
	inView('section.content')
	.on('enter', el => {
		var theid = $(el).prev().attr('id');
		$("#dynamic_select").val('#' + theid);
		$(".progress-and-chapter-select").removeClass('hide');
	}).on('exit', el => {
		$(".progress-and-chapter-select").addClass('hide');
	});
}