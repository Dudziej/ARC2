import * as React from 'react';
import {useState, useEffect} from 'react';

const IdParzyste = (props: AppProps) => {

    const [allIdParzyste, setAllIdParzyste] = useState([]);
    const [exTime, setExTime] = useState(0);

    async function getData() {
        try {
            let start = Date.now();
            const res = await fetch('/api/idParzyste');
            const data = await res.json();
            let end = Date.now();
            setAllIdParzyste(data);
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
    );
};

interface AppProps {
}

export default IdParzyste;