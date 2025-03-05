import "bootstrap/dist/css/bootstrap.min.css";
import LineChart from "../../../component/LineCharts";
import { House, Bell, List, Person, ThreeDots } from "react-bootstrap-icons";
import { FaArrowCircleRight } from "react-icons/fa";
import { useEffect, useState } from "react";
// import bin_percentage from "./AllApiCalls";
import binCalculation from "./AllApiCalls";
import WeeklyColumnChart from "../../MobileComponents/WeeklyCharts";
import CustomNavbar from "../../MobileComponents/CustomNavbar";

export default function BottomNavbar() {
  // console.log(binCalculation , "bincalulation is ")
  const[binData,setBindata]=useState(0);
  // console.log("binData is ",binData);
  let cleanedPercentage=(user)=>{
    let tLen=user.length;
    // console.log("user.length",tLen)
    let cleaned=user.filter((e)=>{
       return(e.isCleaned===true)
    })
    // console.log("Clened is ",cleaned.length)
    return((cleaned.length/tLen)*100);
}
  console.log(binCalculation)
 useState(()=>{
    binCalculation.then(user=>{
      let result=cleanedPercentage(user);
      setBindata(result)

    })
  
 },[binData])
 const sampleData = [
  { label: "Mon", value: 5 },
  { label: "Tue", value: 8 },
  { label: "Wed", value: 6 },
  { label: "Thu", value: 10 },
  { label: "Fri", value: 7 },
  { label: "Sat", value: 12 },
  { label: "Sun", value: 9 },
];
  return (
    <>
    {/* <div style={{height:"10rem", borderRadius:"0px 0px 1rem 1rem", background:"#f4e7e2",fontFamily:`"poppins" , serif`,}} className="w-100 ">
          <h1>Executive Officer Login</h1>
          <div style={{background:"#efded6"}} className="w-75 m-auto">
            h2 </div>
    </div> */}
            <CustomNavbar/>
    <nav className="navbar fixed-bottom bg-light border-top">
      <div className="container-fluid d-flex justify-content-around">
        <NavItem icon={<House size={24} />} />
        <NavItem icon={<Bell size={24} />} />
        <NavItem icon={<List size={24} />} />
        <NavItem icon={<Person size={24} />} />
        <NavItem icon={<ThreeDots size={24} />} />
      </div>
    </nav>
    <div className="w-100 d-flex flex-column gap-1 p-3 ">
           <div className="w-100 d-flex gap-1">

            <div style={{background:"#c9e0dd" ,minHeight:"10rem"}} className="w-50 rounded border position-relative p-2">
                
                  
                    <FaArrowCircleRight style={{width:"2rem", height:"2rem",bottom:"0.8rem",right:"0.3rem",
                    color:"#4e9c91"
                    }} className="position-absolute"/>
                  
               
                   <h2 className="text-center" style={{fontFamily:`"poppins" , serif`,color:"#4e9c91"}}>Bins Cleaned</h2>
                   <p style={{fontWeight:"700"}} className="display-1 text-center text-white">{binData}%</p>

            </div>
              
            <div style={{background:"#bec8f9"}} className="w-50 rounded border position-relative p-2">
            <FaArrowCircleRight style={{width:"2rem", height:"2rem",bottom:"0.8rem",right:"0.3rem",
                    color:"#606ca8"
                    }} className="position-absolute"/>
                 <h2 className="text-center" style={{fontFamily:`"poppins" , serif`,color:"#606ca8"}}>Area Cleaned</h2>
                 <p style={{fontWeight:"700"}} className="display-1 text-center text-white"> 50%</p>
            </div>
           </div>
            <div className="w-100 d-flex gap-1">

            <div style={{background:"#dbc77d"}} className="w-50 rounded border position-relative p-2">
            <FaArrowCircleRight style={{width:"2rem", height:"2rem",bottom:"0.8rem",right:"0.3rem",
                    color:"#918146"
                    }} className="position-absolute"/>
                 <h2 className="text-center" style={{fontFamily:`"poppins" , serif`,color:"#918146"}}>
                  Complaints Resolved</h2>
                 <p style={{fontWeight:"700"}} className="display-1 text-center text-white"> 50%</p>
            </div>
            <div style={{background:"#eedbd1"}} className="w-50 rounded border position-relative p-2">
            <FaArrowCircleRight style={{width:"2rem", height:"2rem",bottom:"0.8rem",right:"0.3rem",
                    color:"#ba8c73",
                    }} className="position-absolute"/>
                 <h2 className="text-center" style={{fontFamily:`"poppins" , serif`,color:"#ba8c73"}}>
                  Toilet Cleaned</h2>
                 <p style={{fontWeight:"700"}} className="display-1 text-center text-white"> 100%</p>
            </div>
            </div>
    </div>
    {/* <div className="w-100 p-2 h-auto">
     
      <LineChart/>
    </div> */}
    <div className="w-100"> 
     <WeeklyColumnChart />
    </div>
    <h2>helo</h2>
    <h2>helo</h2>
    <h2>helo</h2>
    </>
  );
}

function NavItem({ icon }) {
  return (
    <button className="btn btn-light">
      {icon}
    </button>
  );
}