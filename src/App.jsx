import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css'
import mui, {AppBar, Styles} from 'material-ui'
import MessageList from './components/MessageList.jsx'

const ThemeManager = Styles.ThemeManager
const MyRawTheme = require('./css/MyRawTheme');
console.log(MyRawTheme)
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

// want to add colors to context to make available to other components
  static childContextTypes = {
    //just declares we will stick on child context, not actually setting it
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme)
    };
  }


  render() {
    return (
        <div>
          <AppBar title="Awesome Chat App"></AppBar>
          <MessageList> </MessageList>
        </div>
    );
  }
}



