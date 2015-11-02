'use strict';
var vitreumRender = require('vitreum/render');
var express = require("express");
var app = express();
app.use(express.static(__dirname + '/build'));




app.get('*', function (req, res) {
	vitreumRender({
		page: './build/vitreumSample/bundle.dot',
		globals:{},
		prerenderWith : './client/vitreumSample/vitreumSample.jsx',
		initialProps: {
			url: req.originalUrl,

			initalText : "## Vitreum\n* a super cool build system"
		},
		clearRequireCache : true,
	}, function (err, page) {
		return res.send(page)
	});
});


var port = process.env.PORT || 8000;
app.listen(port);
console.log('Listening on localhost:' + port);