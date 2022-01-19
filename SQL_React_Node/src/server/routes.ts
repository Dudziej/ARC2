import * as express from 'express';
import DB from './db'


const router = express.Router();

router.get('/MySQL/1_1_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQL1_1_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/1_2_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQL1_2_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/2_1_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQL2_1_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/2_2_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQL2_2_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/2_3_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQL2_3_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/3_1_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQL3_1_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/3_2_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQL3_2_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/4_1_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQL4_1_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/4_2_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQL4_2_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/5_1_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQL5_1_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/5_2_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQL5_2_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/6_1_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQL6_1_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/6_2_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQL6_2_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/7_1_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQL7_1_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/7_2_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQL7_2_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});

export default {
    router
};