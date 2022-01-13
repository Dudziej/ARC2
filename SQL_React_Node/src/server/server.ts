import * as express from 'express';
import apiRouter from './routes';

const app = express();

app.use(express.static('public'));
app.use(apiRouter.router);

var MongoClient = require('mongodb').MongoClient

const uri ="mongodb://127.0.0.1:27017";

app.get('/mongo/getAll', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('arc').find().toArray(function (err, result) {
            if (err) throw err
            res.send(JSON.stringify(result))
        })
    })
})

app.get('/mongo/getOne', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('arc').find().limit(1).toArray(function (err, result) {
            if (err) throw err
            res.send(JSON.stringify(result))
        })
    })
})

app.get('/mongo/getAnalogowe', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        var query = {Rodzaj: 'Analogowe'}
        db.collection('arc').find(query).toArray(function (err, result) {
            if (err) throw err
            res.send(JSON.stringify(result))
        })
    })
})

app.get('/mongo/getWodoszczelne200m', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        var query = {Wodoszczelność: '200m'}
        db.collection('arc').find(query).toArray(function (err, result) {
            if (err) throw err
            res.send(JSON.stringify(result))
        })
    })
})

app.get('/mongo/getLorus', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        var query = {Producent: 'Lorus Zegarki Lorus'}
        db.collection('arc').find(query).toArray(function (err, result) {
            if (err) throw err
            res.send(JSON.stringify(result))
        })
    })
})

app.get('/mongo/getWzor', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        var query = {Wzór: {$exists: true}}
        db.collection('arc').find(query).toArray(function (err, result) {
            if (err) throw err
            res.send(JSON.stringify(result))
        })
    })
})

app.get('/mongo/getEven', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        var query = {id: {$mod: [2, 0]}}
        db.collection('arc').find(query).toArray(function (err, result) {
            if (err) throw err
            res.send(JSON.stringify(result))
        })
    })
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
