// React modules
import React from 'react';
import ReactDOM from 'react-dom/client';

// My modules
import Diary from './Diary.jsx';

// entry point
window.onload = ()=>{
  console.log('window loaded');

  getDiary().then((diary)=>{
    const now = new Date();
    const todayString = (now.getMonth()+1)+'月'+now.getDate()+'日';

    const root = ReactDOM.createRoot(document.getElementById('diary-container'));
    root.render(<Diary today={todayString} title={diary.title} body={diary.body} onSaveDiary={onSaveDiary}/>);
  });
}

// event handler
const onSaveDiary = (updatedDiary)=>{
  saveDiary(updatedDiary);
}

// functions
const getDiary = ()=>{
  return new Promise((resolve)=>{
    const xhr = new XMLHttpRequest();

    xhr.onload = (e)=>{
      resolve(JSON.parse(xhr.responseText));
    }

    xhr.open('GET',location.origin+'/get');
    xhr.send(null);
  });
}

const saveDiary = (updatedDiary)=>{
  const xhr = new XMLHttpRequest();

  xhr.onload = (e)=>{
    console.log(xhr.responseText);
  }

  xhr.open('POST',location.origin+'/save');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(updatedDiary));
}
