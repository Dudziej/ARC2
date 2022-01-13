var express = require('express')
var app = express()
var MongoClient = require('mongodb').MongoClient

const uri ="mongodb://127.0.0.1:27017";

app.use(express.static('public'))

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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));