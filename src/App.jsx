import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css'
import mui, {AppBar, Styles} from 'material-ui'
import MessageList from './components/MessageList.jsx'
import ChannelList from './components/ChannelList.jsx'
import MessageBox from './components/MessageBox.jsx'

const ThemeManager = Styles.ThemeManager;
const MyRawTheme = require('./css/MyRawTheme');


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
            <div style={{
                display: 'flex',
                flexFlow: 'row wrap',
                maxWidth: 1200,
                width: '100%',
                margin: '30px auto 30px'
                }}>
                <ChannelList />
                <MessageList> </MessageList>
            </div>
            <MessageBox />
        </div>
    );
  }
}



