import * as express from 'express';
import DB from './db'


const router = express.Router();

router.get('/api/allData', async (req, res) => {
    try {
        let data = await DB.Data.all();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});

router.get('/api/analogowe', async (req, res) => {
    try {
        let data = await DB.Data.analogowe();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});

router.get('/api/wodoszczelne200m', async (req, res) => {
    try {
        let data = await DB.Data.wodoszczelność();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});

router.get('/api/producentLorus', async (req, res) => {
    try {
        let data = await DB.Data.producent();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});

router.get('/api/krajProducentaIstnieje', async (req, res) => {
    try {
        let data = await DB.Data.kraj_producenta();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});

router.get('/api/idParzyste', async (req, res) => {
    try {
        let data = await DB.Data.id_parzyste();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});

export default {
    router
};