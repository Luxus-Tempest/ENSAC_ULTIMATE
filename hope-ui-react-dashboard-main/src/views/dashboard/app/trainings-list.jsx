import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { ColumnDef } from '@tanstack/react-table';

import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import useAdvanceTable from "../../../provider/hook/useAdvanceTable";
import { projects } from "../../../data";
import { pageCss } from "../../../page/PageCss";
import Pagebanner from "../../../components/Pagebanner";
import AdvanceTableProvider from "../../../provider/AdvanceTableProvider";
import GridAndModalItem from "../../../components/GridAndModal";

export const columns = [
  {
    id: "status",
    accessorFn: ({ status }) => status.label,
  },
  {
    accessorKey: "name",
  },
];

const TrainingsList = () => {
  const table = useAdvanceTable({
    data: projects,
    columns,
    pageSize: 10,
    pagination: true,
    sortable: true,
  });

  const classes = pageCss();

  return (
    <>
      <Box className={classes.uni_section}>
        <Container maxWidth="lg">
          <AdvanceTableProvider {...table}>
            <div className="d-flex flex-wrap mb-4 gap-3 gap-sm-6 align-items-center">
              <h2 className="mb-0">
                <span className="me-3">Formations</span>{" "}
                <span className="fw-normal text-body-tertiary">
                  ({projects.length})
                </span>
              </h2>
              <Link
                className="btn btn-primary px-5"
                to="/dashboard/app/add-new-training"
              >
                <FontAwesomeIcon icon={faPlus} className="me-2" />
                Ajouter une formation
              </Link>
            </div>
            <Row className="g-3 mb-9">
              {table
                .getRowModel()
                .rows.map((row) => row.original)
                .map((project) => (
                  <Col xs={12} sm={6} md={4} xxl={3} key={project.id}>
                    <GridAndModalItem project={project} />
                  </Col>
                ))}
            </Row>
          </AdvanceTableProvider>
        </Container>
      </Box>
    </>
  );
};

export default TrainingsList;
