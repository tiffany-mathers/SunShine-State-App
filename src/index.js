import React from 'react';
import ReactDOM from 'react-dom';
import SunShineState from './SunShineState';

// registerServiceWorker can be used to speed rendering to page using cache.
/* import registerServiceWorker from './registerServiceWorker';
   registerServiceWorker(); */

// Render our react app within the div with a 'root' id
ReactDOM.render(<SunShineState />, document.getElementById('root'));

