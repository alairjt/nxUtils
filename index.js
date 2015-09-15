(function () {
    'use strict';
    
    var chalk = require('chalk'),
        fs = require('fs'),
        path = require('path');
    
    var nexxSay = function (appName) {
        return "" +
"\n                               ```                ``    " +
"\n                                `-/+/-`          '.-    " +
"\n                                  `-+so:.     .:.       " +
"\n  .-:--.`                            `:oys/../:`        " +
"\n `.:/++//:.`                           .+hdh/           " +
"\n     `.:+ooo+/-.                       `-/++yhs-        " +
"\n          `:+sssso/-`                 `-/+/. `/yh+`     " +
"\n             `-+syyys+-`            `-/++-`    -ohy-    " +
"\n                `:oyhyys/-        `:/++/.        .+os-  " +
"\n                   ./shhhys/.   ./++oo:`          .+++  " +
"\n                     `-oyyhhy+:/++os+.              .-. " +
"\n                        .+syhmmdyss:`                   " +
"\n                          :hddmmNd/         Bem vindo ao " + chalk.red(appName) +
"\n                        .+ssydmmhyyo.                   " +
"\n                     -+sssyyyoosyyys/`                  " +
"\n                   `-+yyyyyyo- `/osyyyo.                " +
"\n                `-oyyyyyys/`    -+osyys:                " +
"\n              `-oyyyyyyyo.       ./+osyy/`              " +
"\n            `:oyhhyyyys:`         ./++osy+`             " +
"\n          `:oyhhyyyyy+.            ./+++sy+             " +
"\n        `:syhhyyyyys:               .++++sy/            " +
"\n      `:shhhyyyyys+.                 :++++oo.           " +
"\n    `/syhhhyyyyys-                    .---.`            " +                                                                                                                                                                                                      
"\n   :syyssooooo+:`                                       " +                                                                                                                                                                                                      
"\n   -++++////:.`  " +
"\n\n";
    };
    
    var getDirectories = function () {
        var dir = path.dirname(process.cwd());
        
        var apps = [];
        
        fs.readdirSync(dir).filter(function(app) {
            var file = path.join(dir, app) + "/config/Gruntfile.js";
            if (fs.existsSync(file)) {
                apps.push(app);
            }
        });
        
        
        return apps;
    };
    
    var getConfigs = function () {
        var apps = getDirectories(),
            configs = [];
        
        for (var key in apps) {
            configs.push("../" + apps[key] + "/config/Gruntfile.js");
        }
        
        return configs;
    };
    
    var getConnects = function (connect) {
        var apps = getDirectories(),
            connects = [require('grunt-contrib-livereload/lib/utils').livereloadSnippet];
        
        for (var key in apps) {
            connects.push(connect().use(
                '/' + apps[key],
                connect.static('../' + apps[key] + '/src')
            ));
        }
        
        return connects;
    };

    module.exports = {
        nexxSay: nexxSay,
        getDirectories: getDirectories,
        getConfigs: getConfigs,
        getConnects: getConnects
    };
})();