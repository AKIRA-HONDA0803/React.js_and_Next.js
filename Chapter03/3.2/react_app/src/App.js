import React, { Component } from 'react';
import './App.css';

let data = {title:'React-Context',
  message:'this is sample message.'}

const SampleContext = React.createContext(data)

class App extends Component {
  // Providerで一時的にコンテキストの値を変更する
  newdata = {title:'新しいタイトル',
    message:'これは新しいメッセージです。'}

  render(){
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
      <Title />
        <Message />
        <hr />
        <SampleContext.Provider value={this.newdata}>
          <Title />
          <Message />
        </SampleContext.Provider>
        <hr />
        <Title />
        <Message />
      </div>
    </div>
  }
}

class Title extends Component {
  static contextType = SampleContext

  render(){
    return (
      <div className="card p-2 my-3">
        <h2>{this.context.title}</h2>
      </div>
    )
  }
}

class Message extends Component {
  static contextType = SampleContext

  render(){
    return (
      <div className="alert alert-primary">
        <p>{this.context.message}</p>
      </div>
    )
  }
}

export default App
