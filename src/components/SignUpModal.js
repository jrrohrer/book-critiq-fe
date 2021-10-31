
import React from 'react'
import {Modal, Button} from 'react-bootstrap'

const SignUpModal = (props) => {

  return (
    <div>
      {console.log(props.isOpen)}
      <Modal show={props.isOpen}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>Coming soon!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.toggle}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default SignUpModal;