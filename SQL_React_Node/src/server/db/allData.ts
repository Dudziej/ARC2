import { con } from './index';

export const all = async () => {
    return new Promise((resolve,reject) => {

        con.query('SELECT * from data', (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export default {
    all
}