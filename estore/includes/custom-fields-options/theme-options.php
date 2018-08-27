<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
use Carbon_Fields\Container;
use Carbon_Fields\Field;

// Add second options page under 'Basic Options'
Container::make( 'theme_options', 'Settings theme' )
    ->set_icon( 'dashicons-carrot' )
    ->add_tab( __('Header'), array(
        Field::make( 'image', 'est_header_logo', 'Logo' )
            ->set_width( 30 ),
        Field::make( 'text', 'crb_last_name', 'Last Name' ),
        Field::make( 'text', 'crb_position', 'Position' ),
    ) )
    ->add_tab( __('Pata'), array(
        Field::make( 'text', 'crb_email', 'Notification Email' ),
        Field::make( 'text', 'crb_phone', 'Phone Number' ),
    ) );
