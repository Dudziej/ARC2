import * as React from 'react';
import {useState, useEffect} from 'react';

const MongoGetWzor = (props: AppProps) => {

    const [allWzor, setAllWzor] = useState([]);
    const [exTime, setExTime] = useState(0);

    async function getKrajProducentaIstnieje() {
        try {
            let start = Date.now();
            const res = await fetch('/mongo/getWzor');
            const data = await res.json();
            let end = Date.now();
            setAllWzor(data);
            setExTime(end - start)
        } catch (error) {
            console.log(error);
        }
    }

    function hideAndShow() {
        var x = document.getElementById("allWzor");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    return (
        <div className='getAllWzor'>
            <button className="btn btn-primary" onClick={getKrajProducentaIstnieje}>
                Pobierz wszystko
            </button>
            <p>Czas wykonania : {exTime} Millisekund</p>
            <p>Pobrane obiekty: {allWzor.length}</p>
            <button className="btn btn-warning" onClick={hideAndShow}>Pokaż wyniki</button>
            <div id='allWzor' style={{display:'none'}}>
                <ul className='list-group'>
                    {allWzor.map((data, idx) => {
                        return <li key={idx} className='list-group-item'>{data.id} {data.Wzór}</li>
                    })}
                </ul>
            </div>
        </div>
    )
        ;
};

interface AppProps {
}

export default MongoGetWzor;