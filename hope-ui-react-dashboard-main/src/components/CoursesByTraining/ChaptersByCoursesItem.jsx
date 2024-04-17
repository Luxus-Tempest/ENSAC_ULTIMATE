import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import classNames from "classnames";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import CreateCourseModal from "../ModalAction/createModal";

const ChaptersByCoursesItem = ({
  content,
  className,
  labelClassName,
  halfLayoutBreakpoints = [],
  fullLayoutBreakpoints = [],
  onClick,
}) => {
  const [selected, setSelected] = useState(content.completed);
  const [openInviteModal, setOpenInviteModal] = useState(false);

  const course = {
    title: "test Edit course",
  };

  const handleClick = (item) => {
    if (onClick) {
      onClick(item);
    } else {
      setSelected(!selected);
    }
  };

  const getBreakpointClasses = useCallback(
    (className, values) =>
      [
        ...halfLayoutBreakpoints.map(
          (breakpoint) => `${className}-${breakpoint}-${values[0]}`
        ),
        ...fullLayoutBreakpoints.map(
          (breakpoint) => `${className}-${breakpoint}-${values[1]}`
        ),
      ].join(" "),
    [halfLayoutBreakpoints, fullLayoutBreakpoints]
  );

  return (
    <>
      <div
        className={classNames(
          className,
          "d-flex align-items-center hover-actions-trigger border-bottom border-translucent gap-2 todolist-item"
        )}
      >
        <Row className="justify-content-between align-items-center btn-reveal-trigger border-translucent gx-0 flex-1 gy-1">
          <Col
            xs={12}
            {...fullLayoutBreakpoints?.reduce((acc, val) => {
              acc[val] = "auto";
              return acc;
            }, {})}
            {...halfLayoutBreakpoints?.reduce((acc, val) => {
              acc[val] = 12;
              return acc;
            }, {})}
          >
            <div className="d-flex align-items-center lh-1 gap-2">
              <h5
                className={classNames(
                  labelClassName,
                  "mb-0 line-clamp-1 fw-semibold text-body-tertiary cursor-pointer",
                  {
                    "text-decoration-line-through text-body-quaternary":
                      selected,
                  }
                )}
                onClick={() => handleClick(content)}
              >
                {content.tag}
              </h5>
            </div>
          </Col>
          <Col
            xs={12}
            {...fullLayoutBreakpoints?.reduce((acc, val) => {
              acc[val] = "auto";
              return acc;
            }, {})}
            {...halfLayoutBreakpoints?.reduce((acc, val) => {
              acc[val] = 12;
              return acc;
            }, {})}
          >
            <div className="d-flex lh-1 align-items-center">
              <p
                className={classNames(
                  getBreakpointClasses("me", [2, 3]),
                  "text-body-tertiary fs-10 me-2 mb-0"
                )}
              >
                {content.date}
              </p>
              <div
                className={classNames(
                  getBreakpointClasses("hover", ["show", "hide"])
                )}
              >
                <p
                  className={classNames(
                    getBreakpointClasses("ps", [0, 3]),
                    "text-body-tertiary fs-10 ps-lg-3 border-start-lg fw-bold mb-md-0 mb-0"
                  )}
                >
                  {content.time}
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div
          className={classNames(
            getBreakpointClasses("d", ["none", "block"]),
            "d-none end-0 position-absolute"
          )}
          style={{ top: "23%" }}
        >
          <div className="hover-actions end-0">
            <Button
              variant="phoenix-secondary"
              className="btn-icon fs-10 me-1"
              onClick={() => setOpenInviteModal(!openInviteModal)}
            >
              <FontAwesomeIcon icon={faEdit} />
            </Button>
            <Button variant="phoenix-secondary" className="btn-icon fs-10">
              <FontAwesomeIcon icon={faTrash} className="text-danger" />
            </Button>
          </div>
        </div>
      </div>

      <CreateCourseModal
        show={openInviteModal}
        handleClose={() => setOpenInviteModal(false)}
        type={"edit"}
        course={content}
      />
    </>
  );
};

export default ChaptersByCoursesItem;
