var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpack = require("webpack");
var webpackConfig = require("../webpack.config");

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var compiler = webpack(webpackConfig);
const PORT = process.env.PORT || 3000

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

const connections = [];
const games = [];
let cardIdCounter = 0;

server.listen(PORT, function(){
    console.log("https://localhost:"+PORT);
})