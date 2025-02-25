import "bootstrap/dist/css/bootstrap.min.css";
import LineChart from "../../LineCharts";
import { House, Bell, List, Person, ThreeDots } from "react-bootstrap-icons";
import { FaArrowCircleRight } from "react-icons/fa";


export default function BottomNavbar() {
  
  return (
    <>
    <div style={{height:"4rem", borderRadius:"0px 0px .7rem .7rem", background:"#F1F0E9"}} className="w-100 ">hel</div>
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
                   <p style={{fontWeight:"700"}} className="display-1 text-center text-white"> 92%</p>

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
                    color:"#606ca8"
                    }} className="position-absolute"/>
                 <h2 className="text-center" style={{fontFamily:`"poppins" , serif`,color:"#918146"}}>Complaints Resolved</h2>
                 <p style={{fontWeight:"700"}} className="display-1 text-center text-white"> 50%</p>
            </div>
            <div style={{background:"#eedbd1"}} className="w-50 rounded border position-relative p-2">
            <FaArrowCircleRight style={{width:"2rem", height:"2rem",bottom:"0.8rem",right:"0.3rem",
                    color:"#918146",
                    }} className="position-absolute"/>
                 <h2 className="text-center" style={{fontFamily:`"poppins" , serif`,color:"#ba8c73"}}>Toilet Cleaned</h2>
                 <p style={{fontWeight:"700"}} className="display-1 text-center text-white"> 100%</p>
            </div>
            </div>
    </div>
    <div className="w-100 p-2 h-auto">
     
      <LineChart/>
    </div>
    <div className="w-100"> 
      <h2>Hello</h2>
    </div>
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