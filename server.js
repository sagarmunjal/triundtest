#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var fs      = require('fs');

var app = express();

app.use('/',express.static(__dirname + '/app'));

// app.get('/',function(){
//     console.log("hi");
//     res.render('./public/index.html');
// })
var server = app.listen(process.env.OPENSHIFT_NODEJS_PORT || 8080,
process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
 function () {


  console.log('SErver Started');
});
/**
 *  Define the sample application.
//  */
// var SampleApp = function() {

//     //  Scope.
//     var self = this;


//     /*  ================================================================  */
//     /*  Helper functions.                                                 */
//     /*  ================================================================  */

//     /**
//      *  Set up server IP address and port # using env variables/defaults.
//      */
//     self.setupVariables = function() {
//         //  Set the environment variables we need.
//         self.ipaddress = ;
//         self.port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

//         if (typeof self.ipaddress === "undefined") {
//             //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
//             //  allows us to run/test the app locally.
//             console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
//             self.ipaddress = "127.0.0.1";
//         };
//     };






