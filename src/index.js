import React from 'react';
import ReactDOM from 'react-dom';
import SunShineState from './SunShineState';

// registerServiceWorker can be used to speed rendering to page using cache.
/* import registerServiceWorker from './registerServiceWorker';
   registerServiceWorker(); */

// Render our react app within the root div.
ReactDOM.render(<SunShineState />, document.getElementById('root'));

