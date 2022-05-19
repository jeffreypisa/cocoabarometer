<?php
/**
 * The template for displaying Archive pages.
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.2
 */

$templates = array( 'archive.twig', 'index.twig' );

$context = Timber::context();

/* Load categories */
$currentPostType = get_post_type();

/* Load categories */

$terms = \Timber::get_terms(array('taxonomy' => 'blog_category', 'hide_empty' => true));
$context['categories'] = $terms;

$context['title'] = $currentPostType;

$context['posts'] = new Timber\PostQuery($args_posts);

Timber::render( $templates, $context );