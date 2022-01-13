import * as React from 'react';
import {useState, useEffect} from 'react';

const MongoGetAnalogowe = (props: AppProps) => {

    const [allAnalogowe, setAllAnalogowe] = useState([]);
    const [exTime, setExTime] = useState(0);

    async function getAnalogowe() {
        try {
            let start = Date.now();
            const res = await fetch('/mongo/getAnalogowe');
            const data = await res.json();
            let end = Date.now();
            setAllAnalogowe(data);
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
            <button onClick={getAnalogowe}>
                Pobierz wszystko
            </button>
            <p>Czas wykonania : {exTime} Millisekund</p>
            <p>Pobrane obiekty: {allAnalogowe.length}</p>
            <button onClick={hideAndShow}>Pokaż wyniki</button>
            <div id='allAnalogowe' style={{display:'none'}}>
                <ul className='list-group'>
                    {allAnalogowe.map((data, idx) => {
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

export default MongoGetAnalogowe;