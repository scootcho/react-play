import React, { PropTypes, Component } from 'react';


export default class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <div className="app-main">
          <ChannelSection />
          <CommentBox />
          <SideContent />
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}


// Comment box

class CommentBox extends Component {
  render() {
    return (
      <div className="commentbox">
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
      <div className="commentList">
        <Comment author="Scott">yo yo dawg</Comment>
        <Comment author="ninja turtles">this is awesome!</Comment>
      </div>
    );
  }
}

class CommentForm extends Component {
  render(){
    return (
      <div className="commentForm">
        <textarea placeholder="enter message here..."></textarea>
      </div>
    );
  }
}

class Comment extends Component { 
  render(){
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
}


// header section

class Header extends Component {
  render(){
    return (
      <div className="header">
        I'm Header
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
      <div className="channelSection">
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
      <div className="channelsList">
        list of channels
      </div>
    );
  }
}

class FriendsList extends Component {
  render(){
    return (
      <div className="friendsList">
        list of friends here
      </div>
    );
  }
}


// side content

class SideContent extends Component {
  render(){
    return (
      <div className="sideContent">
        Hi i'm side content
      </div>
    );
  }
}


