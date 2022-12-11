import React from 'react';
import ReactDOM from 'react-dom/client';

/* libs */
import { Provider } from 'react-redux';

/* styles */
import './main.min.css';

/* components */
import App from './app/app';

/* store */
import store from './data/store';

// ================================================

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
