import * as React from 'react';
import { useState, useEffect } from 'react';
import GetAll from "./Components/GetAll";
import GetAnalogowe from './Components/GetAnalogoweAll'
import GetWodoszczelne200mAll from "./Components/GetWodoszczelne200m";
import GetProducentLorus from "./Components/GetProducentLorus";
import GetKrajProducentaIstnieje from "./Components/GetKrajProducentaIstnieje";
import IdParzyste from "./Components/IdParzyste";
import MongoGetAll from "./Components/NoSQL/MongoGetAll";
import MongoGetAnalogowe from "./Components/NoSQL/MongoGetAnalogowe";

const App = (props: AppProps) => {

	useEffect(() => {

	}, []);

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">SQL vs NOSQL</h1>

			<div className='row justify-content-center'>
				<div className='col-sm-5 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data</p>
					<GetAll></GetAll>
				</div>

				<div className='col-sm-5 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>find()</p>
					<MongoGetAll></MongoGetAll>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE Rodzaj = 'Analogowe'</p>
					<GetAnalogowe></GetAnalogowe>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>find(Rodzaj: 'Analogowe')</p>
					<MongoGetAnalogowe></MongoGetAnalogowe>
				</div>

				<div className='col-sm-10 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE Wodoszczelność = '200m'</p>
					<GetWodoszczelne200mAll></GetWodoszczelne200mAll>
				</div>

				<div className='col-sm-10 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE Producent = 'Lorus  Zegarki Lorus'</p>
					<GetProducentLorus></GetProducentLorus>
				</div>

				<div className='col-sm-10 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE LENGTH(Wzór)  0</p>
					<GetKrajProducentaIstnieje></GetKrajProducentaIstnieje>
				</div>

				<div className='col-sm-10 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE MOD(id,2) = 0</p>
					<IdParzyste></IdParzyste>
				</div>
			</div>

		</main>
	);
};

interface AppProps {}

export default App;
