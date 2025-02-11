import styles from "./styles.module.css"
import totalBlock from "../../../../assets/icons/total-block.png"
import totalSeats from "../../../../assets/icons/total-seats.png"
import { Link } from "react-router"
import CTDetails from "../../CTDetails"
import {TotalCTdata} from "../../../../utils/CommunityToilet";
const RouteToCT=()=>{
    const addNewCt =()=>{
        const{currPath}=location.pathname;
        console.log(location.pathname);
        const newPathName="ULBDashboard/AddnewPt";
        location.pathname=newPathName;
        
    }
    const onfunctional=()=>{
        const currCT=TotalCTdata.filter((i)=>{
            return(i.status=="functional");
        })
        return(
            <CTDetails data={currCT}/>
        )
    }
    return(
        <>
        <div className={styles.ctCradArea}>
        <div className={styles.addNewCt}>
            <button onClick={addNewCt} className={styles.addCtBtn}>Add New Community Toilet</button>
        </div>
        </div>
        <div className={styles.CtCardArea}>
            <div className={styles.overviewArea}>
                <h3>Overview</h3>
            </div>
            <div className={styles.ctCards}>
                <div className={styles.ctCard}>
                    <img src={totalBlock} alt="total-Block" />
                    <h3>Total Blocks</h3>
                    <div className={styles.floatCard}>
                        <h5> Project Status</h5>
                        <div className={styles.ulDiv}>
                        <ul>Constructed</ul>
                        <ul>Under Construction</ul>
                        </div>
                    </div>
                </div>
                <div className={styles.ctCard}>
                    <img src={totalSeats} alt="total-Block" />
                    <h3>Total Seats</h3>
                    <div className={styles.floatCard}>
                        <h5>Status </h5>
                        <div className={styles.ulDiv}>
                        <ul onClick={onfunctional}>Functional</ul>
                        <ul>Non Functional</ul>
                        </div>
                    </div>
                </div>
                <div className={styles.barPanelArea}>
                    <div className={styles.barPanel}>Aspirational Toilet</div>
                    <div className={styles.barPanel}>Differently Abled usable</div>
                    <div className={styles.barPanel}>Pink Toilet</ div>
                </div>
            </div>
        </div>
        <CTDetails data={TotalCTdata}/>
        </>
    )
}
export default RouteToCT;