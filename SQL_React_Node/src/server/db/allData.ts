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

export const analogowe = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT * from data WHERE Rodzaj = 'Analogowe'", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const wodoszczelność = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT * from data WHERE Wodoszczelność = '200m'", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const producent = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT * from data WHERE Producent = 'Lorus > Zegarki Lorus'", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const kraj_producenta = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT * from data WHERE LENGTH(Wzór) > 0", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const id_parzyste = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT * from data WHERE MOD(id,2) = 0", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export default {
    all,
    analogowe,
    wodoszczelność,
    producent,
    kraj_producenta,
    id_parzyste
}