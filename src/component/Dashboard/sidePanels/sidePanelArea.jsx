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
    navigate({
        pathname:"/ULBDashboard/CommunityToilet",
        search:createSearchParams({
            
        }).toString()
    })
 
}
const onRRRCentre=()=>{
    navigate({
        pathname:"/ULBDashboard/RRRCenter",
        search:createSearchParams({
            
        }).toString()
    })
   
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
const onGD=()=>{
    navigate({
        pathname:"/ULBDashboard/GrievanceRedressal",
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
const onTourist=()=>{
    navigate({
        pathname:"/ULBDashboard/ImportantPlaces",
        search:createSearchParams({
        
        }).toString()
    })
}
const onAutoTipper=()=>{
    navigate({
        pathname:"/ULBDashboard/Autotippertracker",
        search:createSearchParams({
        
        }).toString()
    })
}
const onSpecialEvent=()=>{
    navigate({
        pathname:"/ULBDashboard/SpecialEvent"
    })
}
const onWards=()=>{
    navigate({
        pathname:"/ULBDashboard/WardsCleaning"
    })
}
  return (
    <>
    <div id={styles.sidePanelSection} className="w-100 h-100">
        <div className={styles.UlbInformations}>

        </div>
        <ul className={styles.leftSections}>
            <div className={styles.ULBInfo}>
               <p className="px-2 text-center text-dark h5 py-1">ULB Name: Dungarpur</p> 
               <p className="px-2 text-center text-dark h5 py-1">ULB Code :800751</p> 
            </div>
            <li onClick={onDashboard} className={styles.dashboardSection}>
                <span >
                    <img className={styles.leftLogos} src="https://admin.sbmurban.org/assets/icons/dashboard.svg" alt="Dashboard Image" />
                </span> Dashboard
            </li>
            <li onClick={onCommunityToilet} className={styles.ctLeft}>
                <span>
                    <img className={styles.leftLogos} src="https://admin.sbmurban.org/assets/icons/toilet.svg" alt="CT" />
                    </span>Community Toilet /Public Toilet</li>
            {/* <li className={styles.ptLeft}>
            <span>
                    <img  className={styles.leftLogos}  src="https://admin.sbmurban.org/assets/icons/toilet.svg" alt="CT" />
                    </span>Public Toilets</li> */}
            <li onClick={onLitterBoxSection} className={styles.ptLeft}>
            <span >
                    <img className={styles.leftLogos} src={litterBin} alt="Tourist logo" />
                    </span>
                Litters Bin /GVP</li>
            <li onClick={onTourist} className={styles.ptLeft}>
            <span >
                    <img className={styles.leftLogos} src={Image} alt="Tourist logo" />
                    </span>Tourist Area/ Railway Station / Bus Stand/other Important places</li>
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
            <li onClick={onWards} className={styles.ptLeft}>
            <span >
                    <img className={styles.leftLogos} src={careTker1} alt="Wards logo" />
                    </span> Ward Wise Cleaning
                    </li>
            <li onClick={onSpecialEvent} className={styles.ptLeft}>
            <span >
                    <img className={styles.leftLogos} src={careTker1} alt="Tourist logo" />
                    </span> Special Events 
                    </li>
            <li onClick={onGD} className={styles.ptLeft}>
            <span >
                    <img className={styles.leftLogos} src={GD} alt="Grievance redressal" />
                    </span> Grievance Redressal/
                    शिकायत निवारण
                    </li>
            <li onClick={onCandDWaste} className={styles.ptLeft}>
            <span >
                    <img  className={styles.leftLogos} src={CandD} alt="Tourist logo" />
                    </span> C & D Waste Collection
                    </li>
            <li onClick={onAutoTipper} className={styles.ptLeft}>
            <span >
                    <img className={styles.leftLogos} src={GD} alt="Auto tipper" />
                    </span> Auto Tipper Tracker
                    </li>
        </ul>
    </div>
    </>
  );
}



export default SidePanelArea;