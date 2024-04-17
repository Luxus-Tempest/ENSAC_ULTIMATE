import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import React from "react";
import classNames from "classnames";

import { faPen, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import ModalLeft from "./ModalLeft";
import ChaptersList from "./Chapters";
import { Chapters } from "../../dataChapter";
import { Button } from "react-bootstrap";

const CourseList = ({ handleClose, item }) => {
  return (
    <ModalLeft
      open={!!item}
      onHide={handleClose}
      className="todolist-offcanvas"
      placement="end"
      fixed
      backdropClassName="opacity-0"
    >
      {item && (
        <>
          <div className="p-5 p-md-6">
            <div className="d-flex flex-between-center mb-4 gap-3">
              <h2 className="fw-bold fs-6 mb-0 text-body-highlight line-clamp-1">
                {item.tag}
              </h2>
              <Button
                variant="phoenix-secondary"
                onClick={handleClose}
                className="btn-icon flex-shrink-0"
              >
                <FontAwesomeIcon icon={faXmark} />
              </Button>
            </div>
            <div className="mb-6">
              <div className="d-flex align-items-center mb-3">
                <h4 className="text-body me-3">Description</h4>
                <Button variant="link" className="text-decoration-none p-0">
                  <FontAwesomeIcon icon={faPen} />
                </Button>
              </div>
              <p className="text-body-highlight mb-0">
                The female circus horse-rider is a recurring subject in
                Chagall’s work. In 1926 the art dealer Ambroise Vollard invited
                Chagall to make a project based on the circus. They visited
                Paris’s historic Cirque d’Hiver Bouglione together; Vollard lent
                Chagall his private box seats. Chagall completed 19 gouaches
                Chagall’s work. In 1926 the art dealer Ambroise Vollard invited
                Chagall to make a project based on the circus.
              </p>
            </div>
            <div className="mb-6">
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h4 className="mb-3">Chapitres du cours</h4>
                <Button variant="phoenix-primary">
                  <FontAwesomeIcon icon={faPlus} className="me-1" />
                  Ajouter un chapitre à ce cours
                </Button>
              </div>
              <div className="mb-3">
                {Chapters.map((item, index) => (
                  <ChaptersList
                    key={item.task}
                    task={item}
                    className={classNames({
                      "border-top border-translucent": index === 0,
                    })}
                  />
                ))}
              </div>
            </div>

            <div className="text-end mb-9">
              <Button variant="phoenix-primary">
                <FontAwesomeIcon icon={faPlus} className="me-1" />
                Ajouter un chapitre à ce cours
              </Button>
            </div>
          </div>
        </>
      )}
    </ModalLeft>
  );
};

export default CourseList;
