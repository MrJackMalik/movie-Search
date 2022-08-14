import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ErrorPage } from "./Components/404/404";
import { Header } from './Components/Header/Header';
import { Popular } from './Components/Popular/Popular';
import { SingleMovie } from './Components/SingleMovie/SingleMovie';
import { SingleTv } from './Components/SingleTv/SingleTv';
import { TopRated } from './Components/TopRated/TopRated';
import { TvShows } from './Components/TvShows/TvShows';
import { Upcoming } from './Components/Upcoming/Upcoming';
import { Home } from './Pages/Home/Home';

export const Private = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/popular/*' element={<Popular />} />
				<Route path='/movie/:id' element={<SingleMovie />} />
				<Route path='/top-rated/*' element={<TopRated />} />
				<Route path='/coming/*' element={<Upcoming />} />
				<Route path='/tv-show/*' element={<TvShows />} />
				<Route path='/TV/:id' element={<SingleTv />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</>
	);
};
