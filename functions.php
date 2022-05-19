<?php 

include 'lib/menu.php';
include 'lib/acf.php';
include 'lib/cpt.php';
include 'lib/ctax.php';
include 'lib/gutenberg.php';
include 'lib/includes.php';
include 'lib/optionspage.php';
include 'lib/svg.php';
include 'lib/timber.php';
include 'lib/videoembed.php';
include 'lib/widgets.php';
include 'lib/loadmoreposts.php';
include 'lib/wpadmin.php';

// Set permalink structure projecten

function wpa_blog_permalinks( $post_link, $post ){
	if ( is_object( $post ) && $post->post_type == 'blog' ){
		$terms = wp_get_object_terms( $post->ID, 'blog_category' );
		if( $terms ){
			return str_replace( '%blog_category%' , $terms[0]->slug , $post_link );
		}
	}
	return $post_link;
}
add_filter( 'post_type_link', 'wpa_blog_permalinks', 1, 2 );



add_action( 'init', 'tryvary_buttons' );
function tryvary_buttons() {
	add_filter( "mce_external_plugins", "tryvary_add_buttons" );
	add_filter( 'mce_buttons', 'tryvary_register_buttons' );
}
function tryvary_add_buttons( $plugin_array ) {
	$plugin_array['tryvary_code_block'] = get_template_directory_uri() . '/assets/js/tiny-code-btn.js';
	return $plugin_array;
}
function tryvary_register_buttons( $buttons ) {
	array_push( $buttons, 'tryvary_code_block'); // droid_title
	return $buttons;
}



add_action( 'init', 'tryvary_buttons2' );
function tryvary_buttons2() {
	add_filter( "mce_external_plugins", "tryvary_add_buttons2" );
	add_filter( 'mce_buttons', 'tryvary_register_buttons2' );
}
function tryvary_add_buttons2( $plugin_array ) {
	$plugin_array['tryvary_code_block2'] = get_template_directory_uri() . '/assets/js/tiny-code-btn2.js';
	return $plugin_array;
}
function tryvary_register_buttons2( $buttons ) {
	array_push( $buttons, 'tryvary_code_block2'); // droid_title
	return $buttons;
}