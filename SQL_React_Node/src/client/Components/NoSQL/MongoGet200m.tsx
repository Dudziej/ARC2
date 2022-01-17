import * as React from 'react';
import {useState, useEffect} from 'react';

const MongoGet200m = (props: AppProps) => {

    const [allWodoszczelne, setAllWodoszczelne] = useState([]);
    const [exTime, setExTime] = useState(0);

    async function getAnalogowe() {
        try {
            let start = Date.now();
            const res = await fetch('/mongo/getWodoszczelne200m');
            const data = await res.json();
            let end = Date.now();
            setAllWodoszczelne(data);
            setExTime(end - start)
        } catch (error) {
            console.log(error);
        }
    }

    function hideAndShow() {
        var x = document.getElementById("allAnalogowe");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    return (
        <div className='getAnalogoweAll'>
            <button className="btn btn-primary" onClick={getAnalogowe}>
                Pobierz wszystko
            </button>
            <p>Czas wykonania : {exTime} Millisekund</p>
            <p>Pobrane obiekty: {allWodoszczelne.length}</p>
            <button className="btn btn-warning" onClick={hideAndShow}>Pokaż wyniki</button>
            <div id='allAnalogowe' style={{display:'none'}}>
                <ul className='list-group'>
                    {allWodoszczelne.map((data, idx) => {
                        return <li key={idx} className='list-group-item'>{data.id} {data.Rodzaj}</li>
                    })}
                </ul>
            </div>
        </div>
    )
        ;
};

interface AppProps {
}

export default MongoGet200m;