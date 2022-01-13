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

    function hideAndShow() {
        var x = document.getElementById("allWodoszczelne200m");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    return (
        <div className='getAllWodoszczelne200m'>
            <button className="btn btn-primary" onClick={getWodoszczelne200m}>
                Pobierz wszystko
            </button>
            <p>Czas wykonania : {exTime} Millisekund</p>
            <p>Pobrane obiekty: {allWodoszczelne200m.length}</p>
            <button className="btn btn-warning" onClick={hideAndShow}>Pokaż wyniki</button>
            <div id='allWodoszczelne200m' style={{display:'none'}}>
                <ul className='list-group'>
                    {allWodoszczelne200m.map((data, idx) => {
                        return <li key={idx} className='list-group-item'>{data.id} {data.Wodoszczelność}</li>
                    })}
                </ul>
            </div>
        </div>
    )
        ;
};

interface AppProps {
}

export default GetWodoszczelne200mAll;