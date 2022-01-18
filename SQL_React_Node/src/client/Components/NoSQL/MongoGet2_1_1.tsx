import * as React from 'react';
import {useState, useEffect} from 'react';

const MongoGet2_1_1 = (props: AppProps) => {

    const [allData, setAllData] = useState([]);
    const [exTime, setExTime] = useState(0);

    async function getData() {
        try {
            let start = Date.now();
            const res = await fetch('/mongo/2_1_1');
            const data = await res.json();
            let end = Date.now();
            setAllData(data);
            setExTime(end - start)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='getAll'>
        <button className="btn btn-primary" onClick={getData}>
            Pobierz wszystko
    </button>
    <p>Czas wykonania : {exTime} Millisekund</p>
        </div>
)
    ;
};

interface AppProps {
}

export default MongoGet2_1_1;