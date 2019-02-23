import React from 'react';
import ReactDOM from 'react-dom';
import SunShineState from '../SunShineState';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SunShineState />, div);
  ReactDOM.unmountComponentAtNode(div);
});
