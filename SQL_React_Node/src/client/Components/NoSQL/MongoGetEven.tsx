import * as React from 'react';
import {useState, useEffect} from 'react';

const MongoIdParzyste = (props: AppProps) => {

    const [allIdParzyste, setAllIdParzyste] = useState([]);
    const [exTime, setExTime] = useState(0);

    async function getData() {
        try {
            let start = Date.now();
            const res = await fetch('/mongo/getEven');
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
            <button className="btn btn-primary" onClick={getData}>
                Pobierz wszystko
            </button>
            <p>Czas wykonania : {exTime} Millisekund</p>
            <p>Pobrane obiekty: {allIdParzyste.length}</p>
        </div>
    )
        ;
};

interface AppProps {
}

export default MongoIdParzyste;