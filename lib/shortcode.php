<?php 
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