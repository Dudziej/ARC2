import * as React from 'react';
import { useState, useEffect } from 'react';
import GetAll from "./Components/GetAll";

const App = (props: AppProps) => {

	useEffect(() => {

	}, []);

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">Data z SQL db.</h1>

			<div className='row'>
				<div className='col-sm-4 text-center'>
					<GetAll></GetAll>
				</div>
			</div>

		</main>
	);
};

interface AppProps {}

export default App;
