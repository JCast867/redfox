import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


function ServiceItem({ title, description }) {
  return (
    <ListGroup.Item>
      <div className="d-flex flex-column">
        <h6 className="mb-1">{title}</h6>
        <small className="text-muted">{description}</small>
      </div>
    </ListGroup.Item>
  );
}

export default ServiceItem;