import { con } from './index';

export const MySQLA_10_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT DISTINCT * FROM Zegarek_A_10 LEFT JOIN producent ON Zegarek_A_10.producent=producent.id LEFT JOIN typ ON Zegarek_A_10.typ=typ.id LEFT JOIN rodzaj ON Zegarek_A_10.rodzaj=rodzaj.id LEFT JOIN wodoszczelnosc ON Zegarek_A_10.wodoszczelnosc=wodoszczelnosc.id LEFT JOIN kolor ON Zegarek_A_10.kolor=kolor.id LEFT JOIN rodzajpaska ON Zegarek_A_10.rodzaj_paska=rodzajpaska.id LEFT JOIN ksztaltkoperty ON Zegarek_A_10.ksztalt_koperty=ksztaltkoperty.id LEFT JOIN mechanizm ON Zegarek_A_10.mechanizm=mechanizm.id", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(200);
        });
    });
}

export const MySQLA_20_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT DISTINCT * FROM Zegarek_A_20 LEFT JOIN producent ON Zegarek_A_20.producent=producent.id LEFT JOIN typ ON Zegarek_A_20.typ=typ.id LEFT JOIN rodzaj ON Zegarek_A_20.rodzaj=rodzaj.id LEFT JOIN wodoszczelnosc ON Zegarek_A_20.wodoszczelnosc=wodoszczelnosc.id LEFT JOIN kolor ON Zegarek_A_20.kolor=kolor.id LEFT JOIN rodzajpaska ON Zegarek_A_20.rodzaj_paska=rodzajpaska.id LEFT JOIN ksztaltkoperty ON Zegarek_A_20.ksztalt_koperty=ksztaltkoperty.id LEFT JOIN mechanizm ON Zegarek_A_20.mechanizm=mechanizm.id LEFT JOIN materialkoperty ON Zegarek_A_20.material_koperty=materialkoperty.id LEFT JOIN rodzajszkla ON Zegarek_A_20.rodzaj_szkla=rodzajszkla.id LEFT JOIN gwarancja ON Zegarek_A_20.gwarancja=gwarancja.id LEFT JOIN cechydodatkowe ON Zegarek_A_20.cechy_dodatkowe=cechydodatkowe.id LEFT JOIN funkcje ON Zegarek_A_20.funkcje=funkcje.id LEFT JOIN styl ON Zegarek_A_20.styl=styl.id LEFT JOIN popularne ON Zegarek_A_20.popularne=popularne.id LEFT JOIN krajproducenta ON Zegarek_A_20.kraj_producenta=krajproducenta.id LEFT JOIN wzor ON Zegarek_A_20.wzor=wzor.id", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(200);
        });
    });
}

