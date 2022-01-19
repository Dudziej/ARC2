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

app.get('/mongo/1_2_1', function (req, res) {
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
            {$lookup:
                    {
                        from: 'zapiecie',
                        localField: 'zapiecie',
                        foreignField: 'id',
                        as:'zapiecie'
                    }
            },
            {$lookup:
                    {
                        from: 'wodoszczelnosc',
                        localField: 'wodoszczelnosc',
                        foreignField: 'id',
                        as:'wodoszczelnosc'
                    }
            },
            {$lookup:
                    {
                        from: 'typ',
                        localField: 'typ',
                        foreignField: 'id',
                        as:'typ'
                    }
            },
            {$lookup:
                    {
                        from: 'styl',
                        localField: 'styl',
                        foreignField: 'id',
                        as:'styl'
                    }
            },
            {$lookup:
                    {
                        from: 'rodzajszkla',
                        localField: 'rodzaj_szkla',
                        foreignField: 'id',
                        as:'rodzaj_szkla'
                    }
            },
            {$lookup:
                    {
                        from: 'rodzajpaska',
                        localField: 'rodzaj_paska',
                        foreignField: 'id',
                        as:'rodzaj_paska'
                    }
            },
            {$lookup:
                    {
                        from: 'rodzaj',
                        localField: 'rodzaj',
                        foreignField: 'id',
                        as:'rodzaj'
                    }
            },
            {$lookup:
                    {
                        from: 'producent',
                        localField: 'producent',
                        foreignField: 'id',
                        as:'producent'
                    }
            },
            {$lookup:
                    {
                        from: 'popularne',
                        localField: 'popularne',
                        foreignField: 'id',
                        as:'popularne'
                    }
            },
            {$lookup:
                    {
                        from: 'mechanizm',
                        localField: 'mechanizm',
                        foreignField: 'id',
                        as:'mechanizm'
                    }
            },
            {$lookup:
                    {
                        from: 'materialkoperty',
                        localField: 'material_koperty',
                        foreignField: 'id',
                        as:'material_koperty'
                    }
            },
            {$lookup:
                    {
                        from: 'liniazegarkow',
                        localField: 'linia_zegarkow',
                        foreignField: 'id',
                        as:'linia_zegarkow'
                    }
            },
            {$lookup:
                    {
                        from: 'ksztaltkoperty',
                        localField: 'ksztalt_koperty',
                        foreignField: 'id',
                        as:'ksztalt_koperty'
                    }
            },
            {$lookup:
                    {
                        from: 'krajproducenta',
                        localField: 'kraj_producenta',
                        foreignField: 'id',
                        as:'kraj_producenta'
                    }
            },
            {$lookup:
                    {
                        from: 'kolor',
                        localField: 'kolor',
                        foreignField: 'id',
                        as:'kolor'
                    }
            },
            {$lookup:
                    {
                        from: 'gwarancja',
                        localField: 'gwarancja',
                        foreignField: 'id',
                        as:'gwarancja'
                    }
            },
            {$lookup:
                    {
                        from: 'funkcje',
                        localField: 'funkcje',
                        foreignField: 'id',
                        as:'funkcje'
                    }
            },
            {$lookup:
                    {
                        from: 'cechydodatkowe',
                        localField: 'cechy_dodatkowe',
                        foreignField: 'id',
                        as:'cechy_dodatkowe'
                    }
            },
        ]).toArray(function (err, result) {
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
//TODO
app.get('/mongo/2_1_2', function (req, res) {
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
            res.send(JSON.stringify(result))
        })
    })
})
//TODO
app.get('/mongo/2_2_1', function (req, res) {
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
        db.collection('zegarek').aggregate([
            {$lookup:
                    {
                        from: 'wzor',
                        localField: 'wzor',
                        foreignField: 'id',
                        as:'wzor'
                    }
            },
            {$group : {_id : "$wzor"}},
        ]).toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
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
//TODO
app.get('/mongo/4_1_1', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('zegarek').aggregate([
            {$lookup:
                    {
                        from: 'kolor',
                        localField: 'kolor',
                        foreignField: 'id',
                        as:'kolor'
                    }
            },
            {$lookup:
                    {
                        from: 'wzor',
                        localField: 'wzor',
                        foreignField: 'id',
                        as:'wzor'
                    }
            },
            {$match:
                    {$and:
                            [
                                {'wzor.text':'logo'},
                                {$or:[{'kolor.text':'czarne'}, {'kolor.text':'czarny'}]}
                            ]

                    }}

        ]).toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
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
//TODO
app.get('/mongo/5_1_1', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('zegarek').aggregate([
            {$lookup:
                    {
                        from: 'kolor',
                        localField: 'kolor',
                        foreignField: 'id',
                        as:'kolor'
                    }
            },
            {$lookup:
                    {
                        from: 'wzor',
                        localField: 'wzor',
                        foreignField: 'id',
                        as:'wzor'
                    }
            },
            {$match:
                    {$and:
                    [
                        {'wzor.text':'logo'},
                        {'kolor.text':{$ne:'czarny'}}
                    ]

            }}

        ]).toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
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
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/6_1_1', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('zegarek').aggregate([
            {$lookup:
                    {
                        from: 'kolor',
                        localField: 'kolor',
                        foreignField: 'id',
                        as:'kolor'
                    }
            },
            {$sort: {'kolor.text': 1}}
        ]).toArray(function (err, result) {
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
        db.collection('zegarek').aggregate([
            {$lookup:
                    {
                        from: 'kolor',
                        localField: 'kolor',
                        foreignField: 'id',
                        as:'kolor'
                    }
            },
            {$match: {'kolor.text': /^cz/}}

        ]).toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/7_2_1', function (req, res) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        var query = {kolor: /^cz/}
        db.collection('zegarekone').find(query).toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
