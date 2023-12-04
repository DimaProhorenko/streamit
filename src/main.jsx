import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
// Import Swiper styles
import 'swiper/css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<i className="fa-solid fa-desktop"></i>
		<App />
	</React.StrictMode>
);
