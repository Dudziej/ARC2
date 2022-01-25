import * as React from 'react';
import { useState, useEffect } from 'react';
import MongoGetA_10_1 from "./Components/NoSQL/MongoGetA_10_1";
import MongoGetA_40_1 from "./Components/NoSQL/MongoGetA_40_1";
import MongoGetDN_1_1 from "./Components/NoSQL/MongoGetDN_1_1";
import MongoGetDN_10_1 from "./Components/NoSQL/MongoGetDN_10_1";
import MongoGetDN_100_1 from "./Components/NoSQL/MongoGetDN_100_1";
import MongoGetA_20_2 from "./Components/NoSQL/MongoGetA_20_2";
import MongoGetDN_100_2 from "./Components/NoSQL/MongoGetDN_100_2";
import MongoGetA_20_3 from "./Components/NoSQL/MongoGetA_20_3";
import MongoGetDN_100_3 from "./Components/NoSQL/MongoGetDN_100_3";
import MongoGetA_20_4 from "./Components/NoSQL/MongoGetA_20_4";
import MongoGetDN_100_4 from "./Components/NoSQL/MongoGetDN_100_4";
import MongoGetA_20_5 from "./Components/NoSQL/MongoGetA_20_5";
import MongoGetDN_100_5 from "./Components/NoSQL/MongoGetDN_100_5";
import OrmGetA_10_1 from "./Components/ORM/OrmGetA_10_1";
import MongoGetA_20_1 from "./Components/NoSQL/MongoGetA_20_1";
import MySQL1_1_1 from "./Components/SQL/MySQL1_1_1";
import MySQL1_2_1 from "./Components/SQL/MySQL1_2_1";
import MySQL2_1_1 from "./Components/SQL/MySQL2_1_1";
import MySQL2_2_1 from "./Components/SQL/MySQL2_2_1";
import MySQL2_3_1 from "./Components/SQL/MySQL2_3_1";
import MySQL3_1_1 from "./Components/SQL/MySQL3_1_1";
import MySQL3_2_1 from "./Components/SQL/MySQL3_2_1";
import MySQL4_1_1 from "./Components/SQL/MySQL4_1_1";
import MySQL4_2_1 from "./Components/SQL/MySQL4_2_1";
import MySQL5_1_1 from "./Components/SQL/MySQL5_1_1";
import MySQL5_2_1 from "./Components/SQL/MySQL5_2_1";
import MySQL6_1_1 from "./Components/SQL/MySQL6_1_1";
import MySQL6_2_1 from "./Components/SQL/MySQL6_2_1";
import MySQL7_1_1 from "./Components/SQL/MySQL7_1_1";
import OrmGetA_20_1 from "./Components/ORM/OrmGetA_20_1";
import OrmGetA_40_1 from "./Components/ORM/OrmGetA_40_1";
import OrmGetDN_100_1 from "./Components/ORM/OrmGetDN_100_1";
import OrmGetDN_10_1 from "./Components/ORM/OrmGetDN_10_1";
import OrmGetDN_1_1 from "./Components/ORM/OrmGetDN_1_1";
import OrmGetA_20_2 from "./Components/ORM/OrmGetA_20_2";
import OrmGetDN_100_2 from "./Components/ORM/OrmGetDN_100_2";
import OrmGetA_20_3 from "./Components/ORM/OrmGetA_20_3";
import OrmGetDN_100_3 from "./Components/ORM/OrmGetDN_100_3";
import OrmGetA_20_4 from "./Components/ORM/OrmGetA_20_4";
import OrmGetDN_100_4 from "./Components/ORM/OrmGetDN_100_4";
import OrmGetA_20_5 from "./Components/ORM/OrmGetA_20_5";
import OrmGetDN_100_5 from "./Components/ORM/OrmGetDN_100_5";

