import React, { PropTypes, Component } from 'react';


export default class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <NavTop />
        <div className="app-main">
          <ChannelSection />
          <MessageBox />
          <SideContent />
        </div>
      </div>
    );
  }
}


// Message box

class MessageBox extends Component {
  render() {
    return (
      <div className="message-wrap">
        <MessageList />
        <MessageForm />
      </div>
    );
  }
}

// Channels
// + and upload
// whose typing
// how many people, search
class MessageList extends Component {
  render(){
    return(
      <div className="messages">
        <Message author="Scott">yyyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yoyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yo dawg</Message>
        <Message author="ninja turtles">this is awesome!</Message>
      </div>
    );
  }
}


class MessageForm extends Component {
  render(){
    return (
      <div className="message-box-bottom">
        <form id="message-form">
          <div id="message-outter">
            <div id="message-inner">
              <div id="upload">
                <input type="file" id="file" />
              </div>
              <textarea rows="1" placeholder="Chat in general..." id="textbox">
              </textarea>
            </div>
          </div>
          <div id="status">
            <span>somebody is typing... </span>
          </div>
        </form>
      </div>
    );
  }
}

class Message extends Component {
  render(){
    return (
      <div className="message">
        <img className="message-author-icon" src="https://s3.amazonaws.com/uifaces/faces/twitter/idiot/48.jpg">
        </img>
        <div className="message-contents">
          <span className="message-author">
            {this.props.author}
          </span>
          <span className="message-time">
            11:22 a.m.
          </span>
          <div className="message-bottom">
            {this.props.children}
          </div>
        </div>
        <div className="options">
          <i className="fa fa-cog"> </i>
        </div>
      </div>
    );
  }
}


// header section

class NavTop extends Component {
  render(){
    return (
      <div className="nav-top">
        <div className="channel-header">
          <div className="team-name">
            React PlAY!
            <i className="fa fa-angle-down"></i>
          </div>
        </div>
          <NavMid />
          <Search />
      </div>
    );
  }
}


class CurrentUser extends Component {
  render() {
    return (
      <div className="current-user">
        <i className="fa fa-circle current-user-name">Scott</i>
      </div>
    )
  }
}

class NavMid extends Component {
  render() {
    return (
      <div className="nav-mid mid-content">
        <div className="current-channel mid-content">
           General
        </div>
        <i className="fa fa-internet-explorer mid-content"></i>
        <div className="current-channel-bio mid-content">
          This is our main channel
        </div>
        <div className="user-count mid-content">
          9001
        </div>
      </div>
    )
  }
}

class Search extends Component {
  render(){
    return (
      <div className="search">
        <input type="text" placeholder="search"></input>
      </div>
    );
  }
}



// side channels

class ChannelSection extends Component {
  render(){
    return (
      <div className="channels-wrap">
        <ChannelsList />
        <FriendsList />
        <GroupsList />
        <div className="channel-bottom">
          <CurrentUser />
        </div>
      </div>
    );
  }
}


class ChannelsList extends Component {
  render(){
    return (
      <div className="channels-list">
        channels
        <i className="fa fa-cog"></i>
        <lu>
          <li className="channel-name">Channels 1</li>
          <li className="channel-name">Channels 2</li>
          <li className="channel-name">Channels 3</li>
        </lu>
      </div>
    );
  }
}

class FriendsList extends Component {
  render(){
    return (
      <div className="friend-list">
        Friends
        <i className="fa fa-cog"></i>
        <lu>
          <li className="channel-name">Pocket</li>
          <li className="channel-name">Blaine</li>
          <li className="channel-name">Locket</li>
        </lu>
      </div>
    );
  }
}

class GroupsList extends Component {
  render() {
    return (
      <div className="groups-list">
        Groups
        <i className="fa fa-cog"></i>
        <lu>
          <li className="channel-name">BFFS</li>
          <li className="channel-name">Devs</li>
          <li className="channel-name">Hustlers</li>
        </lu>
      </div>
    )
  }
}


// side content

class SideContent extends Component {
  render(){
    return (
      <div className="side-content">
        Hi i'm side content
      </div>
    );
  }
}
