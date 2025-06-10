import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddEventModal = () => {
  const [show, setShow] = useState(false);
  const [eventData, setEventData] = useState({
    name: '',
    directions: '',
    startDate: '',
    endDate: '',
    photoCount: '',
    locationCount: 1,
    locations: [{ address: '', ward: '', photos: '' }]
  });

  const handleLocationChange = (index, field, value) => {
    const newLocations = [...eventData.locations];
    newLocations[index][field] = value;
    setEventData({ ...eventData, locations: newLocations });
  };

  const handleLocationCountChange = (value) => {
    const count = parseInt(value);
    const newLocations = [...Array(count)].map((_, i) =>
      eventData.locations[i] || { address: '', ward: '', photos: '' }
    );
    setEventData({ ...eventData, locationCount: count, locations: newLocations });
  };

  const handleSubmit = () => {
    console.log('Event Submitted:', eventData);
    setShow(false);
  };

  return (
    <>
    <div className='w-100 m-2'>
      <div className='w-100 text-center'>
        <h2 className='text-primary'>Special Events Section</h2>
        <p className='text-mutted'> In this section ULB can create a new Event this events will be shown to the SI/ Jamdar App directly, ULB can monitor all the activities </p>
      </div>
      <div style={{width:"80%"}} className='d-flex justify-content-end align-items-end'>
        
      <Button className='' variant="warning" onClick={() => setShow(true)}>
        Add New Event
      </Button>
      </div>
      </div>

      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                value={eventData.name}
                onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Directions</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={eventData.directions}
                onChange={(e) => setEventData({ ...eventData, directions: e.target.value })}
              />
            </Form.Group>

            <Row className="mb-3">
              <Col>
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  value={eventData.startDate}
                  onChange={(e) => setEventData({ ...eventData, startDate: e.target.value })}
                />
              </Col>
              <Col>
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  value={eventData.endDate}
                  onChange={(e) => setEventData({ ...eventData, endDate: e.target.value })}
                />
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Total Photos</Form.Label>
              <Form.Control
                type="number"
                value={eventData.photoCount}
                onChange={(e) => setEventData({ ...eventData, photoCount: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Number of Locations</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={eventData.locationCount}
                onChange={(e) => handleLocationCountChange(e.target.value)}
              />
            </Form.Group>

            {eventData.locations.map((location, idx) => (
              <div key={idx} className="border p-3 mb-3 rounded">
                <h6>Location {idx + 1}</h6>
                <Form.Group className="mb-2">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={location.address}
                    onChange={(e) => handleLocationChange(idx, 'address', e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Ward Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={location.ward}
                    onChange={(e) => handleLocationChange(idx, 'ward', e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Photos to Upload</Form.Label>
                  <Form.Control
                    type="number"
                    value={location.photos}
                    onChange={(e) => handleLocationChange(idx, 'photos', e.target.value)}
                  />
                </Form.Group>
              </div>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Save Event
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddEventModal;
