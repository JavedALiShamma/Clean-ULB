import React, { useState } from 'react';
import WardStatusProgress from '../Wards';
const WardsCleaning = () => {
    const [ward, setWard] = useState('');
    const [zone, setZone] = useState('');
  
    const wards = Array.from({ length: 15 }, (_, i) => i + 1);
    const zones = ['North', 'South', 'East', 'West', 'Central'];
  return (
    <>
    <div>
        <h3 style={{fontFamily: `Poppins, sans-serif`,}} className='text-center p-2 text-success'>Ward wise cleaning of the city </h3>
        <div style={{backgroundColor: `white`,}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
        <p style={{fontFamily: `Poppins, sans-serif`,color: `grey`,}} className='blockquote text-center'> ULB can see the cleaning process of the city ward wise </p>
        <div className='w-100 d-flex p-1 gap-1'>
        <select
              className="form-select w-50 border-success"
              id="wardDropdown"
              value={ward}
              onChange={(e) => setWard(e.target.value)}
            >
              <option value="">-- Select Ward --</option>
              {wards.map((w) => (
                <option key={w} value={w}>Ward {w}</option>
              ))}
            </select>
            <select
              className="form-select w-50 border-success"
              id="zoneDropdown"
              value={zone}
              onChange={(e) => setZone(e.target.value)}
            >   
                <option value="">-- Select Zone --</option>
                {zones.map((z, idx) => (
                    <option key={idx} value={z}>{z}</option>
                ))}
            </select>
        </div>
        

        </div>
        <div className='w-100 h-auto'>
            <WardStatusProgress ward={1} zone={zone} />
            <WardStatusProgress ward={2} zone={zone} />
            <WardStatusProgress ward={3} zone={zone} />
            <WardStatusProgress ward={4} zone={zone} />
            <WardStatusProgress ward={5} zone={zone} />
        </div>
    </div>
    </>
  )
};

export default WardsCleaning;
