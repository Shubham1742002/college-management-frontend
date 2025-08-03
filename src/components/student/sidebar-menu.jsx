import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Sidebar({ onSelect }) {
  return (
    <div style={{ width: '200px', height: '100vh', backgroundColor: '#343a40', color: 'white' }}>
      <Nav className="flex-column p-3">
        <Nav.Link onClick={() => onSelect('dashboard')} style={{ color: 'white' }}>Dashboard</Nav.Link>
        <Nav.Link onClick={() => onSelect('courses')} style={{ color: 'white' }}>Courses</Nav.Link>
        <Nav.Link as={Link} to={"/student-dashboard/profile"}>Profile</Nav.Link>
        <Nav.Link onClick={() => onSelect('settings')} style={{ color: 'white' }}>Settings</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;