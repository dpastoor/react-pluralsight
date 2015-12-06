import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css'
import mui from 'material-ui'
import MessageList from './components/MessageList.jsx'

let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    ThemeManager.setPalette({
         primary1Color: Colors.blue500,
         primary2Color: Colors.blue700,
      primary3color: Colors.blue100,
      accent1Color: Colors.pink400
    });
  }

// want to add colors to context to make available to other components
  static childContextTypes = {
    //just declares we will stick on child context, not actually setting it
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }


  render() {
    return ( 
       <MessageList> </MessageList>
    );
  }
}



