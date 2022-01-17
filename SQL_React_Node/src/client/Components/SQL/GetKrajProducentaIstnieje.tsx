import * as React from 'react';
import {useState, useEffect} from 'react';

const GetKrajProducentaIstnieje = (props: AppProps) => {

    const [allKrajProducentaIstnieje, setAllKrajProducentaIstnieje] = useState([]);
    const [exTime, setExTime] = useState(0);

    async function getKrajProducentaIstnieje() {
        try {
            let start = Date.now();
            const res = await fetch('/api/krajProducentaIstnieje');
            const data = await res.json();
            let end = Date.now();
            setAllKrajProducentaIstnieje(data);
            setExTime(end - start)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='getAllKrajProducentaIstnieje'>
            <button className="btn btn-primary" onClick={getKrajProducentaIstnieje}>
                Pobierz wszystko
            </button>
            <p>Czas wykonania : {exTime} Millisekund</p>
            <p>Pobrane obiekty: {allKrajProducentaIstnieje.length}</p>
        </div>
    );
};

interface AppProps {
}

export default GetKrajProducentaIstnieje;