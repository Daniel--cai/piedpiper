var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpack = require("webpack");
var webpackConfig = require("../webpack.config");

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var compiler = webpack(webpackConfig);
const PORT = process.env.PORT || 3000

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.get('/data', (req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    var query = Order.find({name: 'kfc'}, {name: 1, '_id': 0}).exec()
    
    var body = query
        .then( (order)=>{res.status(200).send(order)})
        .catch(()=>res.status(400).send("err"))


});
var user = "piper"
var password = "piper"
var mongoUri = `mongodb://${user}:${password}@ds064299.mlab.com:64299/piper`
console.log(mongoUri)

var orderSchema = mongoose.Schema({
    name: String,
    fee: Number
})
var Order = mongoose.model('Order', orderSchema)



mongoose.connect(mongoUri, {})
var conn = mongoose.connection;
conn.on('error', console.log.bind(console, 'connection error:'));

conn.once('open', function(){
    server.listen(PORT, function(){
        console.log("https://localhost:"+PORT);
    })

})

