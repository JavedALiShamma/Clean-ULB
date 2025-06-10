import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const ITEMS_PER_PAGE = 10;

const UserChargesTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const totalCollected = data.reduce((sum, entry) => sum + entry.amount, 0);

  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleExportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, 'UserCharges');
    const excelBuffer = XLSX.write(workbook, { type: 'array', bookType: 'xlsx' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

    saveAs(blob, 'UserCharges.xlsx');
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => (
    <nav className="mt-3">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => (
          <li
            key={i}
            className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
          >
            <button className="page-link" onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Municipality User Charges</h4>
        <button className="btn btn-success" onClick={handleExportToExcel}>
          Export to Excel
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Payment ID</th>
              <th>Amount (₹)</th>
              <th>Category</th>
              <th>Date</th>
              <th>Month</th>
              <th>Year</th>
              <th>Address</th>
              <th>Ward No</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((entry, index) => (
              <tr key={entry.paymentId}>
                <td>{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.paymentId}</td>
                <td>{entry.amount}</td>
                <td>{entry.category}</td>
                <td>{new Date(entry.date).toLocaleString()}</td>
                <td>{entry.month}</td>
                <td>{entry.year}</td>
                <td>{entry.address}</td>
                <td>{entry.wardNo}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="table-light">
            <tr>
              <td colSpan="3"><strong>Total Collected</strong></td>
              <td colSpan="7"><strong>₹{totalCollected.toLocaleString()}</strong></td>
            </tr>
          </tfoot>
        </table>
      </div>

      {renderPagination()}
    </div>
  );
};

export default UserChargesTable;
