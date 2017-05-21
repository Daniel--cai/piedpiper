var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpack = require("webpack");
var webpackConfig = require("../webpack.config");
var bodyParser = require('body-parser')
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mongoose = require('mongoose');
var axios = require('axios')
var apiKey = ''
var ApiClient = axios.create({
    baseURL: 'https://na.api.pvp.net/api/lol',
    timeout:4000,
    params: {'api_key': apiKey}
})

mongoose.Promise = global.Promise;
var compiler = webpack(webpackConfig);
const PORT = process.env.PORT || 3000

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

app.get('/image', (req,res)=>{
    var region = "na"
    var id = "/266"
    var uri = `static-data/${region}/v1.2/champion${id}`
        //uri = `${region}/v1.2/champion`
    ApiClient.get(uri)
        .then(response => {
            console.log(response)
            res.status(200).send(response.data)
        })
        .catch(error =>{
            console.log(error.response)
            console.log(error.response.data)
            res.status(400).send(error.response.data)
        })
})

app.get('/match', (req,res)=>{

    var summonerName = "asdf"
    var summonerId; 
    var region ="na"
    res.setHeader('Content-Type', 'application/json');
    ApiClient.get(`na/v1.4/summoner/by-name/${summonerName}`)
        .then(response=>{
            var summonerId = response.data[summonerName].id
            console.log(summonerId)
            ApiClient.get(`${region}/v2.2/matchlist/by-summoner/${summonerId}`)
            .then(response=>{
                console.log(response)
                res.status(200).send(response.data)
            })
            .catch(error=>{
                console.log(error.response.data)
                res.status(400).send(error.response.data)
            })
        })
        .catch(error=>{
            console.log(error.response.data)
            res.status(400).send(error.response.data)
        })

})

app.get('/user', (req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    var user = "Teemogtg"

    ApiClient.get(`lol/na/v1.4/summoner/by-name/${user}`)
        .then(response=>{
            //console.log(data)
            res.status(200).send(response.data)
        })
        .catch(error=>{
            console.log(error)
            res.status(400).send(error.data)
        })
})

app.post('/Property/Title', (req,res)=>{
    res.setHeader('Content-Type', 'application/json'); 
    console.log(req.body)
    body = {
        cp: 'no',
        proprietor: 'Bob Steven Jones',
        address: '15 Derp St Appletown NSW 2000',
        parish: 'St George',
        county: 'Cumberland',
        fee: 10.79
    }
    res.status(200).send(body)
})

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
 server.listen(PORT, function(){
        console.log("https://localhost:"+PORT);
    })
/*
var Order = mongoose.model('Order', orderSchema)



mongoose.connect(mongoUri, {})
var conn = mongoose.connection;
conn.on('error', console.log.bind(console, 'connection error:'));

conn.once('open', function(){
    server.listen(PORT, function(){
        console.log("https://localhost:"+PORT);
    })

})
*/
