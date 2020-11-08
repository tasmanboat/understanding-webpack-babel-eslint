import React from 'react';
import ReactDOM from 'react-dom';

// https://reactjs.org/docs/add-react-to-a-website.html
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  // error_trigger(){
  //   bibi = 12; // eslint-disable-line no-undef
  //   let a2 = 223;
  //   a2 = 333; // eslint-disable-line no-unused-vars
  // }
  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button id="LikeButton" onClick={() => this.setState({ liked: true }) }>
        Like
      </button>
    );
  }
}

// ReactDOM.render(
//   <LikeButton />,
//   document.getElementById('like_button_container')
// );

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);

// experimental: devServer hot true
// module.hot.accept();
