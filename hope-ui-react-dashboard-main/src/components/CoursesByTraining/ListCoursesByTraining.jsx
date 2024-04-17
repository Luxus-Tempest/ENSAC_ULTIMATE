import { faFilter, faPlus, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

// import SearchBox from 'components/common/SearchBox';
// import TodoItemDetailsOffcanvas from 'components/modules/project-management/todo-list/TodoItemDetailsOffcanvas';
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ChaptersListItem from "./ChaptersByCoursesItem";
import { CoursesList } from "../../dataChapter";
import CourseList from "./CourseList";
import CreateCourseModal from "../ModalAction/createModal";
import { useParams } from "react-router-dom";

const ListCoursesByTraining = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [openInviteModal, setOpenInviteModal] = useState(false);
  const { id } = useParams();
  const TrainingID = id ;

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedItem]);

  return (
    <div style={{ marginTop: "30px" }} className="mb-9">
      <h2 className="mb-4">
        Cours de la formation : ici nom de la f..
        <span className="text-body-tertiary fw-normal">(5 Cours)</span>
      </h2>
      <div className="d-flex align-items-center flex-wrap gap-x-5 gap-y-3 mb-3">
        {/* <SearchBox placeholder="Search tasks" style={{ maxWidth: '30rem' }} /> */}
        <Button
        variant="phoenix-primary"
        onClick={() => setOpenInviteModal(!openInviteModal)}
      >
        <FontAwesomeIcon icon={faPlus} className="me-1" />
        Ajouter un cours à cette formation
      </Button>
        <div>
          <Button
            variant="link"
            className="p-0 fs-9 text-body-tertiary text-decoration-none me-3"
            startIcon={
              <FontAwesomeIcon icon={faFilter} className="fs-10 me-1" />
            }
          >
            7 Cours enregistrés
          </Button>
        </div>
      </div>
      <div className="todolist-container ms-n1 ps-1 scrollbar">
        {CoursesList.map((item, index) => (
          <ChaptersListItem
            key={item.tag}
            content={item}
            className={classNames({
              "border-top": index === 0,
            })}
            fullLayoutBreakpoints={["md"]}
            onClick={(item) => setSelectedItem(item)}
          />
        ))}
      </div>


      <CourseList
        handleClose={() => setSelectedItem(null)}
        item={selectedItem}
      />
      <CreateCourseModal
        show={openInviteModal}
        handleClose={() => setOpenInviteModal(false)}
        type={"create"}
        TrainingID={TrainingID}
      />
    </div>
  );
};

export default ListCoursesByTraining;
