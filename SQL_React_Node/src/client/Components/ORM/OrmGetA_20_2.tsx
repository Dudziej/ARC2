import * as React from 'react';
import {useState, useEffect} from 'react';

const OrmGetA_20_2 = (props: AppProps) => {

    const [exTime, setExTime] = useState(0);

    async function getData() {
        try {
            let start = Date.now();
            const res = await fetch('http://127.0.0.1:8000/A_20_2');
            const data = await res.status===200;
            let end = Date.now();

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

export default OrmGetA_20_2;