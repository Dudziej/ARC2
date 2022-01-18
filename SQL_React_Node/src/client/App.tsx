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
			<h1 className="text-primary text-center">SQL vs NOSQL vs SQL + ORM</h1>
			{/* instrukcja jak wstawiac divy + col-sm-5 do zmiany jak dojdzie SQLite
				<div>
					MySQL
				</div>

				<div>
					MongoDB
				</div>

				<div>
					SQLite
				</div>

				...REPEAT
			*/}
			<div className='row justify-content-center'>
				<div className='col-sm-5 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data</p>
					<GetAll/>
				</div>

				<div className='col-sm-5 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>find()</p>
					<MongoGet1_1_1/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE Rodzaj = 'Analogowe'</p>
					<GetAnalogowe/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet2_1_1/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE Wodoszczelność = '200m'</p>
					<GetWodoszczelne200mAll/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet2_1_2/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE Producent = 'Lorus  Zegarki Lorus'</p>
					<GetProducentLorus/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>find(Producent: 'Lorus Zegarki Lorus')</p>
					<MongoGet2_2_1/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE LENGTH(Wzór)  0</p>
					<GetKrajProducentaIstnieje/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet2_3_1/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SELECT * from data WHERE MOD(id,2) = 0</p>
					<IdParzyste/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet3_1_1/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet3_2_1/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet4_1_1/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet4_2_1/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet5_1_1/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet5_2_1/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet6_1_1/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet6_2_1/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet7_1_1/>
				</div>

				<div className='col-sm-5 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p></p>
					<MongoGet7_2_1/>
				</div>
			</div>

		</main>
	);
};

interface AppProps {}

export default App;
