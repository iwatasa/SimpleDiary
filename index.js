// modules
const express = require('express');

// static
const PORT = 3000;

// var
const diary = {
  title: '',
  body: ''
}

// TODO
/*
  Introducing DB
*/

// server settings
const exapp = express();
exapp.use(express.static(__dirname+'/dst'));
exapp.use(express.json());

exapp.get('/',(req,res,next)=>{
  res.redirect('/html/');
});

exapp.get('/get',(req,res)=>{
  res.send(JSON.stringify(diary));
});

exapp.post('/save',(req,res)=>{
  const {title, body} = req.body;
  diary.title = title;diary.body = body;
  res.send('Saving Diary is Completed!');
});

// build server
exapp.listen(PORT, ()=>{
  console.log('listening on port'+ PORT);
});
