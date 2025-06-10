import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserChargesTable from './UserChargeTable';
import municipalityCharges from "./userChargeList";
const UserChargeDetails =()=>{
     const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [allUserCharges,setAllUserCharges]=useState(municipalityCharges);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - 5 + i); // 5 years back and 5 ahead

  const handleMonthChange = (e) => setSelectedMonth(e.target.value);
  const handleYearChange = (e) => setSelectedYear(e.target.value);
  useEffect(()=>{
    // Here we will call the back end when the entries are uploded then we will use filter
    if(selectedMonth!==''){
      const filterData=municipalityCharges.filter(e=>e.month===selectedMonth);
      setAllUserCharges(filterData);
    }
    if(selectedMonth==''){
      setAllUserCharges(municipalityCharges);
    }
  },[selectedMonth])

    return(
        <div className="w-100 my-2 p-2">
           <h2  className="text-center text-primary">User Charges Collected through Citizens</h2>
           <p className="text-muted text-center">Here details of all the user charges collected through citizen by clean ULB citizen app through door to door collection , Collected through collection of C&D Collection  and collection of Septage </p>
            <div className="w-100 d-flex justify-content-center align-item-center gap-3">
                <div className="w-25 bg-primary text-center p-2 text-white rounded d-flex justify-content-center align-item-center">
                    Total User charge collected
                </div>
                <div className="w-25 bg-info text-center p-2 text-black rounded d-flex justify-content-center align-item-center">
                User collected door to door
                </div>
                <div className="w-25 bg-warning text-center p-2 text-white rounded d-flex justify-content-center align-item-center">
                    User charge collected C&D , Faecal Sludge collection
                </div>
            </div>
            <div style={{height:"auto"}} className="w-100 border rounded my-2">
                   <div className="container mt-4">
      <h5>Select Month and Year</h5>
      <div className="row g-3 align-items-center">
        <div className="col-md-6">
          <select
            className="form-select"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            <option value="">Select Month</option>
            {months.map((month, index) => (
              <option key={index} value={month}>{month}</option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      {selectedMonth && selectedYear && (
        <div className="mt-3 alert alert-info">
          Selected: <strong>{selectedMonth} {selectedYear}</strong>
        </div>
      )}
    </div>
            </div>
            <UserChargesTable data={allUserCharges}/>
        </div>
    )
}
export default UserChargeDetails;