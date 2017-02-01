'use strict';

module.exports = function(grunt) {

  //--------------------------------------------------------------------------
  // SETUP CONFIG
  //--------------------------------------------------------------------------

  // Helpers to make things cleaner
  var pkg = grunt.file.readJSON('./package.json');
  var dev = (grunt.option('dev')) ? '-dev' : '';
  var version = pkg.version + dev;
  version = version;

  // Setup task config
  var config = {

    // Arrays of relevant code classified by type
    files: {
      js: {
        src: [
          '*.js',
          'lib/*.js',
          'scripts/*.js'
        ]
      }
    },

    // This handles automatic version bumping
    bump: {
      options: {
        files: ['package.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        pushTo: 'origin',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        globalReplace: false,
        prereleaseName: 'beta',
        metadata: '',
        regExp: false
      }
    },

    // Some linting and code standards
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: ['Gruntfile.js', '<%= files.js.src %>', 'index.js']
    },
    jscs: {
      src: ['Gruntfile.js', '<%= files.js.src %>', 'index.js'],
      options: {
        config: '.jscsrc'
      }
    }

  };

  //--------------------------------------------------------------------------
  // LOAD TASKS
  //--------------------------------------------------------------------------

  // load task config
  grunt.initConfig(config);

  // load external tasks
  //grunt.loadTasks('tasks');

  // load grunt-* tasks from package.json dependencies
  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  //--------------------------------------------------------------------------
  // SETUP WORKFLOWS
  //--------------------------------------------------------------------------

  /*
   * Bump Taskz
   */
  // Bump our minor version
  grunt.registerTask('bigrelease', [
    'bump:minor'
  ]);
  // Bump our patch version
  grunt.registerTask('release', [
    'bump:patch'
  ]);
  // Do a prerelease version
  grunt.registerTask('prerelease', [
    'bump:prerelease'
  ]);

  /*
   * Code tests
   */
  // Standards and code
  grunt.registerTask('test:code', [
    'jshint',
    'jscs'
  ]);
};
