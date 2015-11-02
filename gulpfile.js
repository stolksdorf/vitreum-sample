"use strict";

var vitreumTasks = require("vitreum/tasks");
var gulp = require("gulp");


var gulp = vitreumTasks(gulp, {
	entryPoints: ["./client/vitreumSample"],
	DEV: true,

	buildPath: "./build/",
	pageTemplate: "./client/template.dot",

	projectModules: ["./shared/vitreumSample"],
	assetExts: ["*.svg", "*.png", "*.jpg", "*.pdf", "*.eot", "*.ttf", "*.woff", "*.woff2", "*.ico"],

	serverWatchPaths: ["server"],
	serverScript: "server.js",
	libs: [
		"react",
		"react-dom",
		"lodash",
		"classnames",
		"marked"
	],
	clientLibs: [],
});


