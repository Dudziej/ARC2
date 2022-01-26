import * as express from 'express';
import DB from './db'


const router = express.Router();

router.get('/MySQL/A_10_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQLA_10_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/A_20_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQLA_20_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/A_40_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQLA_40_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/A_20_2', async (req, res) => {
    try {
        let data = await DB.Data.MySQLA_20_2();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/A_20_3', async (req, res) => {
    try {
        let data = await DB.Data.MySQLA_20_3();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/A_20_4', async (req, res) => {
    try {
        let data = await DB.Data.MySQLA_20_4();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/A_20_5', async (req, res) => {
    try {
        let data = await DB.Data.MySQLA_20_5();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/DN_1_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQLDN_1_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/DN_10_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQLDN_10_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/DN_100_1', async (req, res) => {
    try {
        let data = await DB.Data.MySQLDN_100_1();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/DN_100_2', async (req, res) => {
    try {
        let data = await DB.Data.MySQLDN_100_2();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/DN_100_3', async (req, res) => {
    try {
        let data = await DB.Data.MySQLDN_100_3();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/DN_100_4', async (req, res) => {
    try {
        let data = await DB.Data.MySQLDN_100_4();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});
router.get('/MySQL/DN_100_5', async (req, res) => {
    try {
        let data = await DB.Data.MySQLDN_100_5();
        res.json(data)
    } catch(e) {
        res.sendStatus(500);
    }
});

export default {
    router
};