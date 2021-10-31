
import React from 'react'
import {Modal, Button} from 'react-bootstrap'

const SignUpModal = (props) => {

  return (
    <div>
      {console.log(props.isOpen)}
      <Modal show={props.isOpen}>
        <Modal.Header>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>Coming soon!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.toggle}>OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default SignUpModal;