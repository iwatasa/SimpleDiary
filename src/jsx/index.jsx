// React modules
import React from 'react';
import ReactDOM from 'react-dom/client';

// My modules
import Diary from './Diary.jsx';

window.onload = ()=>{
  console.log('window loaded');

  const root = ReactDOM.createRoot(document.getElementById('diary-container'));
  root.render(<Diary/>);
}
