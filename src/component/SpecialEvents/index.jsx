import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const SpecialEvent = ({ onCreate }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white text-center">
      <div className="bg-white p-5 rounded shadow">
        <h2 style={{fontSize:`popins,"serif"`}} className="mb-4 text-secondary">No special event is created at this moment</h2>
        <button className="btn btn-primary" onClick={onCreate}>
          Create Event
        </button>
      </div>
    </div>
  );
};

export default SpecialEvent;
