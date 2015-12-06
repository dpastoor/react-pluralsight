import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css'
import MessageList from './components/MessageList.jsx'
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
       <MessageList> </MessageList>
    );
  }
}



