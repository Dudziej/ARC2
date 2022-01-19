import { con } from './index';

export const MySQL1_1_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT * FROM data_faker", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const MySQL1_2_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT DISTINCT Zegarek.id AS id, CechyDodatkowe.text AS CechyDodatkowe, Funkcje.text AS Funkcje, Gwarancja.text AS Gwarancja, Kolor.text AS Kolor, KrajProducenta.text AS KrajProducenta, KsztaltKoperty.text AS KsztaltKoperty, LiniaZegarkow.text AS LiniaZegarkow, MaterialKoperty.text AS MaterialKoperty, Mechanizm.text AS Mechanizm, Popularne.text AS Popularne, Producent.text AS Producent, Rodzaj.text AS Rodzaj, RodzajPaska.text AS RodzajPaska, RodzajSzkla.text AS RodzajSzkla, Styl.text AS Styl, Typ.text AS Typ, Wodoszczelnosc.text AS Wodoszczelnosc, Wzor.text AS Wzor, Zapiecie.text AS Zapiecie FROM Zegarek LEFT JOIN CechyDodatkowe ON Zegarek.cechy_dodatkowe=CechyDodatkowe.id LEFT JOIN Funkcje ON Zegarek.funkcje=Funkcje.id LEFT JOIN Gwarancja ON Zegarek.gwarancja=Gwarancja.id LEFT JOIN Kolor ON Zegarek.kolor=Kolor.id LEFT JOIN KrajProducenta ON Zegarek.kraj_producenta=KrajProducenta.id LEFT JOIN KsztaltKoperty ON Zegarek.ksztalt_koperty=KsztaltKoperty.id LEFT JOIN LiniaZegarkow ON Zegarek.linia_zegarkow=LiniaZegarkow.id LEFT JOIN MaterialKoperty ON Zegarek.material_koperty=MaterialKoperty.id LEFT JOIN Mechanizm ON Zegarek.mechanizm=Mechanizm.id LEFT JOIN Popularne ON Zegarek.popularne=Popularne.id LEFT JOIN Producent ON Zegarek.producent=Producent.id LEFT JOIN Rodzaj ON Zegarek.rodzaj=Rodzaj.id LEFT JOIN RodzajPaska ON Zegarek.rodzaj_paska=RodzajPaska.id LEFT JOIN RodzajSzkla ON Zegarek.rodzaj_szkla=RodzajSzkla.id LEFT JOIN Styl ON Zegarek.styl=Styl.id LEFT JOIN Typ ON Zegarek.typ=Typ.id LEFT JOIN Wodoszczelnosc ON Zegarek.wodoszczelnosc=Wodoszczelnosc.id LEFT JOIN Wzor ON Zegarek.wzor=Wzor.id LEFT JOIN Zapiecie ON Zegarek.id=Zapiecie.id", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const MySQL2_1_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT id from Wzor WHERE text LIKE 'logo'", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const MySQL2_2_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT Zegarek.id AS id,Wzor.text AS wzor FROM Zegarek INNER JOIN Wzor ON Zegarek.wzor=Wzor.id WHERE Wzor.text LIKE 'logo'", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const MySQL2_3_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT * FROM data_faker WHERE wzor LIKE 'logo'", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const MySQL3_1_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT text FROM Wzor", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const MySQL3_2_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT DISTINCT wzor FROM data_faker", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const MySQL4_1_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT DISTINCT Zegarek.id AS id, Wzor.text AS wzor, Kolor.text AS kolor FROM Zegarek INNER JOIN Wzor ON Zegarek.wzor=Wzor.id AND Wzor.text LIKE 'logo' INNER JOIN Kolor ON Zegarek.kolor=Kolor.id AND Kolor.text LIKE 'czarne' OR 'czarny'", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const MySQL4_2_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT * from data_faker WHERE wzor LIKE 'logo' AND (kolor LIKE 'czarny' OR kolor LIKE 'czarne')", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const MySQL5_1_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT DISTINCT Zegarek.id AS id, Wzor.text AS wzor, Kolor.text AS kolor FROM Zegarek INNER JOIN Wzor ON Zegarek.wzor=Wzor.id AND Wzor.text LIKE 'logo' INNER JOIN Kolor ON Zegarek.kolor=Kolor.id AND Kolor.text NOT LIKE 'czarne' OR 'czarny'", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const MySQL5_2_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT * from data_faker WHERE wzor LIKE 'logo' AND (kolor NOT LIKE 'czarny' AND kolor NOT LIKE 'czarne')", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const MySQL6_1_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT DISTINCT * from Zegarek INNER JOIN Styl ON Zegarek.styl=Styl.id AND Styl.text LIKE 'klasyczne' INNER JOIN Rodzaj ON Zegarek.rodzaj=Rodzaj.id AND Rodzaj.text LIKE 'analogowe' INNER JOIN Mechanizm ON Zegarek.mechanizm=Mechanizm.id AND Mechanizm.text LIKE 'kwarcowy' INNER JOIN KrajProducenta ON Zegarek.kraj_producenta=KrajProducenta.id AND KrajProducenta.text LIKE 'wlochy' INNER JOIN Kolor ON Zegarek.kolor=Kolor.id ORDER BY Kolor.text ASC", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const MySQL6_2_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT * from data_faker WHERE styl LIKE 'klasyczne' AND rodzaj LIKE 'analogowe' AND mechanizm LIKE 'kwarcowy' AND kraj_producenta LIKE 'wlochy' ORDER BY kolor ASC", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const MySQL7_1_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT DISTINCT * FROM Zegarek INNER JOIN Kolor ON Zegarek.kolor=Kolor.id AND Kolor.text LIKE 'cz%'", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const MySQL7_2_1 = async () => {
    return new Promise((resolve,reject) => {

        con.query("SELECT * FROM data_faker WHERE kolor LIKE 'cz%'", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export default {
    MySQL1_1_1,
    MySQL1_2_1,
    MySQL2_1_1,
    MySQL2_2_1,
    MySQL2_3_1,
    MySQL3_1_1,
    MySQL3_2_1,
    MySQL4_1_1,
    MySQL4_2_1,
    MySQL5_1_1,
    MySQL5_2_1,
    MySQL6_1_1,
    MySQL6_2_1,
    MySQL7_1_1,
    MySQL7_2_1

}