export const MySQLA_40_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT DISTINCT * FROM Zegarek_A_40 LEFT JOIN producent ON Zegarek_A_40.producent=producent.id LEFT JOIN typ ON Zegarek_A_40.typ=typ.id LEFT JOIN rodzaj ON Zegarek_A_40.rodzaj=rodzaj.id LEFT JOIN wodoszczelnosc ON Zegarek_A_40.wodoszczelnosc=wodoszczelnosc.id LEFT JOIN kolor ON Zegarek_A_40.kolor=kolor.id LEFT JOIN rodzajpaska ON Zegarek_A_40.rodzaj_paska=rodzajpaska.id LEFT JOIN ksztaltkoperty ON Zegarek_A_40.ksztalt_koperty=ksztaltkoperty.id LEFT JOIN mechanizm ON Zegarek_A_40.mechanizm=mechanizm.id LEFT JOIN materialkoperty ON Zegarek_A_40.material_koperty=materialkoperty.id LEFT JOIN rodzajszkla ON Zegarek_A_40.rodzaj_szkla=rodzajszkla.id LEFT JOIN gwarancja ON Zegarek_A_40.gwarancja=gwarancja.id LEFT JOIN cechydodatkowe ON Zegarek_A_40.cechy_dodatkowe=cechydodatkowe.id LEFT JOIN funkcje ON Zegarek_A_40.funkcje=funkcje.id LEFT JOIN styl ON Zegarek_A_40.styl=styl.id LEFT JOIN popularne ON Zegarek_A_40.popularne=popularne.id LEFT JOIN krajproducenta ON Zegarek_A_40.kraj_producenta=krajproducenta.id LEFT JOIN wzor ON Zegarek_A_40.wzor=wzor.id LEFT JOIN producent2 ON Zegarek_A_40.producent2=producent2.id LEFT JOIN typ2 ON Zegarek_A_40.typ2=typ2.id LEFT JOIN rodzaj2 ON Zegarek_A_40.rodzaj2=rodzaj2.id LEFT JOIN wodoszczelnosc2 ON Zegarek_A_40.wodoszczelnosc2=wodoszczelnosc2.id LEFT JOIN kolor2 ON Zegarek_A_40.kolor2=kolor2.id LEFT JOIN rodzajpaska2 ON Zegarek_A_40.rodzaj_paska2=rodzajpaska2.id LEFT JOIN ksztaltkoperty2 ON Zegarek_A_40.ksztalt_koperty2=ksztaltkoperty2.id LEFT JOIN mechanizm2 ON Zegarek_A_40.mechanizm2=mechanizm2.id LEFT JOIN materialkoperty2 ON Zegarek_A_40.material_koperty2=materialkoperty2.id LEFT JOIN rodzajszkla2 ON Zegarek_A_40.rodzaj_szkla2=rodzajszkla2.id LEFT JOIN gwarancja2 ON Zegarek_A_40.gwarancja2=gwarancja2.id LEFT JOIN cechydodatkowe2 ON Zegarek_A_40.cechy_dodatkowe2=cechydodatkowe2.id LEFT JOIN funkcje2 ON Zegarek_A_40.funkcje2=funkcje2.id LEFT JOIN styl2 ON Zegarek_A_40.styl2=styl2.id LEFT JOIN popularne2 ON Zegarek_A_40.popularne2=popularne2.id LEFT JOIN krajproducenta2 ON Zegarek_A_40.kraj_producenta2=krajproducenta2.id LEFT JOIN wzor2 ON Zegarek_A_40.wzor2=wzor2.id", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(200);
        });
    });
}

export const MySQLA_20_2 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT DISTINCT * FROM Zegarek_A_20 INNER JOIN kolor ON Zegarek_A_20.kolor=kolor.id AND kolor.text LIKE 'cz%'", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(200);
        });
    });
}

export const MySQLA_20_3 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT DISTINCT * FROM Zegarek_A_20 INNER JOIN kolor ON Zegarek_A_20.kolor=kolor.id ORDER BY kolor.text ASC", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(200);
        });
    });
}

export const MySQLA_20_4 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT text FROM wzor", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(200);
        });
    });
}

export const MySQLA_20_5 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT Zegarek_A_20.id AS id, wzor.text AS wzor, kolor.text AS kolor FROM Zegarek_A_20 INNER JOIN wzor ON Zegarek_A_20.wzor=wzor.id AND wzor.text LIKE 'logo' INNER JOIN kolor ON Zegarek_A_20.kolor=kolor.id AND kolor.text NOT LIKE 'czarne' OR 'czarny'", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(200);
        });
    });
}

export const MySQLDN_1_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT * FROM Zegarek_DN_1", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(200);
        });
    });
}

export const MySQLDN_10_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT * FROM Zegarek_DN_10", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(200);
        });
    });
}

export const MySQLDN_100_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT * FROM Zegarek_DN_100", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(200);
        });
    });
}

export const MySQLDN_100_2 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT * FROM Zegarek_DN_100 WHERE kolor LIKE 'cz%'", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(200);
        });
    });
}

export const MySQLDN_100_3 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT * FROM Zegarek_DN_100 ORDER BY kolor ASC", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(200);
        });
    });
}

export const MySQLDN_100_4 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT DISTINCT wzor FROM Zegarek_DN_100", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(200);
        });
    });
}

export const MySQLDN_100_5 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT * FROM Zegarek_DN_100 WHERE wzor LIKE 'logo' AND (kolor NOT LIKE 'czarny' AND kolor NOT LIKE 'czarne')", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(200);
        });
    });
}

export default {
    MySQLA_10_1,
    MySQLA_20_1,
    MySQLA_40_1,
    MySQLA_20_2,
    MySQLA_20_3,
    MySQLA_20_4,
    MySQLA_20_5,
    MySQLDN_1_1,
    MySQLDN_10_1,
    MySQLDN_100_1,
    MySQLDN_100_2,
    MySQLDN_100_3,
    MySQLDN_100_4,
    MySQLDN_100_5

}