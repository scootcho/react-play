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
        <Message author="Scott">yo yo dawg</Message>
        <Message author="ninja turtles">this is awesome!</Message>
      </div>
    );
  }
}

// class MessageForm extends Component {
//   render(){
//     return (
//       <form className="message-text-box">
//         <i className="fa fa-internet-explorer options"></i>
//         <textarea className="message-textarea" placeholder="enter message here..."></textarea>
//         <i className="fa fa-smile-o emoji"></i>
//       </form>
//     );
//   }
// }

class MessageForm extends Component {
  render(){
    return (
      <div className="message-box-bottom">
        <form id="FORM_1">
          <div id="DIV_2">
            <div id="DIV_3">
              <div id="DIV_4">
                <input type="file" id="INPUT_5" />
              </div>
              <textarea rows="1" placeholder="Chat in general..." id="TEXTAREA_6">
                t
              </textarea>
            </div>
          </div>
          <div id="DIV_7">
            <div id="DIV_8">
              <div id="DIV_9">
              </div>
              <div id="DIV_10">
              </div>
              <div id="DIV_11">
              </div>
            </div><span id="SPAN_12"><strong id="STRONG_13">Gil</strong> <span id="SPAN_14">is typing...</span></span>
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
          <div className="message-top">
            <b className="message-author">
              {this.props.author}
            </b>
          11:22 a.m.
          </div>
          <div className="message-bottom">
            {this.props.children}
            <i className="fa fa-cog cog"> </i>
          </div>
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
            <i className="fa fa-internet-explorer"></i>
          </div>
          <div className="current-user">
            <i className="fa fa-circle current-user-name"> Scott</i>
          </div>
        </div>
          <NavMid />
          <Search />
      </div>
    );
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
