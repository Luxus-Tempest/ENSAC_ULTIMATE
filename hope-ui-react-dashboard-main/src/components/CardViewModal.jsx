import React from "react";
import { Badge, Button, Col, Modal, ProgressBar, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { actionItems, addToCardItems, comments } from "../data";
import classNames from "classnames";

import CoverImage from "./CoverImage";
import { faFilter, faPlus, faSort } from "@fortawesome/free-solid-svg-icons";
import AvatarDropdown from "./AvatarDropdown";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import useProjectProgress from "./useProjectProgress";

const CardViewModal = ({ handleClose, show, project }) => {
  const { progress, bgClassName, variant } = useProjectProgress(project);
  return (
    <Modal show={show} onHide={handleClose} size="lg" className="p-0">
      <Modal.Header className="position-relative p-0 overflow-hidden">
        <CoverImage handleClose={handleClose} />
      </Modal.Header>
      <Modal.Body className="p-5 px-md-6 pb-md-6">
        <Row className="g-5">
          <Col xs={12} xl={9}>
            <div className="mb-4">
              <h3 className="fw-bolder lh-sm">{project.name}</h3>
              <p className="text-body-highlight fw-semibold mb-0">
                In list
                <Link className="ms-1 fw-bold" to="#!">
                  Commentaire
                </Link>
              </p>
            </div>

            <div className="d-flex align-items-center mb-4">
              <p className="text-body-highlight fw-700 mb-0 me-2">
                {progress}%
              </p>

              <ProgressBar
                now={progress}
                className={classNames("flex-1", bgClassName)}
                variant={variant}
              />
            </div>

            <div className="mb-3">
              <h6 className="text-body-secondary mb-2">Instructeur</h6>
              <div className="d-flex gap-1">
                {project.assigness.slice(0, 1).map((member) => (
                  <AvatarDropdown user={member} size="m" key={member.id} />
                ))}
                <Button
                  variant="phoenix-secondary"
                  className="btn-circle"
                  size="sm"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </div>
            </div>

            <div className="bg-body-highlight rounded-2 px-4 mb-3">
              <div className="mb-1">
                {comments.map((comment, index) => (
                  <Comment
                    comment={comment}
                    className={
                      index !== comments.length - 1
                        ? "border-bottom border-translucent"
                        : undefined
                    }
                    key={comment.id}
                  />
                ))}
              </div>
            </div>
            <div className="pb-3 border-bottom border-translucent mb-6">
              <CommentForm />
            </div>

            <div className="mb-7">
              <div className="mb-4">LIST OF COURSES</div>
            </div>
          </Col>

          <Col xs={12} xl={3}>
            <h5 className="text-body-secondary mb-3">Add to card</h5>
            <div className="mb-6 d-flex flex-column gap-2">
              {addToCardItems.map((item) => (
                <Button
                  key={item.label}
                  variant="subtle-secondary"
                  startIcon={
                    <FontAwesomeIcon icon={item.icon} className="me-2" />
                  }
                  className="w-100 text-start"
                  size="sm"
                >
                  {item.label}
                </Button>
              ))}
            </div>
            <h5 className="text-body-secondary mb-3">Actions</h5>
            <div className="d-flex flex-column gap-2">
              {actionItems.map((item) => (
                <Button
                  variant="subtle-secondary"
                  startIcon={
                    <FontAwesomeIcon icon={item.icon} className="me-2" />
                  }
                  className="w-100 text-start"
                  size="sm"
                  key={item.label}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default CardViewModal;
