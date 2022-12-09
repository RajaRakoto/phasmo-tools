import React from 'react';
import ReactDOM from 'react-dom/client';

/* styles */
import './main.min.css';

/* components */
import Home from './app/app';

// ================================================

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>,
);
