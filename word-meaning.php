<?php

// Plugin Name: Word Meaning
// Description: A simple plugin to display the meaning of a word using the Wordnik API
// Version: 1.0
// Author: Samir

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}


// https://api.dictionaryapi.dev/api/v2/entries/en/<word>


class Word_Meaning{
    function __construct() {
        add_action( 'wp_enqueue_scripts', [$this, 'load_scripts' ] );
        add_action('wp_footer', [$this, 'tooltip' ] );
    }

    function load_scripts(){
        $main_style = plugin_dir_url(__FILE__).'assets/css/wm-main.css';
        $main_script = plugin_dir_url(__FILE__).'assets/js/wm-main.js';
        
        // CSS file loading
        wp_enqueue_style(
            'wm-main-style',
            $main_style,
            [],
            1.0
        );

        // JS file loading
        wp_enqueue_script(
            'wm-main-js',
            $main_script,
            [],
            1.0,
            true
        );
    }

    function tooltip(){
        ?>
        <div id="wm-tooltip">
            <div class="tooltip-content">
                <div id="tooltip-header">
                    <h3></h3>
                </div>
                <div class="tooltip-body">
                    <p id="word-meaning"></p>
                </div>
            </div>
        </div>
        <?php
    }  
}

new Word_Meaning();