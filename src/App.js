import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from './Components/Main'
import './App.css';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
