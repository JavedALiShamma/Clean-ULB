import "bootstrap/dist/css/bootstrap.min.css";
import { House, Bell, List, Person, ThreeDots } from "react-bootstrap-icons";

export default function BottomNavbar() {
  return (
    <>
    <nav className="navbar fixed-bottom bg-dark border-top">
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

            <div style={{background:"#c9e0dd" ,minHeight:"10rem"}} className="w-50 rounded border position-relative">
                <div style={{width:"fit-to-content",bottom:0, right:0}} className=" position-absolute bg-success">
                    <div className=""><h2>hell</h2></div>
                </div>
            </div>
            <div style={{background:"#bec8f9"}} className="w-50 rounded border">
                <h2>Hello</h2>
            </div>
           </div>
            <div className="w-100 d-flex gap-1">

            <div style={{background:"#dbc77d" ,minHeight:"10rem"}} className="w-50 rounded border">
              <h2>hello</h2>
            </div>
            <div style={{background:"#eedbd1"}} className="w-50 rounded border">
              <h2>hello</h2>
            </div>
            </div>
    </div>
    </>
  );
}

function NavItem({ icon }) {
  return (
    <button className="btn btn-dark">
      {icon}
    </button>
  );
}