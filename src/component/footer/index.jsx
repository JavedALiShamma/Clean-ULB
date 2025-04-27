import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppFooter = () => {
  return (
    <footer style={{background:"#232F3E"}} className="text-white py-4 mt-5">
      <div className="container text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <div>
          <a href="/about" className="text-white mx-2 text-decoration-none">About</a>
          <a href="/contact" className="text-white mx-2 text-decoration-none">Contact</a>
          <a href="/privacy" className="text-white mx-2 text-decoration-none">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
