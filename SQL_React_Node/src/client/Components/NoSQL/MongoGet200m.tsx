import * as React from 'react';
import {useState, useEffect} from 'react';

const MongoGet200m = (props: AppProps) => {

    const [allWodoszczelne, setAllWodoszczelne] = useState([]);
    const [exTime, setExTime] = useState(0);

    async function getAnalogowe() {
        try {
            let start = Date.now();
            const res = await fetch('/mongo/getWodoszczelne200m');
            const data = await res.json();
            let end = Date.now();
            setAllWodoszczelne(data);
            setExTime(end - start)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='getAnalogoweAll'>
            <button className="btn btn-primary" onClick={getAnalogowe}>
                Pobierz wszystko
            </button>
            <p>Czas wykonania : {exTime} Millisekund</p>
            <p>Pobrane obiekty: {allWodoszczelne.length}</p>
        </div>
    )
        ;
};

interface AppProps {
}

export default MongoGet200m;