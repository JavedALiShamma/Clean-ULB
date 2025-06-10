import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaDumpster, FaRecycle, FaLeaf, FaToilet } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const plantData = [
  {
    title: 'Dumpsite',
    address: 'Near Highway, Sector 5, Bikaner',
    route: '/dumpsite',
    icon: <FaDumpster size={40} className="text-danger" />
  },
  {
    title: 'MRF Plant',
    address: 'MRF Complex, Industrial Area, Bikaner',
    route: '/mrf-plant',
    icon: <FaRecycle size={40} className="text-success" />
  },
  {
    title: 'Compost Plant',
    address: 'Green Zone, Ward 12, Bikaner',
    route: '/compost-plant',
    icon: <FaLeaf size={40} className="text-success" />
  },
  {
    title: 'FSTP Plant',
    address: 'Sanitation Lane, Ward 8, Bikaner',
    route: '/fstp-plant',
    icon: <FaToilet size={40} className="text-primary" />
  }
];

const DashboardContent = () => {
  const navigate = useNavigate();

  return (
    <Container className="my-4">
      <Row className="g-4">
        {plantData.map((plant, idx) => (
          <Col key={idx} md={12}>
            <Card
              className="shadow-sm border-0 rounded-4 p-3 card-hover transition"
              onClick={() => navigate("/ULBDashboard/Plants&Dumpsite" +plant.route)}
              style={{ cursor: 'pointer', background: '#f8f9fa', transition: 'transform 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <Card.Body className="d-flex align-items-center gap-3">
                {plant.icon}
                <div>
                  <Card.Title className="fs-4 fw-bold text-primary">
                    {plant.title}
                  </Card.Title>
                  <Card.Text className="text-secondary">
                    Address: {plant.address}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const DummyPage = ({ title }) => (
  <div className="p-5 text-center">
    <h2>{title}</h2>
    <p>This is a placeholder page for {title}.</p>
  </div>
);

const PlantsAndDumpsiteDashboard = () => {
  return (
    <DashboardContent/>
  );
};

export default PlantsAndDumpsiteDashboard;
