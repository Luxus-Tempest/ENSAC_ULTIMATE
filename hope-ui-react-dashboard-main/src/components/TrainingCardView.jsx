import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import AdvanceTableProvider from "../provider/AdvanceTableProvider";
import useAdvanceTable from "../provider/hook/useAdvanceTable";
import { Row, Col } from "react-bootstrap";
import CardViewItem from "./CardViewItem";
import { projects } from "../data";
import TopSection from "./TopSection";

export const columns = [
  {
    id: "status",
    accessorFn: ({ status }) => status.label,
  },
  {
    accessorKey: "name",
  },
];

const TrainingCardView = () => {
  const table = useAdvanceTable({
    data: projects,
    columns,
    pageSize: 10,
    pagination: true,
    sortable: true,
  });

  return (
    <div>
      <AdvanceTableProvider {...table}>
        <h3 className="mt-7">Mes formations en cours</h3>
        <TopSection activeView="card" />
        <Row className="g-3 mb-9">
          {table
            .getRowModel()
            .rows.map((row) => row.original)
            .map((project) => (
              <Col xs={12} sm={6} xl={4} xxl={3} key={project.id}>
                <CardViewItem project={project} />
              </Col>
            ))}
        </Row>
      </AdvanceTableProvider>
    </div>
  );
};

export default TrainingCardView;
