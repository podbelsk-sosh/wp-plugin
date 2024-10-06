<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://github.com/ProjectSoft-STUDIONIONS
 * @since      1.0.0
 *
 * @package    Podbelsk
 * @subpackage Podbelsk/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Podbelsk
 * @subpackage Podbelsk/includes
 * @author     ProjectSoft <projectsoft2009@yandex.ru>
 */
class Podbelsk_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'podbelsk',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
