import * as React from 'react';
import { useState, useEffect } from 'react';
import GetAll from "./Components/SQL/GetAll";
import GetAnalogowe from './Components/SQL/GetAnalogoweAll'
import GetWodoszczelne200mAll from "./Components/SQL/GetWodoszczelne200m";
import GetProducentLorus from "./Components/SQL/GetProducentLorus";
import GetKrajProducentaIstnieje from "./Components/SQL/GetKrajProducentaIstnieje";
import IdParzyste from "./Components/SQL/IdParzyste";
import MongoGetAll from "./Components/NoSQL/MongoGetAll";
import MongoGetAnalogowe from "./Components/NoSQL/MongoGetAnalogowe";
import MongoGet200m from "./Components/NoSQL/MongoGet200m";
import MongoGetProducentLorus from "./Components/NoSQL/MongoGetLorus";
import MongoGetWzor from "./Components/NoSQL/MongoGetWzor";
import MongoGetEven from "./Components/NoSQL/MongoGetEven";
import MongoIdParzyste from "./Components/NoSQL/MongoGetEven";

const App = (props: AppProps) => {

	useEffect(() => {

	}, []);

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">SQL vs NOSQL</h1>

			<div className='row justify-content-center'>
				<div className='col-sm-5 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data</p>
					<GetAll/>
				</div>

				<div className='col-sm-5 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>find()</p>
					<MongoGetAll/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE Rodzaj = 'Analogowe'</p>
					<GetAnalogowe/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>find(Rodzaj: 'Analogowe')</p>
					<MongoGetAnalogowe/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE Wodoszczelność = '200m'</p>
					<GetWodoszczelne200mAll/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>find(Wodoszczelność: '200m')</p>
					<MongoGet200m/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE Producent = 'Lorus  Zegarki Lorus'</p>
					<GetProducentLorus/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>find(Producent: 'Lorus Zegarki Lorus')</p>
					<MongoGetProducentLorus/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE LENGTH(Wzór)  0</p>
					<GetKrajProducentaIstnieje/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>find(Wzór: $exists: true)</p>
					<MongoGetWzor/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE MOD(id,2) = 0</p>
					<IdParzyste/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>find(id: $mod: [2, 0])</p>
					<MongoIdParzyste/>
				</div>
			</div>

		</main>
	);
};

interface AppProps {}

export default App;
