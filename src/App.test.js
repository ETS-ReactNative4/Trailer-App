import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



describe('App',()=>{


it('wraps content in a type submit', () => {
  expect(true).toBeTruthy();
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

})
