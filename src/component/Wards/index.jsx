import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaToilet, FaTrashAlt, FaTruck } from 'react-icons/fa';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import toiletSeat from "../../assets/icons/toiletSeat.png"
import litterBinsPng from "../../assets/icons/litterBin.png"
import autoTipperPng from "../../assets/icons/autoTipperLogo.png"
const WardStatusProgress = (props) => {
  const [toiletProgress, setToiletProgress] = useState(0);
  const [binProgress, setBinProgress] = useState(0);
  const [tipperProgress, setTipperProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setToiletProgress(p => (p >= 100 ? 100 : p + 1));
      setBinProgress(p => (p >= 100 ? 100 : p + 0.5));
      setTipperProgress(p => (p >= 100 ? 100 : p + 0.8));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const statusItems = [
    {
      icon: <FaToilet className="text-primary me-2" size={20} />,
      label: 'Toilets Cleaned',
      value: toiletProgress,
      color: 'primary'
    },
    {
      icon: <FaTrashAlt className="text-success me-2" size={20} />,
      label: 'Ward Bins Cleaned',
      value: binProgress,
      color: 'success'
    },
    {
      icon: <FaTruck className="text-info me-2" size={20} />,
      label: 'Auto-Tipper Reached',
      value: tipperProgress,
      color: 'info'
    }
  ];

  return (
    <div className="container my-3">
      <div className="card shadow-sm rounded-4 p-3 p-md-4">
        <h5 className="text-center mb-4">Ward No : {props.ward}</h5>
        <p className='text-center mb-4 blockquote'>All the details of the ward cleaning can be seen here</p>
        <div className='w-100 d-flex p-1 align-items-center justify-content-between gap-2'>
            <div className='w-75'>
        {statusItems.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="d-flex align-items-center">
                {item.icon}
                <strong className="fs-6">{item.label}</strong>
              </div>
              <span className="fw-semibold">{Math.round(item.value)}%</span>
            </div>
            <div className="progress rounded-pill" style={{ height: '10px' }}>
              <div
                className={`progress-bar bg-${item.color}`}
                role="progressbar"
                style={{ width: `${item.value}%` }}
                aria-valuenow={item.value}
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
           
          </div>
        
        ))}
        </div>
        <div className='w-25 text-center d-flex flex-column text-primary'>
            <div className='w-100 d-flex gap-1'>
                <div style={{width:"33%",height:"10rem", background:"lightgrey"}} className='border rounded '>
                <img className='w-100' src={toiletSeat} alt="" />
                <p className='text-dark h6'>Toilets </p>
                <div className='w-100 bg-white border-1 text-info'>
                    2
                </div>
                </div>
                <div style={{width:"33%",height:"10rem", background:"lightgrey"}} className='border rounded '>
                <img className='w-auto' src={autoTipperPng} alt="" />
                <p className='text-dark h6 p-2'>Auto tippers... </p>
                <div className='w-100 bg-white border-1 text-info'>
                    1
                </div>
                </div>
                <div style={{width:"33%",height:"10rem", background:"lightgrey"}} className='border rounded '>
                <img className='w-100' src={litterBinsPng} alt="" />
                <p className='text-dark h6'>Bins </p>
                <div className='w-100 bg-white border-1 text-info'>
                    3
                </div>
                </div>
               
            </div>
        </div>
       
        </div>
      </div>
    </div>
  );
};

export default WardStatusProgress;
