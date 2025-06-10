import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const Dumpsite = () => {
  const [totalTPD, setTotalTPD] = useState(150);
  const [legacyTPD, setLegacyTPD] = useState(5000); // accumulated total
  const [autoTippersToday, setAutoTippersToday] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newWeight, setNewWeight] = useState('');
  const [wasteType, setWasteType] = useState('Dry');

  const wasteData = {
    Dry: 45,
    Wet: 60,
    Sanitary: 15,
    Mixed: 30
  };

  const chartData = {
    labels: ['Dry', 'Wet', 'Sanitary', 'Mixed'],
    datasets: [
      {
        label: 'Waste Collected (TPD)',
        data: Object.values(wasteData),
        backgroundColor: ['#00b894', '#fdcb6e', '#d63031', '#6c5ce7']
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Waste Category Breakdown'
      }
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Waste Type'
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'TPD'
        }
      }
    }
  };

  const handleAutoTipperArrival = () => {
    setShowModal(true);
  };

  const handleSubmitWeight = () => {
    const weight = parseFloat(newWeight);
    if (!isNaN(weight) && weight > 0) {
      setTotalTPD(prev => prev + weight);
      setLegacyTPD(prev => prev + weight);
      setAutoTippersToday(prev => [
        ...prev,
        { time: new Date().toLocaleTimeString(), weight, type: wasteType }
      ]);
      wasteData[wasteType] += weight;
    }
    setShowModal(false);
    setNewWeight('');
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center text-primary">Dumpsite Dashboard</h2>

      <Card className="mb-3">
        <Card.Body>
          <h4>Total Waste Collected Today: {totalTPD} TPD</h4>
          <h5 className='text-danger'>Legacy Waste: {legacyTPD} TPD</h5>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Bar data={chartData} options={chartOptions} />
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <h5>Auto-Tippers Arrived Today: {autoTippersToday.length}</h5>
          <ul>
            {autoTippersToday.map((tipper, idx) => (
              <li key={idx}>
                {tipper.time} - {tipper.type} Waste - {tipper.weight} TPD
              </li>
            ))}
          </ul>
          <Button onClick={handleAutoTipperArrival}>Auto-Tipper Arrived</Button>
        </Card.Body>
      </Card>

      <div className="row">
        {['Dry', 'Wet', 'Mixed'].map(type => (
          <div className="col-md-4" key={type}>
            <Card className="mb-4">
              <Card.Body>
                <h5>{type} Waste Section</h5>
                <p>Collected: {wasteData[type]} TPD</p>
                <Button variant="secondary" onClick={handleAutoTipperArrival}>
                  Upload {type} Waste Weight
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal for entering new weight */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Auto-Tipper Weight Upload</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Waste Type</Form.Label>
              <Form.Select
                value={wasteType}
                onChange={(e) => setWasteType(e.target.value)}
              >
                <option value="Dry">Dry</option>
                <option value="Wet">Wet</option>
                <option value="Sanitary">Sanitary</option>
                <option value="Mixed">Mixed</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Enter Weight (TPD)</Form.Label>
              <Form.Control
                type="number"
                value={newWeight}
                onChange={(e) => setNewWeight(e.target.value)}
                placeholder="e.g., 5"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmitWeight}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dumpsite;
