import { Navbar } from "react-bootstrap";
import SidePanelArea from "../sidePanels/sidePanelArea";
import styles from "./styles.module.css"
import swachLogo from "../../../assets/icons/swachh-logo.png";
import profileManlogo from "../../../assets/icons/profileMan.png"
import TotalCpTp from "../heroSection/totalCTPT";
import { BrowserRouter, Routes, Route, useParams, useNavigate, createSearchParams } from "react-router";
import RouteToCT from "../Routes/RouteToCT";
import AddNewToilet from "../../AddNewToilet";
import RRRCenter from "../../RRR_Center";
import 'bootstrap/dist/css/bootstrap.min.css';
import LitterBins from "../../LitterBinsInULB";
import FeedbackSection from "../../Feedback-Section";
import CareTakerDashboard from "../../careTaker-Section";
import { useState } from "react";
import GRMainPage from "../../GrevinaceRedresselSection/MainDashboard";
import ImportantPlacesArea from "../../ImportantPlaces";
import GoogleMapView from "../../GoogleMaps";
import GRDashboard from "../../TraceAutoTipper/AutoTipperDashboard";
import AutoTipperDashboard from "../../TraceAutoTipper/AutoTipperDashboard";
const DashboardMain=()=>{
    const [isShow,setIsShow]=useState(true);
    const navigate=useNavigate();
    const handleHelp=()=>{
        navigate({
            pathname:"officials/EODashboard/:eoId",
            search:createSearchParams({
                
            }).toString()
        })
    }
    const handleContact=()=>{
        navigate({
            pathname:"feedbackForm"
        })
    }
    return(
        <>
        {/* //className={styles.navbaar} */}
        <div className="w-100 d-flex flex-column">
        <Navbar id={styles.navbarTop} expand="lg" className=" w-100 bg-body-tertiary d-flex justify-content-between p-2">
            <div className={styles.menuLogo}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=menu" />
            <span onClick={()=>{setIsShow(!isShow)}} id={styles.menuBtn} className="material-symbols-outlined">menu</span>
            </div>
            <div className={styles.swachhLogo}>
                <img src={swachLogo} alt="Swachh logo" />
            </div>
            <div className={styles.ULBInfo}>
                <p className={styles.StateName}>Rajasthan: </p> 
                <p className={styles.CityName}>Dungarpur:</p> 
                <p className={styles.ULBname}>Dungarpur:</p> 
            </div>
            <button onClick={handleHelp} type="btn" className="btn btn-danger px-3">Help ?</button>
            <button onClick={handleContact} type="btn" className="btn btn-success px-3">Contact us</button>
            <div className={styles.NodalOfficerName}>
                <img src={profileManlogo} alt="man log" />
                <div>
                <p className={styles.Nodalname}> Pankaj Khairwaan</p>
                <p className={styles.NodalPost}>AEN </p>
                </div>
            </div>
        </Navbar>
       
       <div className="w-100 d-flex">
        {/* .heroArea */}
       {isShow && <div id={styles.sidePanel} className="w-25">
        <SidePanelArea className="w-100 h-max"/>
        </div>}
        
        <div className="w-100 my-2">
       
        <Routes>
            
            <Route path="/RRRCenter/" element={<RRRCenter/>}></Route>
            <Route path="/CommunityToilet" element={<RouteToCT/>}></Route>
            <Route path="/AddnewPt" element={<AddNewToilet/>}></Route>
            <Route path="/LitterBins" element={<LitterBins/>}></Route>
            <Route path="/feedbackSection" element={<FeedbackSection/>}></Route>
            <Route path="/toiletCaretaker" element={<CareTakerDashboard/>}></Route>
            <Route path="/GrievanceRedressal/*" element={<GRMainPage/>}></Route>
            <Route path="/ImportantPlaces" element={<ImportantPlacesArea/>}></Route>
            <Route path="/Autotippertracker" element={<AutoTipperDashboard/>}></Route>
            <Route path="*" element={<TotalCpTp/>}></Route> 
            
        </Routes>
        
        {/* <TotalCpTp/> */}
        </div>
       
       
        </div>
       
        <div style={{height:"10rem"}} className="w-100 bg-dark">
            
        </div>
        </div>
        
        </>

    )
}
export default DashboardMain;