const App = (props: AppProps) => {

	useEffect(() => {

	}, []);

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">Benchmark Baz Danych!</h1>
			<h2 className="text-primary text-center">SQL vs NOSQL vs SQL + ORM</h2>
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
				<div className="col-sm-4 border rounded shadow text-primary text-center">
					<h3 className="mt-2 mb-2">Ilość Danych</h3>
					<p>
						Dla Agregacji - 100000
					</p>
					<p>
						Dla Denormalizacji - 100000
					</p>

				</div>
				<div className="col-sm-4 border rounded shadow text-primary text-center">
					<h3 className="mt-2 mb-2">Wersje Baz</h3>
					<p>
						MongoDB - 4.4.3
					</p>
					<p>
						MySQL - 8.0
					</p>
					<p>
						SQLite - 3.3.7
					</p>

				</div>
			</div>
			<div className='row justify-content-center'>
				{/*-------------------A_10_1---------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Agregacja 10 tabel</h3>
				<hr className="mb-4"/>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MySQL</p>
					<MySQL1_1_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MongoDB</p>
					<MongoGetA_10_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SQLite + Django ORM</p>
					<OrmGetA_10_1/>
				</div>
				{/*-------------------A_20_1---------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Agregacja 20 tabel</h3>
				<hr className="mb-4"/>
				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MySQL</p>
					<MySQL1_2_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MongoDB</p>
					<MongoGetA_20_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SQLite + Django ORM</p>
					<OrmGetA_20_1/>
				</div>
				{/*----------------A_40_1----------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Agregacja 40 tabel</h3>
				<hr className="mb-4"/>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MySQL</p>
					<MySQL2_1_1/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MongoDB</p>
					<MongoGetA_40_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SQLite + Django ORM</p>
					<OrmGetA_40_1/>
				</div>
				{/*----------------DN_1_1------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Denormalizacja dla 1000</h3>
				<hr className="mb-4"/>
				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MySQL</p>
					<MySQL2_2_1/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MongoDB</p>
					<MongoGetDN_1_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SQLite + Django ORM</p>
					<OrmGetDN_100_1/>
				</div>
				{/*------------------DN_10_1------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Denormalizacja dla 10000</h3>
				<hr className="mb-4"/>
				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MySQL</p>
					<MySQL2_3_1/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MongoDB</p>
					<MongoGetDN_10_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SQLite + Django ORM</p>
					<OrmGetDN_10_1/>
				</div>
				{/*----------------DN_100_1---------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Denormalizacja dla 100000</h3>
				<hr className="mb-4"/>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MySQL</p>
					<MySQL3_1_1/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MongoDB</p>
					<MongoGetDN_100_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SQLite + Django ORM</p>
					<OrmGetDN_1_1/>
				</div>
				{/*-------------------A_20_2------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Kolor zaczynający się na cz (Agregacja)</h3>
				<hr className="mb-4"/>
				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MySQL</p>
					<MySQL3_2_1/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MongoDB</p>
					<MongoGetA_20_2/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SQLite + Django ORM</p>
					<OrmGetA_20_2/>
				</div>
				{/*--------------------DN_100_2-----------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Kolor zaczynający się na cz (Denormalizacja)</h3>
				<hr className="mb-4"/>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MySQL</p>
					<MySQL4_1_1/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MongoDB</p>
					<MongoGetDN_100_2/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SQLite + Django ORM</p>
					<OrmGetDN_100_2/>
				</div>
				{/*---------------------A_20_3----------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Sortowanie po kolorze (Agregacja)</h3>
				<hr className="mb-4"/>
				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MySQL</p>
					<MySQL4_2_1/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MongoDB</p>
					<MongoGetA_20_3/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SQLite + Django ORM</p>
					<OrmGetA_20_3/>
				</div>
				{/*-------------------DN_100_3------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Sortowanie po kolorze (Denormalizacja)</h3>
				<hr className="mb-4"/>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MySQL</p>
					<MySQL5_1_1/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MongoDB</p>
					<MongoGetDN_100_3/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SQLite + Django ORM</p>
					<OrmGetDN_100_3/>
				</div>
				{/*--------------------A_20_4-----------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Wszystkie wzory zegarków (Agregacja)</h3>
				<hr className="mb-4"/>
				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MySQL</p>
					<MySQL5_2_1/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MongoDB</p>
					<MongoGetA_20_4/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SQLite + Django ORM</p>
					<OrmGetA_20_4/>
				</div>
				{/*------------------DN_100_4-------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Wszystkie wzory zegarków (Denormalizacja)</h3>
				<hr className="mb-4"/>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MySQL</p>
					<MySQL6_1_1/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MongoDB</p>
					<MongoGetDN_100_4/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SQLite + Django ORM</p>
					<OrmGetDN_100_4/>
				</div>
				{/*------------------A_20_5------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Zegarki gdzie wzór == logo i kolor != czarny or czarne(Agregacja)</h3>
				<hr className="mb-4"/>
				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MySQL</p>
					<MySQL6_2_1/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MongoDB</p>
					<MongoGetA_20_5/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SQLite + Django ORM</p>
					<OrmGetA_20_5/>
				</div>
				{/*------------------DN_100_5-------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Zegarki gdzie wzór == logo i kolor != czarny or czarne(Denormalizacja)</h3>
				<hr className="mb-4"/>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MySQL</p>
					<MySQL7_1_1/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MongoDB</p>
					<MongoGetDN_100_5/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SQLite + Django ORM</p>
					<OrmGetDN_100_5/>
				</div>
			</div>
		</main>
	);
};

interface AppProps {}

export default App;
