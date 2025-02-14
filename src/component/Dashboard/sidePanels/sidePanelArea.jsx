import styles from "./styles.module.css"
import Image from "../../../assets/icons/tourismlogo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import GarbageBox from "../../../assets/icons/garbagebox.jpg"
import { createSearchParams, useNavigate } from "react-router";
import RRR from "../../../assets/icons/RRR.png";
import careTker1 from "../../../assets/icons/careTaker1.png";
import GD from "../../../assets/icons/GD.png";
import litterBin from "../../../assets/icons/litterBin.png";
import CandD from "../../../assets/icons/C&D.png"
function SidePanelArea() {
    const navigate=useNavigate();
const onDashboard=()=>{
    navigate({
        pathname:"/ULBDashboard",
        search:createSearchParams({
            
        }).toString()
    })
}
const oncareTaker=()=>{
    navigate({
        pathname:"/ULBDashboard/toiletCaretaker",
        search:createSearchParams({
            
        }).toString()
    })

}
const onCommunityToilet=()=>{
    location.pathname="/ULBDashboard/CommunityToilet";
}
const onRRRCentre=()=>{
    location.pathname="/ULBDashboard/RRRCenter"
}

const onLitterBoxSection=()=>{
    navigate({
        pathname:"/ULBDashboard/LitterBins",
        search:createSearchParams({
            
        }).toString()
    })
}
const onCandDWaste=()=>{
    navigate({
        pathname:"/ULBDashboard/C&DWaste",
        search:createSearchParams({
            
        }).toString()
    })
}
const onFeedback=()=>{
    navigate({
        pathname:"/ULBDashboard/feedbackSection",
        search:createSearchParams({
        
        }).toString()
    })
}
  return (
    <>
    <div id={styles.sidePanelSection} className="">
        <div className={styles.UlbInformations}>

        </div>
        <ul className={styles.leftSections}>
            <div className={styles.ULBInfo}>
               <p>ULB Name: Dungarpur</p> 
               <p>ULB Code :800751</p> 
            </div>
            <li onClick={onDashboard} className={styles.dashboardSection}>
                <span >
                    <img className={styles.leftLogos} src="https://admin.sbmurban.org/assets/icons/dashboard.svg" alt="Dashboard Image" />
                </span> Dashboard
            </li>
            <li onClick={onCommunityToilet} className={styles.ctLeft}>
                <span>
                    <img className={styles.leftLogos} src="https://admin.sbmurban.org/assets/icons/toilet.svg" alt="CT" />
                    </span>Community Toilet</li>
            <li className={styles.ptLeft}>
            <span>
                    <img  className={styles.leftLogos}  src="https://admin.sbmurban.org/assets/icons/toilet.svg" alt="CT" />
                    </span>Public Toilets</li>
            <li onClick={onLitterBoxSection} className={styles.ptLeft}>
            <span >
                    <img className={styles.leftLogos} src={litterBin} alt="Tourist logo" />
                    </span>
                Litters Bin /GVP</li>
            <li className={styles.ptLeft}>
            <span >
                    <img className={styles.leftLogos} src={Image} alt="Tourist logo" />
                    </span>Tourist Area/ Railway Station / Bus Stand</li>
            <li onClick={onFeedback} className={styles.ptLeft}>
            <span >
                    <img className={styles.leftLogos} src={Image} alt="Tourist logo" />
                    </span>Feedbacks
                    </li>
            <li onClick={onRRRCentre} className={styles.ptLeft}>
            <span >
                    <img className={styles.leftLogos} src={RRR} alt="Tourist logo" />
                    </span>RRR Center/Mukhiya Mantri Sadbhavna Kendra
                    </li>
            <li onClick={oncareTaker} className={styles.ptLeft}>
            <span >
                    <img className={styles.leftLogos} src={careTker1} alt="Tourist logo" />
                    </span> Caretaker in Toilets
                    </li>
            <li className={styles.ptLeft}>
            <span >
                    <img className={styles.leftLogos} src={GD} alt="Tourist logo" />
                    </span> Grievance Redressal/
                    शिकायत निवारण
                    </li>
            <li className={styles.ptLeft}>
            <span >
                    <img onClick={onCandDWaste} className={styles.leftLogos} src={CandD} alt="Tourist logo" />
                    </span> C & D Waste Collection
                    </li>
            <li className={styles.ptLeft}>
            <span >
                    <img className={styles.leftLogos} src={GD} alt="Tourist logo" />
                    </span> Auto Tipper Tracker
                    </li>
        </ul>
    </div>
    </>
  );
}



export default SidePanelArea;