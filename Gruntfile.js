module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ["./html/css/"],
          yuicompress: true
        },
        files: {
          "./html/css/main.css": "./html/css/main.less"
        }
      }
    },
    watch: {
      files: "./html/css/*.less",
      tasks: ["less"]
    },
    connect: {
      server: {
        options: {
          port: 8082,
          base: 'html',
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
};