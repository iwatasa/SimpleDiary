import React from 'react';

export default class Diary extends React.Component {
  constructor(props){
    super(props);

    // define state
    this.state = {
      title: props.title || '',
      body: props.body || ''
    }

    // bind
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSaveDiary = this.onSaveDiary.bind(this);
  }

  // event handlers
  onTitleChange(e){
    this.state.title = e.currentTarget.value;
    this.setState(this.state);
  }

  onBodyChange(e){
    this.state.bodyLength = e.currentTarget.value.length;
    this.state.body = e.currentTarget.value;
    this.setState(this.state);
  }

  onSaveDiary(e){
    if(this.props.onSaveDiary){
      const updatedDiary = {
        title: this.state.title,
        body: this.state.body
      }
      this.props.onSaveDiary(updatedDiary);
    }
  }

  // rendering
  render(){
    return (
      <div>
        <h1>{this.props.today}の日記</h1>
        <input type="text" placeholder="title" value={this.state.title} onChange={this.onTitleChange}></input><br></br>
        <textarea value={this.state.body} onChange={this.onBodyChange}></textarea>
        <span>character length: {this.state.body.length}</span>
        <button onClick={this.onSaveDiary}>Save</button>
      </div>
    )
  }
}
