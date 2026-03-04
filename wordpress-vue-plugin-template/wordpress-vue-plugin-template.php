<?php
/**
 * Plugin Name:  WordPress Vue Plugin Template
 * Description:  Minimal Vue 3 plugin template. Use shortcode [vue_plugin] to embed anywhere.
 * Version:      1.0.0
 * Author:       Medienstürmer
 * License:      Private
 */

if ( ! defined( 'ABSPATH' ) ) exit;

class Vue_Plugin_Template {

    const VERSION = '1.0.0';

    public function __construct() {
        add_shortcode( 'vue_plugin', [ $this, 'render' ] );
        add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_assets' ] );
    }

    public function enqueue_assets() {
        $base = plugin_dir_url( __FILE__ ) . 'assets/';

        wp_enqueue_style(
            'vue-plugin',
            $base . 'vue-plugin.css',
            [],
            self::VERSION
        );

        wp_enqueue_script(
            'vue-plugin',
            $base . 'vue-plugin.js',
            [],
            self::VERSION,
            true
        );
    }

    public function render( $atts ) {
        return '<div id="vue-plugin-app"></div>';
    }
}

new Vue_Plugin_Template();
