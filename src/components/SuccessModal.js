
import React from 'react'
import {Modal, Button} from 'react-bootstrap'

class SuccessModal extends React.Component {
  state = {
    showModal: false
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }

  handleOpen = () => {
    this.setState({
      showModal: true
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleOpen}>
          Show Modal
        </Button>

        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>BookCritiq</Modal.Title>
          </Modal.Header>
          <Modal.Body>Action successful!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }  
}

export default SuccessModal;