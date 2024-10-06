<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://github.com/ProjectSoft-STUDIONIONS
 * @since             1.0.0
 * @package           Podbelsk
 *
 * @wordpress-plugin
 * Plugin Name:       ГБОУ СОШ имени Н. С. ДОРОВСКОГО с. ПОДБЕЛЬСК
 * Plugin URI:        https://github.com/podbelsk-sosh/wp-plugin
 * Description:       Плагин для сайта школы ГБОУ СОШ имени Н. С. ДОРОВСКОГО с. ПОДБЕЛЬСК
 * Version:           1.0.0
 * Author:            ProjectSoft
 * Author URI:        https://github.com/ProjectSoft-STUDIONIONS/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       podbelsk
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'PODBELSK_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 */
function activate_podbelsk() {
	// Podbelsk_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 */
function deactivate_podbelsk() {
	// Podbelsk_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_podbelsk' );
register_deactivation_hook( __FILE__, 'deactivate_podbelsk' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */

function run_podbelsk() {
	//
	require_once(dirname(__FILE__) . '/Video.php');
	require_once(dirname(__FILE__) . '/WpRunClass.php');
	require_once(dirname(__FILE__) . '/RegisterStyleScript.php');
	require_once(dirname(__FILE__) . '/YandexFormCode.php');
	require_once(dirname(__FILE__) . '/GalleryShortCode.php');
	require_once(dirname(__FILE__) . '/VideoShortCode.php');
}
run_podbelsk();
