import * as React from 'react';
import {useState, useEffect} from 'react';

const MongoGetAll = (props: AppProps) => {

    const [allData, setAllData] = useState([]);
    const [exTime, setExTime] = useState(0);

    async function getData() {
        try {
            let start = Date.now();
            const res = await fetch('/mongo/getAll');
            const data = await res.json();
            let end = Date.now();
            setAllData(data);
            setExTime(end - start)
        } catch (error) {
            console.log(error);
        }
    }

    function hideAndShow() {
        var x = document.getElementById("allResults");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    return (
        <div className='getAll'>
        <button className="btn btn-primary" onClick={getData}>
            Pobierz wszystko
    </button>
    <p>Czas wykonania : {exTime} Millisekund</p>
    <p>Pobrane obiekty: {allData.length}</p>
    <button className="btn btn-warning" onClick={hideAndShow}>Pokaż wyniki</button>
    <div id='allResults' style={{display:'none'}}>
    <ul className='list-group'>
        {allData.map((data, idx) => {
                return <li key={idx} className='list-group-item'>{data.id}</li>
            })}
        </ul>
        </div>
        </div>
)
    ;
};

interface AppProps {
}

export default MongoGetAll;