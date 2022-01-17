import * as React from 'react';
import {useState, useEffect} from 'react';

const MongoGetAnalogowe = (props: AppProps) => {

    const [allAnalogowe, setAllAnalogowe] = useState([]);
    const [exTime, setExTime] = useState(0);

    async function getAnalogowe() {
        try {
            let start = Date.now();
            const res = await fetch('/mongo/getAnalogowe');
            const data = await res.json();
            let end = Date.now();
            setAllAnalogowe(data);
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
            <p>Pobrane obiekty: {allAnalogowe.length}</p>
        </div>
    )
        ;
};

interface AppProps {
}

export default MongoGetAnalogowe;