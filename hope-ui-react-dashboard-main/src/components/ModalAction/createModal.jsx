import { Col, Form, Modal, Row, Button } from "react-bootstrap";
import boardIcon from "../../assets/board.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";

const CreateCourseModal = ({ show, handleClose, type, trainingID, course }) => {
  
  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Header className="p-4 d-flex gap-2 border-0">
        <img src={boardIcon} height={24} width={18} />
        <h3 className="mb-0 text-body-emphasis fw-semibold flex-1">
          ENSA ACADEMY
        </h3>
        <Button className="p-0" onClick={handleClose}>
          <FontAwesomeIcon icon={faXmark} className="fs-7" />
        </Button>
      </Modal.Header>
      <Modal.Body className="p-4 pt-0">
        <p className="text-body-tertiary fw-semibold fs-9">
          {type === "create"
            ? "Enregistrer un cours dans votre formation pour l'enrichir"
            : "Modifier le cours"}
        </p>

        <Row className="g-2 mb-2">
          <Col xs={12}>
            <Form.Control
              type="text"
              placeholder="Nom du cours"
              name="title"
              value={type === "edit" ? course?.tag : ""}
              //dans notre cas c'est sera course.title.
              // J'ai mis tag pour respecter les noms de mes data static
            />
          </Col>

          <Col xs="auto" sm={9} className="flex-1">
            <Button variant="primary" className="w-100">
              <FontAwesomeIcon icon={faEnvelope} className="fs-10 me-sm-2" />
              <span className="d-none d-sm-inline-block">
                {type === "create" ? "Créer" : "Modifier le cours"}
              </span>
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default CreateCourseModal;
