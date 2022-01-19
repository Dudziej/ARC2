import * as React from 'react';
import {useState, useEffect} from 'react';

const MySQL5_2_1 = (props: AppProps) => {

    const [data, setData] = useState([]);
    const [exTime, setExTime] = useState(0);

    async function getData() {
        try {
            let start = Date.now();
            const res = await fetch('/MySQL/5_2_1');
            const data = await res.json();
            let end = Date.now();
            setData(data);
            setExTime(end - start)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='MySQL'>
            <button className="btn btn-primary" onClick={getData}>
                Pobierz wszystko
            </button>
            <p>Czas wykonania : {exTime} Millisekund</p>
            <p>Pobrane obiekty : {data.length}</p>
        </div>
    )
        ;
};

interface AppProps {
}

export default MySQL5_2_1;