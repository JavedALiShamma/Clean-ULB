import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const SpecialEvent = ({ onCreate }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white text-center">
      {/* <div className="bg-white p-5 rounded shadow">
        <h2 style={{fontSize:`popins,"serif"`}} className="mb-4 text-secondary">No special event is created at this moment</h2>
        <button className="btn btn-primary" onClick={onCreate}>
          Create Event
        </button>
      </div> */}
      <div className="w-100 p-2">
          <div className="w-100 border rounded position-relative bg-white p-3 shadow">
            <h5 className="text-center text-primary">Plant's Status and Visit details </h5>
            <h5 className="text-start text-success">Plant Name : FSTP Plant </h5>
            <div className="d-flex  justify-content-between align-items-center">
            <p className="text-start w-25 ">Status : Civil Work is Completed , Weghting Bridge is installed , Road to the FSTP Plant is pending, ULB have already Awarded a tender for the Road constructions    </p>
            <p style={{fontSize:12}} className="position-absolute left-1 bottom-0 text-muted m-2"> Updated on : 23/03/2025 Time : 12:04</p>
            <p style={{right:10 , bottom:0}} className="text-muted position-absolute">Created By : Deputy Directorate Bikaner</p>
            <div className="w-75 d-flex flex-column justify-content-center align-items-center gap-2">
              <button onClick={toggleVisibility} className="btn btn-primary"> View Photos </button>
              <button className="btn btn-danger"> Downoad details  </button>
            </div>
            <div className="badge bg-success text-white p-2 rounded">
              <span className="">Updated</span>
            
            </div>
            </div>
          </div>
      </div>
      {isVisible && <div className="w-75 h-75 my-5 d-flex flex-column justify-content-center align-items-center bg-light p-3 position-absolute top-0 left-0"> 
        <h5 className="w-100 text-center text-primary">Photos of FSTP plant</h5>
        <div className="w-100">
          <img src="" alt="" />
        </div>
        </div>}
    </div>
  );
};

export default SpecialEvent;
