import * as React from 'react';
import {useState, useEffect} from 'react';

const MySQL6_1_1 = (props: AppProps) => {

    const [data, setData] = useState(0);
    const [exTime, setExTime] = useState(0);

    async function getData() {
        try {
            let start = Date.now();
            const res = await fetch('/MySQL/6_1_1');
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
        </div>
    )
        ;
};

interface AppProps {
}

export default MySQL6_1_1;