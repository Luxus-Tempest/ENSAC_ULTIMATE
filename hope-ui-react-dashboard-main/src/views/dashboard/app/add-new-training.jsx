import React, { useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Dropzone from "../../../components/DropZone/Dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddNewTraining = () => {
  //const [eventDescription, setEventDescription] = useState("");
  //console.log('Description :', eventDescription)

  const [files, setFiles] = useState([]);
  const [video, setVideo] = useState([]);

  const trainingIsCreated = true;

  const handleDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  const handleDropVideo = (acceptedFiles) => {
    console.log(acceptedFiles);
    setVideo(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  return (
    <Form className="m-9 " style={{ padding: "20px", marginTop: "50px" }}>
      <Row className="justify-content-between align-items-end g-3 mb-5 mt-9">
        <Col sm={8}>
          {" "}
          <p className="mb-0 mt-3">CREER UNE NOUVELLE FORMATION</p>
        </Col>
        {trainingIsCreated && (
          <Col sm={4}>
            {" "}
            <Button variant="primary" className="w-100 mb-3">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Ajouter un cours à cette formation
            </Button>
          </Col>
        )}
        <Col sm={6}>
          <FloatingLabel
            controlId="floatingEventInput"
            label="Nom de la formation"
          >
            <Form.Control type="text" placeholder="" />
          </FloatingLabel>
        </Col>
        <Col sm={6}>
          <FloatingLabel controlId="floatingSelectTask" label="Categories">
            <Form.Select>
              <option>Choisissez une catégorie</option>
              <option value="Informatique">Informatique</option>
              <option value="Réseau & Télécommunication<">
                Réseau & Télécommunication
              </option>
              <option value="Intelligence artificielle">
                Intelligence artificielle
              </option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        {/* <Col sm={6}>
          <FloatingLabel controlId="floatingSelectPrivacy" label="topic">
            <Form.Select>
              <option>Select topic</option>
              <option value="1">Data Privacy One</option>
              <option value="2">Data Privacy Two</option>
              <option value="3">Data Privacy Three</option>
            </Form.Select>
          </FloatingLabel>
        </Col> */}
        {/* <Col xs={12} className="mt-4">
          <Form.Check type="radio" id="online" className="form-check-inline">
            <Form.Check.Input
              type="radio"
              name="statusRadio"
              value="option1"
              defaultChecked
            />
            <Form.Check.Label htmlFor="online">Online</Form.Check.Label>
      </Form.Check>*/}
        <Col sm={6} md={12} className="gy-1">
          <code style={{ marginRight: "20px" }}>Niveau de difficulté</code>
          <Form.Check type="radio" id="offline" className="form-check-inline">
            <Form.Check.Input type="radio" name="statusRadio" value="option2" />
            <Form.Check.Label htmlFor="offline">Débutant</Form.Check.Label>
          </Form.Check>
          <Form.Check type="radio" id="both" className="form-check-inline">
            <Form.Check.Input type="radio" name="statusRadio" value="option3" />
            <Form.Check.Label htmlFor="both">Intermédiaire</Form.Check.Label>
          </Form.Check>
          <Form.Check type="radio" id="both" className="form-check-inline">
            <Form.Check.Input type="radio" name="statusRadio" value="option3" />
            <Form.Check.Label htmlFor="both">Expert</Form.Check.Label>
          </Form.Check>
        </Col>
        {/* 
        <Col sm={6} md={12} className="gy-1">
          <FloatingLabel controlId="floatingVenueInput" label="Venue">
            <Form.Control type="text" placeholder="Venue" />
          </FloatingLabel>
        </Col> */}

        <Col xs={12} className="gy-6">
          <FloatingLabel controlId="eventDescription" label="Description">
            <Form.Control
              as="textarea"
              placeholder="Description"
              style={{ height: "128px" }}
            />
          </FloatingLabel>
        </Col>

        <Col xs={6} className="gy-6">
          <code>Charger une image de couverture</code>
          <Dropzone onDrop={handleDrop} />
          {files.map((file) => (
            <div key={file.name}>
              <img
                src={file.preview}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                alt="preview"
                className="mt-1 rounded"
              />
            </div>
          ))}
        </Col>
        <Col xs={6} className="gy-6">
          <code>Charger une vidéo de couverture</code>
          <Dropzone onDrop={handleDropVideo} />
          {video.map((file) => (
            <div key={file.name}>
              <img
                src={file.preview}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                alt="preview"
                className="mt-1 rounded"
              />
            </div>
          ))}
        </Col>
        <Button variant="primary" className="w-100 mb-3">
          Charger
        </Button>
      </Row>
    </Form>
  );
};

export default AddNewTraining;
