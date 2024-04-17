import {
  faChevronRight,
  faCreditCard,

  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import CardViewModal from "./CardViewModal";
import {  Button, Card, ProgressBar } from "react-bootstrap";
import React, { useState } from "react";
import Avatar from "./Avatar";
import AvatarDropdown from "./AvatarDropdown";
import useProjectProgress from "./useProjectProgress";

const CardViewItem = ({ project }) => {
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const { progress, variant } = useProjectProgress(project);

  return (
    <>
      <Card className="h-100 hover-actions-trigger">
        <Card.Body>
          <div className="d-flex align-items-center">
            <h4 className="mb-2 line-clamp-1 lh-sm flex-1 me-5">
              {project.name}
            </h4>
            <div className="hover-actions top-0 end-0 mt-4 me-4">
              <Button
                variant="primary"
                className="btn-icon flex-shrink-0"
                onClick={() => setOpenDetailsModal(true)}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
          </div>

          <div className="d-flex align-items-center mb-2">
            <FontAwesomeIcon
              icon={faUser}
              className="me-2 text-body-tertiary fs-9 fw-extra-bold"
            />
            <p className="fw-bold mb-0 text-truncate lh-1">
              Ctaegorie :{" "}
              <span className="fw-semibold text-primary ms-1">
                {" "}
                Informatique
              </span>
            </p>
          </div>
          <div className="d-flex align-items-center mb-4">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="me-2 text-body-tertiary fs-9 fw-extra-bold"
            />
            <p className="fw-bold mb-0 text-truncate lh-1">
              Niveau :{" "}
              <span className="text-body-emphasis ms-1">Difficile</span>
            </p>
          </div>
          <div className="d-flex justify-content-between text-body-tertiary fw-semibold">
            <p className="mb-2"> Progression</p>
            <p className="mb-2 text-body-emphasis">{progress}%</p>
          </div>
          <ProgressBar
            now={progress}
            className={classNames("flex-1 bg-secondary")}
            variant={"bg-body-success"}
          />

          <div>
            <div className="d-flex d-lg-block d-xl-flex justify-content-between align-items-center mt-3">
              <div className="d-flex gap-1">
                <Avatar.Group total={1} size="m">
                  {project.assigness.slice(0, 1).map((assigne) => (
                    <AvatarDropdown user={assigne} size="m" key={assigne.id} />
                  ))}
                </Avatar.Group>
              </div>


            </div>
          </div>
        </Card.Body>
      </Card>

      <CardViewModal
        show={openDetailsModal}
        handleClose={() => setOpenDetailsModal(false)}
        project={project}
      />
    </>
  );
};

export default CardViewItem;
