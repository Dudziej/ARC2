import * as React from 'react';
import {useState, useEffect} from 'react';

const GetAll = (props: AppProps) => {

    const [allData, setAllData] = useState([]);
    const [exTime, setExTime] = useState(0);

    async function getAllData() {
        try {
            let start = Date.now();
            const res = await fetch('/api/allData');
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
            <button className="btn btn-primary" onClick={getAllData}>
                Pobierz wszystko
            </button>
            <p>Czas wykonania : {exTime} Millisekund</p>
        </div>
    )
        ;
};

interface AppProps {
}

export default GetAll;