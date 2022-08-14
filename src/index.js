import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import './Assets/Styles/index.scss';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<AuthProvider>
			<App />
		</AuthProvider>
	</Router>,
);
