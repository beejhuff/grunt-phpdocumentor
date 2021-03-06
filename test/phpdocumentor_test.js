'use strict';

var grunt = require('grunt'), 
    fs = require('fs');

exports.phpdocumentor = {

    /**
     * Function called before the execution of each test method.
     * 
     * @param {nodeunit} test a reference to nodeunit.
     */
    setUp: function(done) {
        
        // Clears the 'docs' folder
        grunt.file.delete('docs');
        
        // Execution of our setUp method is terminated
        done();
    
    },
  
    /**
     * Function called after the execution of each test method.
     * 
     * @param {nodeunit} test a reference to nodeunit.
     */
    tearDown : function(done) {

        // Execution of our tearDown method is terminated
        done();

    },
    
    /**
     * Test method used to test the 'list' phpDocumentor command.
     * 
     * @param {nodeunit} test a reference to nodeunit.
     */
    testForList : function(test) {
        
        test.expect(9);
        
        // Executes the plugin using a new Grunt Process
        grunt.util.spawn({
            grunt: true,
            args: ['phpdocumentor:testForList', '--no-color']
        }, function(error, result, code) {

            // If an error occured we display the associated log
            if(code > 0) {
                
                console.log(result);
                
            }
            
            // We test that the output of the command contains the phpDocumentor 'list' command strings
            //  Available commands:
            //    help                Displays help for a command
            //    list                Lists commands
            //    parse               Creates a structure file from your source code
            //    run                 Parses and transforms the given files to a specified location
            //    transform           Converts the PHPDocumentor structure file to documentation
            //  project
            //    project:parse       Creates a structure file from your source code
            //    project:run         Parses and transforms the given files to a specified location
            //    project:transform   Converts the PHPDocumentor structure file to documentation
            //  template
            //    template:list       Displays a listing of all available templates in phpDocumentor
            test.ok(result.stdout.indexOf('  help                Displays help for a command') > 0);
            test.ok(result.stdout.indexOf('  list                Lists commands') > 0);
            test.ok(result.stdout.indexOf('  parse               Creates a structure file from your source code') > 0);
            test.ok(result.stdout.indexOf('  run                 Parses and transforms the given files to a specified location') > 0);
            test.ok(result.stdout.indexOf('  transform           Converts the PHPDocumentor structure file to documentation') > 0);
            test.ok(result.stdout.indexOf('  project:parse       Creates a structure file from your source code') > 0);
            test.ok(result.stdout.indexOf('  project:run         Parses and transforms the given files to a specified location') > 0);
            test.ok(result.stdout.indexOf('  project:transform   Converts the PHPDocumentor structure file to documentation') > 0);
            test.ok(result.stdout.indexOf('  template:list       Displays a listing of all available templates in phpDocumentor') > 0);

            // Indicates that the execute of our test is terminated
            test.done();

        });

    },
    
    /**
     * Test method used to test the 'parse' phpDocumentor command.
     * 
     * @param {nodeunit} test a reference to nodeunit.
     */
    testForParse : function(test) {
      
        test.expect(3);
        
        // Executes the plugin using a new Grunt Process
        grunt.util.spawn({
            grunt: true,
            args: ['phpdocumentor:testForParse', '--no-color']
        }, function(error, result, code) {

            // If an error occured we display the associated log
            if(code > 0) {
                
                console.log(result);
                
            }
            
            // We test that the output of the command contains the phpDocumentor 'parse' command strings
            //  Collecting files .. OK
            //  Initializing parser .. OK
            //  Parsing files
            test.ok(result.stdout.indexOf('Collecting files .. OK') > 0);
            test.ok(result.stdout.indexOf('Initializing parser .. OK') > 0);
            test.ok(result.stdout.indexOf('Parsing files') > 0);

            // Indicates that the execute of our test is terminated
            test.done();

        });
        
    },
    
    /**
     * Test method used to test the 'project:parse' phpDocumentor command.
     * 
     * @param {nodeunit} test a reference to nodeunit.
     */
    testForProjectParse : function(test) {
        
        test.expect(3);
        
        // Executes the plugin using a new Grunt Process
        grunt.util.spawn({
            grunt: true,
            args: ['phpdocumentor:testForProjectParse', '--no-color']
        }, function(error, result, code) {

            // If an error occured we display the associated log
            if(code > 0) {
                
                console.log(result);
                
            }
            
            // We test that the output of the command contains the phpDocumentor 'project:parse' command strings
            //  Collecting files .. OK
            //  Initializing parser .. OK
            //  Parsing files
            test.ok(result.stdout.indexOf('Collecting files .. OK') > 0);
            test.ok(result.stdout.indexOf('Initializing parser .. OK') > 0);
            test.ok(result.stdout.indexOf('Parsing files') > 0);

            // Indicates that the execute of our test is terminated
            test.done();

        });
        
    },
    
    /**
     * Test method used to test the 'project:run' phpDocumentor command.
     * 
     * @param {nodeunit} test a reference to nodeunit.
     */
    testForProjectRun : function(test) {
        
        test.expect(2);
        
        // At the beginning no 'target/testForProjectRun' directory exists
        test.ok(!fs.existsSync('target/testForProjectRun'));
        
        // Executes the plugin using a new Grunt Process
        grunt.util.spawn({
            grunt: true,
            args: ['phpdocumentor:testForProjectRun', '--no-color']
        }, function(error, result, code) {

            // If an error occured we display the associated log
            if(code > 0) {
                
                console.log(result);
                
            }
              
            // A 'target/testForProjectRun' directory must have been created
            test.ok(fs.existsSync('target/testForProjectRun'));
              
            // Indicates that the execute of our test is terminated
            test.done();

        });
        
    },
    
    /**
     * Test method used to test the 'template:list' phpDocumentor command.
     * 
     * @param {nodeunit} test a reference to nodeunit.
     */
    testForTemplateList : function(test) {
        
        test.expect(9);
        
        // Executes the plugin using a new Grunt Process
        grunt.util.spawn({
            grunt: true,
            args: ['phpdocumentor:testForTemplateList', '--no-color']
        }, function(error, result, code) {

            // If an error occured we display the associated log
            if(code > 0) {
                
                console.log(result);
                
            }
            
            // We test that the output of the command contains the phpDocumentor 'template:string' command strings
            test.ok(result.stdout.indexOf('Available templates:') > 0);
            test.ok(result.stdout.indexOf('* abstract') > 0);
            test.ok(result.stdout.indexOf('* checkstyle') > 0);
            test.ok(result.stdout.indexOf('* new-black') > 0);
            test.ok(result.stdout.indexOf('* old-ocean') > 0);
            test.ok(result.stdout.indexOf('* responsive') > 0);
            test.ok(result.stdout.indexOf('* responsive-twig') > 0);
            test.ok(result.stdout.indexOf('* xml') > 0);
            test.ok(result.stdout.indexOf('* zend') > 0);
            
            // Indicates that the execute of our test is terminated
            test.done();

        });
        
    },
    
    /**
     * Test method used to test the execution of the plugin with a custom PHAR file.
     * 
     * @param {nodeunit} test a reference to nodeunit.
     */
    testWithCustomPharFile : function(test) {
        
        test.expect(2);
        
        // At the beginning no 'target/testWithCustomPharFile' directory exists
        test.ok(!fs.existsSync('target/testWithCustomPharFile'));
        
        // Executes the plugin using a new Grunt Process
        grunt.util.spawn({
            grunt: true,
            args: ['phpdocumentor:testWithCustomPharFile', '--no-color']
        }, function(error, result, code) {

            // If an error occured we display the associated log
            if(code > 0) {
                
                console.log(result);
                
            }
              
            // A 'target/testWithCustomPharFile' directory must have been created
            test.ok(fs.existsSync('target/testWithCustomPharFile'));
              
            // Indicates that the execute of our test is terminated
            test.done();

        });
        
    },
    
    /**
     * Test method used to test the execution of the plugin with the default options.
     * 
     * @param {nodeunit} test a reference to nodeunit.
     */
    testWithDefaultOptions : function(test) {

        test.expect(2);
        
        // At the beginning no 'docs' directory exists
        test.ok(!fs.existsSync('docs'));
        
        // Executes the plugin using a new Grunt Process
        grunt.util.spawn({
            grunt: true,
            args: ['phpdocumentor:testWithDefaultOptions', '--no-color']
        }, function(error, result, code) {

            // If an error occured we display the associated log
            if(code > 0) {
                
                console.log(result);
                
            }
            
            // A 'docs' directory must have been created
            test.ok(fs.existsSync('docs'));
              
            // Indicates that the execute of our test is terminated
            test.done();

        });
        
    },
    
    /**
     * Test method used to test the execution of the plugin with a 'null' phar option.
     * 
     * @param {nodeunit} test a reference to nodeunit.
     */
    testWithNullPhar : function(test) {
        
        test.expect(2);
        
        // At the beginning no 'target/testWithNullPhar' directory exists
        test.ok(!fs.existsSync('target/testWithNullPhar'));
        
        // Executes the plugin using a new Grunt Process
        grunt.util.spawn({
            grunt: true,
            args: ['phpdocumentor:testWithNullPhar', '--no-color']
        }, function(error, result, code) {

            // If an error occured we display the associated log
            if(code > 0) {

                console.log(result);

            }

            // A 'target/testWithNullPhar' directory must have been created
            test.ok(fs.existsSync('target/testWithNullPhar'));

            // Indicates that the execute of our test is terminated
            test.done();

        });
        
    },
    
    /**
     * Test method used to test the execution of the plugin with the 'target' option.
     * 
     * @param {nodeunit} test a reference to nodeunit.
     */
    testWithTarget : function(test) {
        
        test.expect(2);
        
        // At the beginning no 'target/testWithTarget' directory exists
        test.ok(!fs.existsSync('target/testWithTarget'));
        
        // Executes the plugin using a new Grunt Process
        grunt.util.spawn({
            grunt: true,
            args: ['phpdocumentor:testWithTarget', '--no-color']
        }, function(error, result, code) {

            // If an error occured we display the associated log
            if(code > 0) {
                
                console.log(result);
                
            }
              
            // A 'target/testWithTarget' directory must have been created
            test.ok(fs.existsSync('target/testWithTarget'));
              
            // Indicates that the execute of our test is terminated
            test.done();

        });
        
    },
    
    /**
     * Test method used to test the execution of the plugin for Task Level options overwriting.
     * 
     * @param {nodeunit} test a reference to nodeunit.
     */
    testWithTaskOptionsOverwriting : function(test) {
        
        test.expect(1);
        
        // Executes the plugin using a new Grunt Process
        grunt.util.spawn({
            grunt: true,
            args: ['phpdocumentor:testWithTaskOptionsOverwriting', '--no-color']
        }, function(error, result, code) {

            // If an error occured we display the associated log
            if(code > 0) {
                
                console.log(result);
                
            }
            
            // We test that the output of the command contains the phpDocumentor 'help' command usage string
            //  Usage : 
            //    help [--xml] [--format="..."] [--raw] [command_name]
            test.ok(result.stdout.indexOf('help [--xml] [--format="..."] [--raw] [command_name]') > 0);

            // Indicates that the execute of our test is terminated
            test.done();

        });
        
    }

};
