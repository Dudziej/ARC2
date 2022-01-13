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

    function hideAndShow() {
        var x = document.getElementById("allIdParzyste");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    return (
        <div className='getAll'>
            <button onClick={getData}>
                Pobierz wszystko
            </button>
            <p>Czas wykonania : {exTime} Millisekund</p>
            <p>Pobrane obiekty: {allIdParzyste.length}</p>
            <button onClick={hideAndShow}>Pokaż wyniki</button>
            <div id='allIdParzyste' style={{display:'none'}}>
                <ul className='list-group'>
                    {allIdParzyste.map((data, idx) => {
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

export default IdParzyste;