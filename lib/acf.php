<?php
 
add_filter('acf/settings/save_json', 'my_acf_json_save_point');
 
function my_acf_json_save_point( $path ) {
    
    // update path
    $path = get_stylesheet_directory() . '/acf-json';
    
    
    // return
    return $path;
    
}

add_filter('acf/fields/flexible_content/layout_title/name=stroken', 'my_acf_fields_flexible_content_layout_title', 10, 4);
function my_acf_fields_flexible_content_layout_title( $title, $field, $layout, $i ) {

	$oldtitle = $title;
	
	
	
	// load text sub field
	if( $text = get_sub_field('titel') ) {
		$title = '';
		$title .= '<strong>' . $oldtitle . ' </strong> | ' . $text;
	} elseif( $text = get_sub_field('lead') ) {
		$title = '';
		$title .= '<strong>' . $oldtitle . ' </strong> | ' . $text;	
	} else {
		$title = '';
		$title .= '<strong>' . $oldtitle . ' </strong>';	
	}
	return $title;
}