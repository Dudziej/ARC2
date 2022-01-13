import * as React from 'react';
import {useState, useEffect} from 'react';

const GetProducentLorus = (props: AppProps) => {

    const [allProducentLorus, setAllProducentLorus] = useState([]);
    const [exTime, setExTime] = useState(0);

    async function getWodoszczelne200m() {
        try {
            let start = Date.now();
            const res = await fetch('/api/producentLorus');
            const data = await res.json();
            let end = Date.now();
            setAllProducentLorus(data);
            setExTime(end - start)
        } catch (error) {
            console.log(error);
        }
    }

    function hideAndShow() {
        var x = document.getElementById("allProducentLorus");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    return (
        <div className='getAllProducentLorus'>
            <button onClick={getWodoszczelne200m}>
                Pobierz wszystko
            </button>
            <p>Czas wykonania : {exTime} Millisekund</p>
            <p>Pobrane obiekty: {allProducentLorus.length}</p>
            <button onClick={hideAndShow}>Pokaż wyniki</button>
            <div id='allProducentLorus' style={{display:'none'}}>
                <ul className='list-group'>
                    {allProducentLorus.map((data, idx) => {
                        return <li key={idx} className='list-group-item'>{data.id} {data.Producent}</li>
                    })}
                </ul>
            </div>
        </div>
    )
        ;
};

interface AppProps {
}

export default GetProducentLorus;