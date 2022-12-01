import React from 'react';
import ReactDOM from 'react-dom/client';

/* components */
import App from './app/app';

/* styles */
import './main.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
