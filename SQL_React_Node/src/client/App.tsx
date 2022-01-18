import * as React from 'react';
import { useState, useEffect } from 'react';
import GetAll from "./Components/SQL/GetAll";
import GetAnalogowe from './Components/SQL/GetAnalogoweAll'
import GetWodoszczelne200mAll from "./Components/SQL/GetWodoszczelne200m";
import GetProducentLorus from "./Components/SQL/GetProducentLorus";
import GetKrajProducentaIstnieje from "./Components/SQL/GetKrajProducentaIstnieje";
import IdParzyste from "./Components/SQL/IdParzyste";
import MongoGet1_1_1 from "./Components/NoSQL/MongoGet1_1_1";
import MongoGet2_1_1 from "./Components/NoSQL/MongoGet2_1_1";
import MongoGet2_1_2 from "./Components/NoSQL/MongoGet2_1_2";
import MongoGet2_2_1 from "./Components/NoSQL/MongoGet2_2_1";
import MongoGet2_3_1 from "./Components/NoSQL/MongoGet2_3_1";
import MongoGet3_1_1 from "./Components/NoSQL/MongoGet3_1_1";
import MongoGet3_2_1 from "./Components/NoSQL/MongoGet3_2_1";
import MongoGet4_1_1 from "./Components/NoSQL/MongoGet4_1_1";
import MongoGet4_2_1 from "./Components/NoSQL/MongoGet4_2_1";
import MongoGet5_1_1 from "./Components/NoSQL/MongoGet5_1_1";
import MongoGet5_2_1 from "./Components/NoSQL/MongoGet5_2_1";
import MongoGet6_1_1 from "./Components/NoSQL/MongoGet6_1_1";
import MongoGet6_2_1 from "./Components/NoSQL/MongoGet6_2_1";
import MongoGet7_1_1 from "./Components/NoSQL/MongoGet7_1_1";
import MongoGet7_2_1 from "./Components/NoSQL/MongoGet7_2_1";

const App = (props: AppProps) => {

	useEffect(() => {

	}, []);

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">Benchmark Baz Danych!</h1>
			<div className="row justify-content-center mt-4 mb-4">
				<div className="col-sm-4 border rounded shadow text-primary text-center">
					<h3 className="mt-2 mb-2">Specyfikacja Komputera</h3>
						<p>
							Procesor - Intel Core i7-8700 4.60GHz
						</p>
						<p>
							Pamięć - Samsung 500GB M.2 PCIe NVMe 970 EVO Plus
						</p>
						<p>
							Pamięć(Ram) - DDR4 16GB 2666 MHz
						</p>
						<p>
							System - Windows 10 64 bit
						</p>
				</div>
			</div>
			<h2 className="text-primary text-center">SQL vs NOSQL vs SQL + ORM</h2>
			<div className='row justify-content-center'>
				{/*-------------------1-1-1---------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Cała tabela "Zegarek"</h3>
				<hr className="mb-4"/>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data</p>
					<GetAll/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>find()</p>
					<MongoGet1_1_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>
				{/*----------------2-1-1----------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Zegarki gdzie wzór == “logo”</h3>
				<hr className="mb-4"/>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE Rodzaj = 'Analogowe'</p>
					<GetAnalogowe/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet2_1_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>
				{/*------------------2-1-2------------------------------*/}
				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet2_1_2/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>
				{/*----------------2-2-1------------------------------*/}
				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet2_2_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>
				{/*------------------2-3-1------------------------------*/}
				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet2_3_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>
				{/*----------------3-1-1---------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Wszystkie wzory zegarków</h3>
				<hr className="mb-4"/>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE Wodoszczelność = '200m'</p>
					<GetWodoszczelne200mAll/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet3_1_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>
				{/*-------------------3-2-1------------------------------*/}
				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet3_2_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>
				{/*--------------------4-1-1-----------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Zegarki gdzie wzór == “logo” i kolor == “czarny” OR kolor == ‘czarne’</h3>
				<hr className="mb-4"/>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE Producent = 'Lorus  Zegarki Lorus'</p>
					<GetProducentLorus/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet4_1_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>
				{/*---------------------4-2-1----------------------------*/}
				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet4_2_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>
				{/*-------------------5-1-1------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Zegarki gdzie wzór == “logo” i  kolor != “czarny”</h3>
				<hr className="mb-4"/>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE LENGTH(Wzór)  0</p>
					<GetKrajProducentaIstnieje/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet5_1_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>
				{/*--------------------5-2-1-----------------------------*/}
				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet5_2_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>
				{/*------------------6-1-1-------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Wszystkie zegarki posortowane alfabetycznie po kolorze</h3>
				<hr className="mb-4"/>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE MOD(id,2) = 0</p>
					<IdParzyste/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet6_1_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>
				{/*------------------6-2-1-------------------------------*/}
				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet6_2_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>
				{/*------------------7-1-1-------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Wszystkie kolory zaczynające się na “cz”</h3>
				<hr className="mb-4"/>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet7_1_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>

				{/*------------------7-2-1-------------------------------*/}
				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet7_2_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>

				</div>
				{/*------------------------------------------------------*/}
			</div>
		</main>
	);
};

interface AppProps {}

export default App;
