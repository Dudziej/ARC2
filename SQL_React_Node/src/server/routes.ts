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

export default router;