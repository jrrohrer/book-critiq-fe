import React from 'react';
import { Button } from 'react-bootstrap';

class Likes extends React.Component {
  state = {
    likes: 0
  }

  handleClick = () => {
    let newLikes = this.state.likes + 1
    this.setState({
      likes: newLikes
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