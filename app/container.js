import React, { PropTypes, Component } from 'react';


export default class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <NavTop />
        <div className="app-main">
          <ChannelSection />
          <CommentBox />
          <SideContent />
        </div>
        <NavBottom />
      </div>
    );
  }
}


// Comment box

class CommentBox extends Component {
  render() {
    return (
      <div className="comment-box">
        Hello I'm in a box
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}


class CommentList extends Component {
  render(){
    return(
      <div className="comment-list">
        <Comment author="Scott">yo yo dawg</Comment>
        <Comment author="ninja turtles">this is awesome!</Comment>
      </div>
    );
  }
}

class CommentForm extends Component {
  render(){
    return (
      <div className="comment-form">
        <textarea placeholder="enter message here..."></textarea>
      </div>
    );
  }
}

class Comment extends Component { 
  render(){
    return (
      <div className="comment">
        <h2 className="comment-author">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
}


// header section

class NavTop extends Component {
  render(){
    return (
      <div className="nav-top">
        NAV TOP 
        <Search />
      </div>
    );
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
      <div className="channel-section">
        I list some stuff on the side
        <ChannelsList />
        <FriendsList />
      </div>
    );
  }
}


class ChannelsList extends Component {
  render(){
    return (
      <div className="channels-list">
        list of channels
      </div>
    );
  }
}

class FriendsList extends Component {
  render(){
    return (
      <div className="friends-list">
        list of friends here
      </div>
    );
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


// footer

class NavBottom extends Component {
  render(){
    return (
      <div className="nav-bottom">
        BOTTOM NAV
      </div>
    );
  }
}
