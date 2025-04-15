import React from 'react'
import autoTipper from "../../../assets/icons/autoTipperLogo.png"

const CombineTipper = () => {
  return (
    <div className="w-100 p-1 d-flex
    gap-1 align-items-center justify-content-center">
      <div className='w-100 d-flex gap-1 border rounded p-1 align-items-center justify-content-between' style={{height:"5rem"}}>
        <img className='m-1' src={autoTipper} alt="" />
        <div className='h-100'>
          <h4>Auto Tipper No</h4>
          <h5>6</h5>
        </div>
        <div className='h-100'>
          <h4>Driver Name</h4>
          <h5>Manish Kumar</h5>
        </div>
        <div className='h-100'>
          <h4>Vehicle No</h4>
          <h5>RJ-14-1234</h5>
        </div>
        <div className='h-100'>
          <h4>Vehicle Status</h4>
          <h5>Running</h5>
        </div>
        <div className='h-100'>
          <h4>Distance Covered</h4>
          <h5>10.5 km</h5>
        </div>
        <div className='h-100'>
          <h4>Trip No</h4>
          <h5>1</h5>
        </div>
        
      </div>

    </div>

  )
}
export default CombineTipper;