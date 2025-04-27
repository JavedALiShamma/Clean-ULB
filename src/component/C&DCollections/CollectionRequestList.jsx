import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CollectionRequestsList = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Ravi Kumar",
      address: "45 Park Lane",
      dateTime: "2025-04-25 10:00 AM",
      location: "Sector 5, Near Water Tank",
      ward: "Ward 3",
      requestTime: "2025-04-25 08:45 AM",
      status: "Pending"
    },
    {
      id: 2,
      name: "Anjali Sharma",
      address: "12 MG Road",
      dateTime: "2025-04-24 04:30 PM",
      location: "Sector 10, Main Market",
      ward: "Ward 7",
      requestTime: "2025-04-24 03:00 PM",
      status: "Collected"
    }
  ]);

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-warning text-dark';
      case 'Collected':
        return 'bg-success';
      case 'Assigned':
        return 'bg-info text-dark';
      default:
        return 'bg-secondary';
    }
  };

  const handleAssign = (id) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: 'Assigned' } : req
      )
    );
  };

  return (
    <div className="container my-4">
      <h3 className="mb-4 text-center text-success">Construction & Demolition Collection Requests</h3>

      {requests.length === 0 ? (
        <div className="alert alert-info text-center">No requests available.</div>
      ) : (
        requests.map((request) => (
          <div key={request.id} className="card mb-4 shadow-sm border-1">
            <div className="card-body">
              <h5 className="card-title text-primary">Request ID: {request.id}</h5>
              <p><strong>Name:</strong> {request.name}</p>
              <p><strong>Address:</strong> {request.address}</p>
              <p><strong>Date & Time:</strong> {request.dateTime}</p>
              <p><strong>Location:</strong> {request.location}</p>
              <p><strong>Ward:</strong> {request.ward}</p>
              <p><strong>Request Time:</strong> {request.requestTime}</p>
              <p>
                <strong>Status:</strong>{' '}
                <span className={`badge ${getStatusBadgeClass(request.status)}`}>
                  {request.status}
                </span>
              </p>

              {request.status === 'Pending' && (
                <button
                  className="btn btn-outline-primary mt-2"
                  onClick={() => handleAssign(request.id)}
                >
                  Assign to SI / Jamadar
                </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CollectionRequestsList;
