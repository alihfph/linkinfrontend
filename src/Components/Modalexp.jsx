import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

function Modalforex() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ADD EXP
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="mt-1">
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form className="mx-3 mt-1">
          <Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" placeholder="Role" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="Company" />
          </Form.Group>
          <div className="row">
            <Form.Group className="ml-3">
              <Form.Label>start date</Form.Label>
              <Form.Control type="date" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="ml-5">
              <Form.Label>End date</Form.Label>
              <Form.Control type="date" placeholder="Enter email" />
            </Form.Group>
          </div>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Area</Form.Label>
            <Form.Control type="text" placeholder="Area" />
          </Form.Group>
        </Form>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalforex;
