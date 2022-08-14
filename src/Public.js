import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { ErrorPage } from "./Components/404/404";
import { Login } from './Pages/Login/Login';

export const Public = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<>
						Public page <Link to='/login'>Link</Link>
					</>
				}
			/>
			<Route path='/login' element={<Login />} />
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
};
