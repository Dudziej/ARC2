import * as express from 'express';
import apiRouter from './routes';

const app = express();

app.use(express.static('public'));
app.use(apiRouter.router);

var MongoClient = require('mongodb').MongoClient

const uri ="mongodb://127.0.0.1:27017";

app.get('/mongo/A_10_1', function (req, res:any) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('Zegarek_A_10').aggregate([
            {$lookup:
                    {
                        from: 'Producent',
                        localField: 'producent',
                        foreignField: 'id',
                        as:'producent'
                    }
            },
            {$lookup:
                    {
                        from: 'Typ',
                        localField: 'typ',
                        foreignField: 'id',
                        as:'typ'
                    }
            },
            {$lookup:
                    {
                        from: 'Rodzaj',
                        localField: 'rodzaj',
                        foreignField: 'id',
                        as:'rodzaj'
                    }
            },
            {$lookup:
                    {
                        from: 'Wodoszczelnosc',
                        localField: 'wodoszczelnosc',
                        foreignField: 'id',
                        as:'wodoszczelnosc'
                    }
            },
            {$lookup:
                    {
                        from: 'Kolor',
                        localField: 'kolor',
                        foreignField: 'id',
                        as:'kolor'
                    }
            },
            {$lookup:
                    {
                        from: 'RodzajPaska',
                        localField: 'rodzaj_paska',
                        foreignField: 'id',
                        as:'rodzaj_paska'
                    }
            },
            {$lookup:
                    {
                        from: 'KsztaltKoperty',
                        localField: 'ksztalt_koperty',
                        foreignField: 'id',
                        as:'ksztalt_koperty'
                    }
            },
            {$lookup:
                    {
                        from: 'Kolor',
                        localField: 'kolor_tarczy',
                        foreignField: 'id',
                        as:'kolor_tarczy'
                    }
            },
            {$lookup:
                    {
                        from: 'Mechanizm',
                        localField: 'mechanizm',
                        foreignField: 'id',
                        as:'mechanizm'
                    }
            },
            {$lookup:
                    {
                        from: 'Zapiecie',
                        localField: 'zapiecie',
                        foreignField: 'id',
                        as:'zapiecie'
                    }
            },
        ]).toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/A_20_1', function (req, res:any) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('Zegarek_A_20').aggregate([
            {$lookup:
                    {
                        from: 'Producent',
                        localField: 'producent',
                        foreignField: 'id',
                        as:'producent'
                    }
            },
            {$lookup:
                    {
                        from: 'Typ',
                        localField: 'typ',
                        foreignField: 'id',
                        as:'typ'
                    }
            },
            {$lookup:
                    {
                        from: 'Rodzaj',
                        localField: 'rodzaj',
                        foreignField: 'id',
                        as:'rodzaj'
                    }
            },
            {$lookup:
                    {
                        from: 'Wodoszczelnosc',
                        localField: 'wodoszczelnosc',
                        foreignField: 'id',
                        as:'wodoszczelnosc'
                    }
            },
            {$lookup:
                    {
                        from: 'Kolor',
                        localField: 'kolor',
                        foreignField: 'id',
                        as:'kolor'
                    }
            },
            {$lookup:
                    {
                        from: 'RodzajPaska',
                        localField: 'rodzaj_paska',
                        foreignField: 'id',
                        as:'rodzaj_paska'
                    }
            },
            {$lookup:
                    {
                        from: 'KsztaltKoperty',
                        localField: 'ksztalt_koperty',
                        foreignField: 'id',
                        as:'ksztalt_koperty'
                    }
            },
            {$lookup:
                    {
                        from: 'Kolor',
                        localField: 'kolor_tarczy',
                        foreignField: 'id',
                        as:'kolor_tarczy'
                    }
            },
            {$lookup:
                    {
                        from: 'Mechanizm',
                        localField: 'mechanizm',
                        foreignField: 'id',
                        as:'mechanizm'
                    }
            },
            {$lookup:
                    {
                        from: 'Zapiecie',
                        localField: 'zapiecie',
                        foreignField: 'id',
                        as:'zapiecie'
                    }
            },
            {$lookup:
                    {
                        from: 'MaterialKoperty',
                        localField: 'material_koperty',
                        foreignField: 'id',
                        as:'material_koperty'
                    }
            },
            {$lookup:
                    {
                        from: 'RodzajSzkla',
                        localField: 'rodzaj_szkla',
                        foreignField: 'id',
                        as:'rodzaj_szkla'
                    }
            },
            {$lookup:
                    {
                        from: 'Gwarancja',
                        localField: 'gwarancja',
                        foreignField: 'id',
                        as:'gwarancja'
                    }
            },
            {$lookup:
                    {
                        from: 'CechyDodatkowe',
                        localField: 'cechy_dodatkowe',
                        foreignField: 'id',
                        as:'cechy_dodatkowe'
                    }
            },
            {$lookup:
                    {
                        from: 'Funkcje',
                        localField: 'funkcje',
                        foreignField: 'id',
                        as:'funkcje'
                    }
            },
            {$lookup:
                    {
                        from: 'Kolor',
                        localField: 'kolor_paska',
                        foreignField: 'id',
                        as:'kolor_paska'
                    }
            },
            {$lookup:
                    {
                        from: 'Styl',
                        localField: 'styl',
                        foreignField: 'id',
                        as:'styl'
                    }
            },
            {$lookup:
                    {
                        from: 'Popularne',
                        localField: 'popularne',
                        foreignField: 'id',
                        as:'popularne'
                    }
            },
            {$lookup:
                    {
                        from: 'KrajProducenta',
                        localField: 'kraj_producenta',
                        foreignField: 'id',
                        as:'kraj_producenta'
                    }
            },
            {$lookup:
                    {
                        from: 'Wzor',
                        localField: 'wzor',
                        foreignField: 'id',
                        as:'wzor'
                    }
            },
        ]).toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/A_40_1', function (req, res:any) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('Zegarek_A_20').aggregate([
            {$lookup:
                    {
                        from: 'Producent',
                        localField: 'producent',
                        foreignField: 'id',
                        as:'producent'
                    }
            },
            {$lookup:
                    {
                        from: 'Typ',
                        localField: 'typ',
                        foreignField: 'id',
                        as:'typ'
                    }
            },
            {$lookup:
                    {
                        from: 'Rodzaj',
                        localField: 'rodzaj',
                        foreignField: 'id',
                        as:'rodzaj'
                    }
            },
            {$lookup:
                    {
                        from: 'Wodoszczelnosc',
                        localField: 'wodoszczelnosc',
                        foreignField: 'id',
                        as:'wodoszczelnosc'
                    }
            },
            {$lookup:
                    {
                        from: 'Kolor',
                        localField: 'kolor',
                        foreignField: 'id',
                        as:'kolor'
                    }
            },
            {$lookup:
                    {
                        from: 'RodzajPaska',
                        localField: 'rodzaj_paska',
                        foreignField: 'id',
                        as:'rodzaj_paska'
                    }
            },
            {$lookup:
                    {
                        from: 'KsztaltKoperty',
                        localField: 'ksztalt_koperty',
                        foreignField: 'id',
                        as:'ksztalt_koperty'
                    }
            },
            {$lookup:
                    {
                        from: 'Kolor',
                        localField: 'kolor_tarczy',
                        foreignField: 'id',
                        as:'kolor_tarczy'
                    }
            },
            {$lookup:
                    {
                        from: 'Mechanizm',
                        localField: 'mechanizm',
                        foreignField: 'id',
                        as:'mechanizm'
                    }
            },
            {$lookup:
                    {
                        from: 'Zapiecie',
                        localField: 'zapiecie',
                        foreignField: 'id',
                        as:'zapiecie'
                    }
            },
            {$lookup:
                    {
                        from: 'MaterialKoperty',
                        localField: 'material_koperty',
                        foreignField: 'id',
                        as:'material_koperty'
                    }
            },
            {$lookup:
                    {
                        from: 'RodzajSzkla',
                        localField: 'rodzaj_szkla',
                        foreignField: 'id',
                        as:'rodzaj_szkla'
                    }
            },
            {$lookup:
                    {
                        from: 'Gwarancja',
                        localField: 'gwarancja',
                        foreignField: 'id',
                        as:'gwarancja'
                    }
            },
            {$lookup:
                    {
                        from: 'CechyDodatkowe',
                        localField: 'cechy_dodatkowe',
                        foreignField: 'id',
                        as:'cechy_dodatkowe'
                    }
            },
            {$lookup:
                    {
                        from: 'Funkcje',
                        localField: 'funkcje',
                        foreignField: 'id',
                        as:'funkcje'
                    }
            },
            {$lookup:
                    {
                        from: 'Kolor',
                        localField: 'kolor_paska',
                        foreignField: 'id',
                        as:'kolor_paska'
                    }
            },
            {$lookup:
                    {
                        from: 'Styl',
                        localField: 'styl',
                        foreignField: 'id',
                        as:'styl'
                    }
            },
            {$lookup:
                    {
                        from: 'Popularne',
                        localField: 'popularne',
                        foreignField: 'id',
                        as:'popularne'
                    }
            },
            {$lookup:
                    {
                        from: 'KrajProducenta',
                        localField: 'kraj_producenta',
                        foreignField: 'id',
                        as:'kraj_producenta'
                    }
            },
            {$lookup:
                    {
                        from: 'Wzor',
                        localField: 'wzor',
                        foreignField: 'id',
                        as:'wzor'
                    }
            },
            {$lookup:
                    {
                        from: 'Producent',
                        localField: 'producent2',
                        foreignField: 'id',
                        as:'producent2'
                    }
            },
            {$lookup:
                    {
                        from: 'Typ',
                        localField: 'typ2',
                        foreignField: 'id',
                        as:'typ2'
                    }
            },
            {$lookup:
                    {
                        from: 'Rodzaj',
                        localField: 'rodzaj2',
                        foreignField: 'id',
                        as:'rodzaj2'
                    }
            },
            {$lookup:
                    {
                        from: 'Wodoszczelnosc',
                        localField: 'wodoszczelnosc2',
                        foreignField: 'id',
                        as:'wodoszczelnosc2'
                    }
            },
            {$lookup:
                    {
                        from: 'Kolor',
                        localField: 'kolor2',
                        foreignField: 'id',
                        as:'kolor2'
                    }
            },
            {$lookup:
                    {
                        from: 'RodzajPaska',
                        localField: 'rodzaj_paska2',
                        foreignField: 'id',
                        as:'rodzaj_paska2'
                    }
            },
            {$lookup:
                    {
                        from: 'KsztaltKoperty',
                        localField: 'ksztalt_koperty2',
                        foreignField: 'id',
                        as:'ksztalt_koperty2'
                    }
            },
            {$lookup:
                    {
                        from: 'Kolor',
                        localField: 'kolor_tarczy2',
                        foreignField: 'id',
                        as:'kolor_tarczy2'
                    }
            },
            {$lookup:
                    {
                        from: 'Mechanizm',
                        localField: 'mechanizm2',
                        foreignField: 'id',
                        as:'mechanizm2'
                    }
            },
            {$lookup:
                    {
                        from: 'Zapiecie',
                        localField: 'zapiecie2',
                        foreignField: 'id',
                        as:'zapiecie2'
                    }
            },
            {$lookup:
                    {
                        from: 'MaterialKoperty',
                        localField: 'material_koperty2',
                        foreignField: 'id',
                        as:'material_koperty2'
                    }
            },
            {$lookup:
                    {
                        from: 'RodzajSzkla',
                        localField: 'rodzaj_szkla2',
                        foreignField: 'id',
                        as:'rodzaj_szkla2'
                    }
            },
            {$lookup:
                    {
                        from: 'Gwarancja',
                        localField: 'gwarancja2',
                        foreignField: 'id',
                        as:'gwarancja2'
                    }
            },
            {$lookup:
                    {
                        from: 'CechyDodatkowe',
                        localField: 'cechy_dodatkowe2',
                        foreignField: 'id',
                        as:'cechy_dodatkowe2'
                    }
            },
            {$lookup:
                    {
                        from: 'Funkcje',
                        localField: 'funkcje2',
                        foreignField: 'id',
                        as:'funkcje2'
                    }
            },
            {$lookup:
                    {
                        from: 'Kolor',
                        localField: 'kolor_paska2',
                        foreignField: 'id',
                        as:'kolor_paska2'
                    }
            },
            {$lookup:
                    {
                        from: 'Styl',
                        localField: 'styl2',
                        foreignField: 'id',
                        as:'styl2'
                    }
            },
            {$lookup:
                    {
                        from: 'Popularne',
                        localField: 'popularne2',
                        foreignField: 'id',
                        as:'popularne2'
                    }
            },
            {$lookup:
                    {
                        from: 'KrajProducenta',
                        localField: 'kraj_producenta2',
                        foreignField: 'id',
                        as:'kraj_producenta2'
                    }
            },
            {$lookup:
                    {
                        from: 'Wzor',
                        localField: 'wzor2',
                        foreignField: 'id',
                        as:'wzor2'
                    }
            },
        ]).toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/DN_1_1', function (req, res:any) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('Zegarek_DN_1').find().toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/DN_10_1', function (req, res:any) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('Zegarek_DN_10').find().toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/DN_100_1', function (req, res:any) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('Zegarek_DN_100').find().toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/A_20_2', function (req, res:any) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('Zegarek_A_20').aggregate([
            {$lookup:
                    {
                        from: 'Kolor',
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

app.get('/mongo/DN_100_2', function (req, res:any) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        var query = {kolor: /^cz/}
        db.collection('Zegarek_DN_100').find(query).toArray(function (err, result:any) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/A_20_3', function (req, res:any) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('Zegarek_A_20').aggregate([
            {$lookup:
                    {
                        from: 'Kolor',
                        localField: 'kolor',
                        foreignField: 'id',
                        as:'kolor'
                    }
            },
            {$sort: {'kolor.text': 1}}
        ]).toArray(function (err, result:any) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/DN_100_3', function (req, res:any) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('Zegarek_DN_100').find({ "kolor": { "$exists": true } }).sort({'kolor': 1}).toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/A_20_4', function (req, res:any) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('Zegarek_A_20').aggregate([
            {$lookup:
                    {
                        from: 'Wzor',
                        localField: 'wzor',
                        foreignField: 'id',
                        as:'wzor'
                    }
            },
            {$group : {_id : "$wzor"}},
        ]).toArray(function (err, result:any) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/DN_100_4', function (req, res:any) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('Zegarek_DN_100').aggregate([{$group : {_id : "$wzor"}}]).toArray(function (err, result) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/A_20_5', function (req, res:any) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        db.collection('Zegarek_A_20').aggregate([
            {$lookup:
                    {
                        from: 'Kolor',
                        localField: 'kolor',
                        foreignField: 'id',
                        as:'kolor'
                    }
            },
            {$lookup:
                    {
                        from: 'Wzor',
                        localField: 'wzor',
                        foreignField: 'id',
                        as:'wzor'
                    }
            },
            {$match:
                    {$and:
                            [
                                {'wzor.text':'logo'},
                                {$or:[{'kolor.text':{$ne:'czarny'}}, {'kolor.text':{$ne:'czarne'}}]}
                            ]

                    }}

        ]).toArray(function (err, result:any) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

app.get('/mongo/DN_100_5', function (req, res:any) {
    MongoClient.connect(uri, function (err, client) {
        if (err) throw err
        var db = client.db('arc')
        var query = {
            $and: [
                {wzor: 'logo'},
                {$or: [{kolor:{$ne:'czarny'}}, {kolor:{$ne:'czarne'}}]}
            ]
        }
        db.collection('Zegarek_DN_100').find(query).toArray(function (err, result:any) {
            if (err) throw err
            res.sendStatus(200)
        })
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
