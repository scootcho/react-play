import React, { PropTypes, Component } from 'react';


export default class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <NavTop team="AWESOME TEAM"/>
        <div className="app-main">
          <ChannelSection />
          <MessageBox />
          <SideContent channelDescription="a place to hang and chill" channelDetails="This is our main channel..." pinnedItems="1. 2. 3." memberCount="210/3873" />
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
// how many people, search
class MessageList extends Component {
  render(){
    return(
      <div className="messages">
        <Message author="Scott">yyyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yoyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yo dawg</Message>
        <Message author="ninja turtles">this is awesome!</Message>
        <Message author="Scott">yyyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yoyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yo dawg</Message>
        <Message author="ninja turtles">this is awesome!</Message>
        <Message author="Scott">yyyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yoyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yo dawg</Message>
        <Message author="ninja turtles">this is awesome!</Message>
        <Message author="Scott">yyyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yoyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yo dawg</Message>
        <Message author="ninja turtles">this is awesome!</Message>
        <Message author="Scott">yyyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yoyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yo dawg</Message>
        <Message author="ninja turtles">this is awesome!</Message>
        <Message author="Scott">yyyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yoyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yo dawg</Message>
        <Message author="ninja turtles">this is awesome!</Message>
        <Message author="Scott">yyyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yoyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yo dawg</Message>
        <Message author="ninja turtles">this is awesome!</Message>
        <Message author="Scott">yyyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yoyo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo yo o yo dawg</Message>
        <Message author="ninja turtles">this is awesome!</Message>
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
            11:22 AM
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
          <span className="team-name">
            {this.props.team}
          </span>
          <i className="fa fa-angle-down switcher"></i>
        </div>
        <NavTitle channel="General" channelDescription="A place to hangout" />
        <NavOptions />
      </div>
    );
  }
}





class NavTitle extends Component {
  render() {
    return (
      <div className="nav-mid">
        <i className="fa fa-star-o fav"></i>
        <span className="current-channel">
          {this.props.channel}
        </span>
        <i className="fa fa-angle-down actions"></i>
        <span className="current-channel-bio">
          {this.props.channelDescription}
        </span>
        <span className="info-toggle">
          <i className="fa fa-info-circle"></i>
        </span>
        <span className="users-info">
          <i className="fa fa-street-view"></i>
          <span className="user-count">9001</span>
        </span>
      </div>
    )
  }
}

class NavOptions extends Component {
  render(){
    return (
      <div className="mission-control">
        <div className="search-box">
          <i className="fa fa-search"></i>
          <input type="text" id="search" placeholder="search"></input>
        </div>
        <i className="fa fa-commenting icon-1"></i>
        <i className="fa fa-star-o icon-2"></i>
        <i className="fa fa-files-o icon-3"></i>
      </div>
    );
  }
}



// side channels

class ChannelSection extends Component {
  render(){
    return (
      <div className="channels-wrap">
        <ChannelsList list={["channel 1", "channel 2", "channel4 news"]}/>
        <FriendsList />
        <GroupsList />
        <CurrentUser />
      </div>
    );
  }
}

// class ChannelsList extends Component {
//   render(){
//     return (
//       <div className="channels-list">
//         <div className="list-header">
//           <span className="list-name">
//             CHANNELS
//           </span>
//           <i className="fa fa-plus-square-o"></i>
//         </div>
//         <ul>
//           <li className="channel-name">{this.props.channelTitle}</li>
//           <li className="channel-name">{}</li>
//           <li className="channel-name">Channels 3</li>
//         </ul>
//       </div>
//     );
//   }
// }


class ChannelsList extends Component {
  static propTypes : { list: React.PropTypes.array.isRequired}
  render(){
    var list = this.props.list;
    return (
      <div className="channels-list">
        <div className="list-header">
          <span className="list-name">
            CHANNELS
          </span>
          <i className="fa fa-plus-square-o"></i>
        </div>
        <ul>
          {this.props.list.map(function(item) {
            return <List key={item.id} data={item} />;
           })}
        </ul>
      </div>
    );
    }
}

class List extends Component {
  render(){
    console.log(this.props.data)
    return(
      <li className="channel-name">{this.props.data}</li>
    );
  }
}

class FriendsList extends Component {
  render(){
    return (
      <div className="friend-list">
        <div className="list-header">
          <span className="list-name">
            Friends
          </span>
          <i className="fa fa-plus-square-o"></i>
        </div>
        <ul>
          <li className="channel-name">Pocket</li>
          <li className="channel-name">Blaine</li>
          <li className="channel-name">Locket</li>
        </ul>
      </div>
    );
  }
}

class GroupsList extends Component {
  render() {
    return (
      <div className="groups-list">
        <div className="list-header">
          <span className="list-name">
            Groups
          </span>
          <i className="fa fa-plus-square-o"></i>
        </div>
        <ul>
          <li className="channel-name">BFFS</li>
          <li className="channel-name">Devs</li>
          <li className="channel-name">Hustlers</li>
        </ul>
      </div>
    )
  }
}


class CurrentUser extends Component {
  render() {
    return (
      <div className="channel-bottom">
        <i className="fa fa-circle current-user-name"></i>
        <span className="current-user">{this.props.currentUser}</span>
      </div>
    )
  }
}



// side content

class SideContent extends Component {
  render(){
    return (
      <div className="side-content">
        <div className="channel-name">
          {this.props.channelDescription}
          <i className="fa fa-times"></i>
        </div>
        <div className="channel-info">
          <i className="fa fa-info info"></i>
          <span className="channel-details">
            {this.props.channelDetails}
          </span>
          <i className="fa fa-angle-right caret"></i>
        </div>
        <div className="pinned-info">
          <i className="fa fa-thumb-tack pinned"></i>
          <span className="pinned-details">
            {this.props.pinnedItems}
          </span>
          <i className="fa fa-angle-right caret"></i>
        </div>
        <div className="members-info">
          <i className="fa fa-user members"></i>
          <span className="members-details">
            {this.props.memberCount}
          </span>
          <i className="fa fa-angle-right caret"></i>
        </div>
      </div>
    );
  }
}
