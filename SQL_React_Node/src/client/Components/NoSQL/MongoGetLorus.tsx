import * as React from 'react';
import {useState, useEffect} from 'react';

const MongoGetProducentLorus = (props: AppProps) => {

    const [allProducentLorus, setAllProducentLorus] = useState([]);
    const [exTime, setExTime] = useState(0);

    async function getWodoszczelne200m() {
        try {
            let start = Date.now();
            const res = await fetch('/mongo/getLorus');
            const data = await res.json();
            let end = Date.now();
            setAllProducentLorus(data);
            setExTime(end - start)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='getAllProducentLorus'>
            <button className="btn btn-primary" onClick={getWodoszczelne200m}>
                Pobierz wszystko
            </button>
            <p>Czas wykonania : {exTime} Millisekund</p>
            <p>Pobrane obiekty: {allProducentLorus.length}</p>
        </div>
    )
        ;
};

interface AppProps {
}

export default MongoGetProducentLorus;