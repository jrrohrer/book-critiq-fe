import React from 'react'
import {Modal, Button} from 'react-bootstrap'

const SuccessModal = (props) => {

  return (
    <div>
      {console.log(props.isOpen)}
      <Modal show={props.isOpen}>
        <Modal.Header>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thanks for your contribution!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.toggle}>OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default SuccessModal;