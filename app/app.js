import React, { PropTypes, Component } from 'react';
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { combineReducers } from 'redux';
import { bindActionCreators } from 'redux';
import './main.scss';


// actions

// const SET_ROOMS = 'SET_ROOMS';
const CHANGE_ROOM = 'CHANGE_ROOM';
 

// const changeRoom = function(room) {
//   return {
//     type: CHANGE_ROOM,
//     room: room
//   }
// }
  
const changeRoom = function(room) {
  return (
    {type: 'CHANGE_ROOM', room: room}
  )
}

// reducer

function rooms (state = { currentRoom: "lobby"}, action) {
  switch(action.type) {
  case 'CHANGE_ROOM':
    return { currentRoom: action.room };
  default:
    return state
  }
}


class Wrapper extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="app-wrapper">
        <NavTop {...this.props} team="AWESOME TEAM"/>
        <div className="app-main">
          <ChannelSection {...this.props} />
          <MessageBox {...this.props} />
          <SideContent {...this.props} channelDescription="a place to hang and chill" channelDetails="This is our main channel..." pinnedItems="1. 2. 3." memberCount="210/3873" />
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

class MessageList extends Component {
  render(){
    var message = "Hey ".repeat(70)
    return(
      <div className="messages">
        <Message author="Scott" time="11:22 AM">{message}</Message>
        <Message author="Scott" time="11:22 AM">{message}</Message>
        <Message author="Scott" time="11:22 AM">{message}</Message>
        <Message author="Scott" time="11:22 AM">{message}</Message>
        <Message author="Scott" time="11:22 AM">{message}</Message>
        <Message author="Scott" time="11:22 AM">{message}</Message>
        <Message author="Scott" time="11:22 AM">{message}</Message>
        <Message author="Scott" time="11:22 AM">{message}</Message>
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
            {this.props.time}
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
        <NavTitle {...this.props} channelDescription="A place to hangout" />
        <NavOptions />
      </div>
    );
  }
}





class NavTitle extends Component {
  render() {
    const { currentRoom } = this.props;
    return (
      <div className="nav-mid">
        <i className="fa fa-star-o fav"></i>
        <span className="current-channel">
          { currentRoom }
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
        <ChannelsList {...this.props} list={["channel 1", "channel 2", "channel4 news"]}/>
        <FriendsList {...this.props} list={["channel 1", "channel 2", "channel4 news"]}/>
        <GroupsList {...this.props} list={["channel 1", "channel 2", "channel4 news"]}/>
        <CurrentUser currentUser="Scott" />
      </div>
    );
  }
}

class ChannelsList extends Component {

  static propTypes : { list: React.PropTypes.array.isRequired}

  render() {
    
    const ChannelListings = this.props.list.map((item, index) => (
      <li className="channel-name" onClick={e => onChangeRoom(e.target.textContent)} key={`${index}-item`}>
        {item}
      </li>
    ));

    const { onChangeRoom } = this.props

    return (
      <div className="channels-list">
        <div className="list-header">
          <span className="list-name">
            CHANNELS
          </span>
          <i className="fa fa-plus-square-o"></i>
        </div>
        <ul>
          { ChannelListings }
        </ul>
      </div>
    );
  }
}


class FriendsList extends Component {
  static propTypes : { list: React.PropTypes.array.isRequired}
  render(){

    const FriendsListings = this.props.list.map((item, index) => (
      <li className="channel-name" onClick={e => onChangeRoom(e.target.textContent)} key={`${index}-item`}>
        {item}
      </li>
    ));

    const { onChangeRoom } = this.props

    return (
      <div className="friend-list">
        <div className="list-header">
          <span className="list-name">
            Friends
          </span>
          <i className="fa fa-plus-square-o"></i>
        </div>
        <ul>
          { FriendsListings }
        </ul>
      </div>
    );
  }
}

class GroupsList extends Component {
  
  static propTypes : { list: React.PropTypes.array.isRequired}
  
  render() {

    const GroupsListings = this.props.list.map((item, index) => (
      <li className="channel-name" onClick={e => onChangeRoom(e.target.textContent)} key={`${index}-item`}>
        {item}
      </li>
    ));

    const { onChangeRoom } = this.props

    return (
      <div className="groups-list">
        <div className="list-header">
          <span className="list-name">
            Groups
          </span>
          <i className="fa fa-plus-square-o"></i>
        </div>
        <ul>
          { GroupsListings }
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
    const { currentRoom } = this.props;

    return (
      <div className="side-content">
        <div className="channel-name">
          { currentRoom }
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


function mapStateToProps (state) {
  console.log("==state==")
  console.log(state.currentRoom)
  console.log("==state==")
  return {
    currentRoom: state.currentRoom,
  };
}


function mapDispatchToProps (dispatch) {
  return {
    onChangeRoom: (room) => dispatch(changeRoom(room)),
  }
}



const store = createStore(rooms)

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)

