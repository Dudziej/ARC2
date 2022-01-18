import * as express from 'express';
import apiRouter from './routes';

const app = express();

app.use(express.static('public'));
app.use(apiRouter.router);

var MongoClient = require('mongodb').MongoClient

const uri ="mongodb://127.0.0.1:27017";

app.get('/mongo/1_1_1', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('zegarekone').find().toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/2_1_1', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('zegarek').aggregate([
            {$lookup:
                    {
                        from: 'wzor',
                        localField: 'wzor',
                        foreignField: 'id',
                        as:'wzor'
                    }
            },
            {$match: {'wzor.text': 'logo'}}
        ]).toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/2_1_2', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        var query = {rodzaj: 'analogowe'}
        db.collection('arc').find(query).toArray(function (err, result) {
            if (err) throw err
            res.send(JSON.stringify(result))
        })
    })
})

app.get('/mongo/2_2_1', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        var query = {wodoszczelnosc: '200m'}
        db.collection('arc').find(query).toArray(function (err, result) {
            if (err) throw err
            res.send(JSON.stringify(result))
        })
    })
})

app.get('/mongo/2_3_1', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        var query = {wzor: 'logo'}
        db.collection('zegarekone').find(query).toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/3_1_1', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        var query = {wzor: {$exists: true}}
        db.collection('arc').find(query).toArray(function (err, result) {
            if (err) throw err
            res.send(JSON.stringify(result))
        })
    })
})

app.get('/mongo/3_2_1', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('zegarekone').aggregate([{$group : {_id : "$wzor"}}]).toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/4_1_1', function (req, res) {
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

app.get('/mongo/4_2_1', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        var query = {
            $and: [
                {wzor: 'logo'},
                {$or: [{kolor:'czarny'}, {kolor:'czarne'}]}
            ]
        }
        db.collection('zegarekone').find(query).toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/5_1_1', function (req, res) {
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

app.get('/mongo/5_2_1', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        var query = {
            $and: [
                {wzor: 'logo'},
                {kolor: { $ne :'czarny'}}
            ]
        }
        db.collection('zegarekone').find(query).toArray(function (err, result) {
            if (err) throw err
            res.send(JSON.stringify(result))
        })
    })
})

app.get('/mongo/6_1_1', function (req, res) {
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

app.get('/mongo/6_2_1', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('zegarekone').find({ "kolor": { "$exists": true } }).sort({'kolor': 1}).limit(10000).toArray(function (err, result) {
            if (err) throw err
            res.send(JSON.stringify(result))
        })
    })
})

app.get('/mongo/7_1_1', function (req, res) {
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

app.get('/mongo/7_2_1', function (req, res) {
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
