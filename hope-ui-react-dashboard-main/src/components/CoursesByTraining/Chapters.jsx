import { faEdit, faEye, faPencil, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";
import { Button } from "react-bootstrap";

const ChaptersList = ({ task, className }) => {
  return (
    <div
      className={classNames(
        className,
        "d-flex flex-between-center hover-actions-trigger py-3 border-bottom"
      )}
    >
        <div className="mb-0 fs-8"> {task.tag}</div>
        <div className="hover-actions end-0">
            <Button variant="phoenix-secondary" className="btn-icon fs-10 me-1">
              <FontAwesomeIcon icon={faEye} />
            </Button>
            <Button variant="phoenix-secondary" className="btn-icon fs-10 me-1">
              <FontAwesomeIcon icon={faEdit} />
            </Button>
            <Button variant="phoenix-secondary" className="btn-icon fs-10">
              <FontAwesomeIcon icon={faTrash} className="text-danger" />
            </Button>
          </div>
      
    </div>
  );
};

export default ChaptersList;
