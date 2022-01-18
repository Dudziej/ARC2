import * as React from 'react';
import {useState, useEffect} from 'react';

const GetWodoszczelne200mAll = (props: AppProps) => {

    const [allWodoszczelne200m, setAllWodoszczelne200m] = useState([]);
    const [exTime, setExTime] = useState(0);

    async function getWodoszczelne200m() {
        try {
            let start = Date.now();
            const res = await fetch('/api/wodoszczelne200m');
            const data = await res.json();
            let end = Date.now();
            setAllWodoszczelne200m(data);
            setExTime(end - start)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='getAllWodoszczelne200m'>
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

export default GetWodoszczelne200mAll;