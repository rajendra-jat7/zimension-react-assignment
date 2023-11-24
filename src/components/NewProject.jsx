import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const NewProjectModal = (props) => {
  const [input, setInput] = useState("");

  const randomId = Math.floor(Math.random() * 93459);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const newProject = { id: randomId, name: input, operations: [] };

  const handleCreate = () => {
    props.setProjects((prev) => [...prev, newProject]);
    setInput("");
  };
  console.log(input);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Operation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter the project name"
          value={input}
        />
        <button onClick={handleCreate}>Create</button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const NewProject = ({ setProjects }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Create New
      </Button>

      <NewProjectModal
        setProjects={setProjects}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default NewProject;
