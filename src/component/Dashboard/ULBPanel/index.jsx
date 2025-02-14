import { Navbar } from "react-bootstrap";
import SidePanelArea from "../sidePanels/sidePanelArea";
import styles from "./styles.module.css"
import swachLogo from "../../../assets/icons/swachh-logo.png";
import profileManlogo from "../../../assets/icons/profileMan.png"
import TotalCpTp from "../heroSection/totalCTPT";
import { BrowserRouter, Routes, Route } from "react-router";
import RouteToCT from "../Routes/RouteToCT";
import AddNewToilet from "../../AddNewToilet";
import RRRCenter from "../../RRR_Center";
import 'bootstrap/dist/css/bootstrap.min.css';
import LitterBins from "../../LitterBinsInULB";
import FeedbackSection from "../../Feedback-Section";
import CareTakerDashboard from "../../careTaker-Section";
import { useState } from "react";
const DashboardMain=()=>{
    const [isShow,setIsShow]=useState(true);
    return(
        <>
        {/* //className={styles.navbaar} */}
        <div className={styles.mainPageAll}>
        <Navbar id={styles.navbarTop} expand="lg" className="bg-body-tertiary d-flex justify-content-between p-2">
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
            <button type="btn" className="btn btn-danger px-3">Help ?</button>
            <button type="btn" className="btn btn-success px-3">Contact us</button>
            <div className={styles.NodalOfficerName}>
                <img src={profileManlogo} alt="man log" />
                <div>
                <p className={styles.Nodalname}> Pankaj Khairwaan</p>
                <p className={styles.NodalPost}>AEN </p>
                </div>
            </div>
        </Navbar>
       
       <div className={styles.heroArea}>
       {isShow && <div id={styles.sidePanel} className={styles.sidePanel}>
        <SidePanelArea/>
        </div>}
        
        <div className={styles.heroRight}>
       
        <Routes>
            
            <Route path="/RRRCenter/" element={<RRRCenter/>}></Route>
            <Route path="/CommunityToilet" element={<RouteToCT/>}></Route>
            <Route path="/AddnewPt" element={<AddNewToilet/>}></Route>
            <Route path="/LitterBins" element={<LitterBins/>}></Route>
            <Route path="/feedbackSection" element={<FeedbackSection/>}></Route>
            <Route path="/toiletCaretaker" element={<CareTakerDashboard/>}></Route>
            <Route path="*" element={<TotalCpTp/>}></Route>
            
        </Routes>
        
        {/* <TotalCpTp/> */}
        </div>
       
       
        </div>
       
        
        </div>
        
        </>

    )
}
export default DashboardMain;