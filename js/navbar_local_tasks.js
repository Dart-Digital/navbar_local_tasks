/**
 * @file
 * Defines the behavior of the Drupal administration navbar.
 */

(function ($, Backbone, Drupal) {

  "use strict";

  /**
   * Registers tabs with the navbar.
   *
   * The navbar allows modules to register top-level tabs. These may point
   * directly to a resource or toggle the visibility of a tray.
   *
   * Modules register tabs with hook_navbar().
   */
  Drupal.behaviors.navbar_local_tasks = {

    attach: function (context) {
      // Invoke the Navbar menu script for core modules.
      $('.navbar-menu-tabs').drupalNavbarMenu();
    }
  };

}(jQuery, Backbone, Drupal));
