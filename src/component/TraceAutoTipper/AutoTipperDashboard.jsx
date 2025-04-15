import GoogleMapView from "../GoogleMaps";
import Autotipper from "../../assets/icons/auto-tipper.png"
import { ProgressBar } from "react-bootstrap";
import GoogleMapWithCustomPin from "./PinOnMap";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import totalDistanceTravelled from "./DistanceCoveredByTipper";
import { Combine } from "lucide-react";
import CombinedTipper from "./All Tipper Combined/ComibinedTipper";
 const AutoTipperDashboard=()=>{
    return(
        <>
      
        <div className="w-100 p-1 d-flex gap-1">
           
            <div className="w-75">

            {/* <GoogleMapView /> */}
            </div>
            <div
            className="w-25  d-flex flex-column p-1 text-center" 
            style={{background:"#e3ffe7"}}
            >
                <h3 className="text-center ">Auto Tipper <span className="text-danger">Live  Status </span> </h3>
                <h5>Total Auto tippers : 8</h5>
                <div style={{height:"5rem"}} className="w-100 rounded border bg-white d-flex p-1 gap-2 my-1">
                        <img className="w-25" src={Autotipper} alt="" />
                        <div className="w-75">
                        <ProgressBar style={{fontSize:"2rem"}} className="h-100" label="60%" striped variant="success" now={60} />
                        </div>
                </div>
                <div style={{height:"5rem"}} className="w-100 rounded border bg-white d-flex p-1 gap-2 my-1">
                        <img className="w-25" src={Autotipper} alt="" />
                        <div className="w-75">
                        <ProgressBar style={{fontSize:"2rem"}} className="h-100" label="10%" striped variant="success" now={10} />
                        </div>
                </div>
                <div style={{height:"5rem"}} className="w-100 rounded border bg-white d-flex p-1 gap-2 my-1">
                        <img className="w-25" src={Autotipper} alt="" />
                        <div className="w-75">
                        <ProgressBar style={{fontSize:"2rem"}} className="h-100" label="100%" striped variant="success" now={100} />
                        </div>
                </div>
                <div style={{height:"5rem"}} className="w-100 rounded border bg-white d-flex p-1 gap-2 my-1">
                        <img className="w-25" src={Autotipper} alt="" />
                        <div className="w-75">
                        <ProgressBar style={{fontSize:"2rem"}} className="h-100" label="80%" striped variant="success" now={80} />
                        </div>
                </div>
                <div style={{height:"5rem"}} className="w-100 rounded border bg-white d-flex p-1 gap-2 my-1">
                        <img className="w-25" src={Autotipper} alt="" />
                        <div className="w-75">
                        <ProgressBar style={{fontSize:"2rem"}} className="h-100" label="42%" striped variant="success" now={42} />
                        </div>
                </div>
                <div style={{height:"5rem"}} className="w-100 rounded border bg-white d-flex p-1 gap-2 my-1">
                        <img className="w-25" src={Autotipper} alt="" />
                        <div className="w-75">
                        <ProgressBar style={{fontSize:"2rem"}} className="h-100" label="80%" striped variant="success" now={80} />
                        </div>
                </div>
                <div style={{height:"5rem"}} className="w-100 rounded border bg-white d-flex p-1 gap-2 my-1">
                        <img className="w-25" src={Autotipper} alt="" />
                        <div className="w-75">
                        <ProgressBar style={{fontSize:"2rem"}} className="h-100" label="25%" striped variant="success" now={25} />
                        </div>
                </div>
            </div>
            
        </div>
        <div className="w-100 my-1">
                <h2 className="text-center">Total Distance Traveled by Auto tippers</h2>

                <h5>Distance Covered :{totalDistanceTravelled([[28.0410,73.3316],[28.0278,28.0278]])} km</h5>
                <CombinedTipper/>
        </div>
        </>
    )
 }
 export default AutoTipperDashboard;