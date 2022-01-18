import * as React from 'react';
import {useState, useEffect} from 'react';

const GetProducentLorus = (props: AppProps) => {

    const [allProducentLorus, setAllProducentLorus] = useState([]);
    const [exTime, setExTime] = useState(0);

    async function getWodoszczelne200m() {
        try {
            let start = Date.now();
            const res = await fetch('/api/producentLorus');
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
        </div>
    )
        ;
};

interface AppProps {
}

export default GetProducentLorus;