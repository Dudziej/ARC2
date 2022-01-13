import * as mysql from 'mysql';
import config from '../config';
import Data from './allData'

export const con = mysql.createConnection(config.mysql);

con.connect(err => {
    if(err) console.log(err);
});

export default {
    Data
}

