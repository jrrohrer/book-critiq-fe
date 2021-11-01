import React from 'react';
import { Button } from 'react-bootstrap';

class Likes extends React.Component {
  state = {
    likes: 0
  }

  // pulling the likes count from local storage on mount & converting it from a string to a number, then using it to set the state
  componentDidMount = () => {
    const stringLikes = localStorage.getItem('likes')
    const likes = parseInt(stringLikes, 10)
    if (!isNaN(likes)) {
      this.setState({
        likes
      })
    }
  }

  // on update of the component, store the new value of the like count in local storage
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.likes !== this.state.likes) {
      localStorage.setItem('likes', this.state.likes)
    }
  }

  handleClick = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return (
      <div>
        <Button className="shadow m-3" onClick={this.handleClick}>{this.state.likes} Likes</Button>
      </div>
    )
  }
}





export default Likes;