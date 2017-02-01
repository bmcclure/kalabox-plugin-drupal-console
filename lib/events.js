'use strict';

module.exports = function(kbox, app) {

    /*
     * Add Drupal Console specific CLI containers
     */
    app.events.on('post-app-load', function(app) {
        var path = require('path');

        // Add drupal cli containers
        var drupalComp = path.resolve(__dirname, '..', 'drupal-console-compose.yml');
        app.composeCore.push(drupalComp);

        // Add drupal specific tasks
        var drupalCli = path.resolve(__dirname, '..', 'drupal-console-cli.yml');
        app.taskFiles.push(drupalCli);
    });

};
