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
import MongoGet6_2_1 from "./Components/NoSQL/MongoGet6_2_1";
import MongoGet7_1_1 from "./Components/NoSQL/MongoGet7_1_1";
import MongoGet7_2_1 from "./Components/NoSQL/MongoGet7_2_1";
import OrmGet1_1_1 from "./Components/ORM/OrmGet1_1_1";
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
import MySQL7_2_1 from "./Components/SQL/MySQL7_2_1";
import OrmGet1_2_1 from "./Components/ORM/OrmGet1_2_1";
import OrmGet2_1_1 from "./Components/ORM/OrmGet2_1_1";
import OrmGet2_2_1 from "./Components/ORM/OrmGet2_2_1";
import OrmGet2_3_1 from "./Components/ORM/OrmGet2_3_1";
import OrmGet3_1_1 from "./Components/ORM/OrmGet3_1_1";
import OrmGet3_2_1 from "./Components/ORM/OrmGet3_2_1";
import OrmGet4_1_1 from "./Components/ORM/OrmGet4_1_1";
import OrmGet4_2_1 from "./Components/ORM/OrmGet4_2_1";
import OrmGet5_1_1 from "./Components/ORM/OrmGet5_1_1";
import OrmGet5_2_1 from "./Components/ORM/OrmGet5_2_1";
import OrmGet6_1_1 from "./Components/ORM/OrmGet6_1_1";
import OrmGet6_2_1 from "./Components/ORM/OrmGet6_2_1";
import OrmGet7_1_1 from "./Components/ORM/OrmGet7_1_1";
import OrmGet7_2_1 from "./Components/ORM/OrmGet7_2_1";

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
						Dla wielu tabel - 100000
					</p>
					<p>
						Dla jednej tabeli - 100000
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
				{/*-------------------1-1-1---------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Cała tabela "Zegarek" (Jedna tabela)</h3>
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
					<OrmGet1_1_1/>
				</div>
				{/*-------------------1-2-1---------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Cała tabela "Zegarek" (Wiele tabel)</h3>
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
					<OrmGet1_2_1/>
				</div>
				{/*----------------2-1-1----------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Zegarki gdzie wzór == “logo” (Wiele tabel, wiele zapytań)</h3>
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
					<OrmGet2_1_1/>
				</div>
				{/*----------------2-2-1------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Zegarki gdzie wzór == “logo” (Wiele tabel, Jedno zapytanie)</h3>
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
					<OrmGet2_2_1/>
				</div>
				{/*------------------2-3-1------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Zegarki gdzie wzór == “logo” (Jedna tabela)</h3>
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
					<OrmGet2_3_1/>
				</div>
				{/*----------------3-1-1---------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Wszystkie wzory zegarków (Wiele tabel)</h3>
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
					<OrmGet3_1_1/>
				</div>
				{/*-------------------3-2-1------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Wszystkie wzory zegarków (Jedna tabela)</h3>
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
					<OrmGet3_2_1/>
				</div>
				{/*--------------------4-1-1-----------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Zegarki gdzie wzór == “logo” i kolor == “czarny” OR kolor == ‘czarne’ (Wiele tabel)</h3>
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
					<OrmGet4_1_1/>
				</div>
				{/*---------------------4-2-1----------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Zegarki gdzie wzór == “logo” i kolor == “czarny” OR kolor == ‘czarne’ (Jedna tabela)</h3>
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
					<OrmGet4_2_1/>
				</div>
				{/*-------------------5-1-1------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Zegarki gdzie wzór == “logo” i  kolor != “czarny” (Wiele tabel)</h3>
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
					<OrmGet5_1_1/>
				</div>
				{/*--------------------5-2-1-----------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Zegarki gdzie wzór == “logo” i  kolor != “czarny” (Jedna Tabela)</h3>
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
					<OrmGet5_2_1/>
				</div>
				{/*------------------6-1-1-------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Wszystkie zegarki posortowane alfabetycznie po kolorze (Wiele tabel)</h3>
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
					<OrmGet6_1_1/>
				</div>
				{/*------------------6-2-1-------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Wszystkie zegarki posortowane alfabetycznie po kolorze (Jedna tabela)</h3>
				<hr className="mb-4"/>
				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MySQL</p>
					<MySQL6_2_1/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MongoDB</p>
					<MongoGet6_2_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SQLite + Django ORM</p>
					<OrmGet6_2_1/>
				</div>
				{/*------------------7-1-1-------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Wszystkie kolory zaczynające się na “cz” (Wiele Tabel)</h3>
				<hr className="mb-4"/>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MySQL</p>
					<MySQL7_1_1/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MongoDB</p>
					<MongoGet7_1_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SQLite + Django ORM</p>
					<OrmGet7_1_1/>
				</div>

				{/*------------------7-2-1-------------------------------*/}
				<hr className="mt-4"/>
				<h3 className="text-primary text-center">Wszystkie kolory zaczynające się na “cz” (Jedna tabela)</h3>
				<hr className="mb-4"/>
				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MySQL</p>
					<MySQL7_2_1/>
				</div>

				<div className='col-sm-4 text-center border card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>MongoDB</p>
					<MongoGet7_2_1/>
				</div>

				<div className='col-sm-4 text-center card shadow mt-1 mb-1 pt-2 pb-2'>
					<p>SQLite + Django ORM</p>
					<OrmGet7_2_1/>
				</div>
				{/*------------------------------------------------------*/}
			</div>
		</main>
	);
};

interface AppProps {}

export default App;
