import * as React from 'react';
import {useState, useEffect} from 'react';

const GetKrajProducentaIstnieje = (props: AppProps) => {

    const [allKrajProducentaIstnieje, setAllKrajProducentaIstnieje] = useState([]);
    const [exTime, setExTime] = useState(0);

    async function getKrajProducentaIstnieje() {
        try {
            let start = Date.now();
            const res = await fetch('/api/krajProducentaIstnieje');
            const data = await res.json();
            let end = Date.now();
            setAllKrajProducentaIstnieje(data);
            setExTime(end - start)
        } catch (error) {
            console.log(error);
        }
    }

    function hideAndShow() {
        var x = document.getElementById("allKrajProducentaIstnieje");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    return (
        <div className='getAllKrajProducentaIstnieje'>
            <button className="btn btn-primary" onClick={getKrajProducentaIstnieje}>
                Pobierz wszystko
            </button>
            <p>Czas wykonania : {exTime} Millisekund</p>
            <p>Pobrane obiekty: {allKrajProducentaIstnieje.length}</p>
            <button className="btn btn-warning" onClick={hideAndShow}>Pokaż wyniki</button>
            <div id='allKrajProducentaIstnieje' style={{display:'none'}}>
                <ul className='list-group'>
                    {allKrajProducentaIstnieje.map((data, idx) => {
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

export default GetKrajProducentaIstnieje;