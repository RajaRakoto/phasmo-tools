import React from 'react';
import ReactDOM from 'react-dom/client';

/* components */
import Phasmo from './components/phasmo';

/* styles */
import './main.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Phasmo />
	</React.StrictMode>,
);
