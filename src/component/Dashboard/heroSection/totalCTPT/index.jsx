
import ChartSection from "../../../charts";
import ColumnCharts from "../../../charts/Bar charts";
import toiletDustbin from "../../../../assets/icons/toilet-dustbin.jpg" 
import handwash from "../../../../assets/icons/airFreshner.avif" ;
import careTaker from "../../../../assets/icons/careTaker.jpg" ;
import unAbleSeat from "../../../../assets/icons/UnAbledToilet.avif" ;
import {AllToiletFeedbackData} from "../../../../utils/Feedack_count/AllToiletFeedback"
import styles from "./styles.module.css";
import AreaOfImprovement from "../../../Area _of_improvement";
import WorstPerformingCard from "../../../Cards/Worst_PerformingToilet_card";
import { useEffect, useState } from "react";
import bestToilet from "./bestToilet";
import { Route, Routes } from "react-router";
import IndividualToilet from "../../../Individual Toilet";
import StarRating from "../../../feedback_Star";
import { starCountRating } from "../../../feedback_Star/starCount";


/// Here we will use


let fiveStarCount=-1;
const ID=854212;

var totalFeedback={
  ct:1201,
  pt:2145,
  tourist:310
}

const TotalCpTp=()=>{

const [btData,setbtData]=useState(bestToilet);

  useEffect(()=>{
    console.log("in Use Effect");
    /// Here we need a Api call of best performing Toilet 
    // It depends on how which toilet gets higesht number of 5 start rating
  
  },[])
 

  const scrollLeft=(i)=>{
    const parent=i.target.parentElement;
    parent.scrollLeft +=150;
  }
  const scrollRight=(i)=>{
    const parent=i.target.parentElement;
    parent.scrollLeft -=150;
  }
  var feedbackSum=totalFeedback.ct+totalFeedback.pt+totalFeedback.tourist;
    return(
        <>
      
        <div className={styles.totalCtPtCal}>
          <p>Total Feedack:{feedbackSum}</p>
          <div className={styles.totalFeedbackCt}>
            <p>Community Toilet Feedback :{totalFeedback.ct}</p>
          </div>
          <div className={styles.totalFeedbackPt}>
            <p>Public Toilet Feedback :{totalFeedback.pt}</p>
          </div>
        </div>
        <div style={{backgroundColor:"#d2e8a1"}} className="w-auto p-3 my-1">
          {/*dashboardBackground  */}
        <h3 className={styles.bestPerformingHeading}>Best performing Toilet in ULB</h3>
        <div className="w-100 d-flex bg-white">
          {/* bestCtCardArea */}
          
          <div className={styles.ctCardLeft}>
            <img className={styles.image1} src={btData.image} alt="" />
          
            <div className={styles.imageCTDetails}>
                <h3 className={styles.addressArea}>Addres:{btData.Address}</h3>  
                <p> Ward No : {btData.ward}</p>
                <div className={styles.IdAndCatArea}>
                  <p className={styles.badges}>Toilet ID:{btData.toiletID}</p>
                  <p className={styles.badges}>Category:{btData.category}</p>
                </div>
                
                <p className={styles.oAndMArea}>O&M done by  : {btData.oAndM}</p>
                <p className={styles.careTaker}>Care taker :{btData.careTaker}</p>
                <div className={styles.openAndCloseArea}>
                  <p>Opening time: 05.00 AM</p>
                  <p>Closing time: 10.00 PM</p>
                </div>
                <div className={styles.ratingToiletArea}>
                  <p>Toilet Rating : {starCountRating(btData.fiveStar,btData.fourStar,btData.threeStar,btData.twoStar,btData.oneStar)}
                     </p> <StarRating rating={starCountRating(btData.fiveStar,btData.fourStar,btData.threeStar,btData.twoStar,btData.oneStar)}/>
                </div>
            </div>
          </div>
          <div className={styles.ctChart}>

            {/* <ChartSection/> */}
          <ColumnCharts data={btData}/>
        
          </div>
        </div>
        <div className={styles.ssParameterHeading}>
          <h3 className={styles.ssParamHead}><u>Parameter according to swachh Survekshan toolkit 2025</u></h3>
        </div>
        {/*  */}
        <div id={styles.bestPracticeArea1} className="w-100 d-flex overflow-hidden m-auto">
          {/* bestPracticeArea1*/}
          <button onClick={scrollLeft} className={styles.scrollLeftBtn}>↠</button>
          <div className={styles.bestPracticeCard}>
            <div className={styles.logoImage}>
              <img className={styles.bpImg} src={toiletDustbin} alt="" />
            </div>
            <div className={styles.logoDetails}>
              <h5 className={styles.parameter}>Paramter : Litter bins available for disposing</h5>
              <p className={styles.badge}>SS Makrs: 10</p>
              <p className={styles.stepsTodo}>Steps to do: Put a dustbin for waste disposal of tissues and waste</p>
            </div>
          </div>
          <div className={styles.bestPracticeCard}>
            <div className={styles.logoImage}>
              <img className={styles.bpImg} src={handwash} alt="" />
            </div>
            <div className={styles.logoDetails}>
              <h5 className={styles.parameter}>Paramter :Availability of soap/operational soap dispenser & air freshener</h5>
              <p className={styles.badge}>SS Makrs: 10</p>
              <p className={styles.stepsTodo}>Steps to do: Put a dustbin for waste disposal of tissues and waste</p>
            </div>
          </div>
         
          <div className={styles.bestPracticeCard}>
            <div className={styles.logoImage}>
              <img className={styles.bpImg} src={unAbleSeat} alt="" />
            </div>
            <div className={styles.logoDetails}>
              <h5 className={styles.parameter}>Paramter : Dedicated toilet seats for differently abled/trans-gender</h5>
              <p className={styles.badge}>SS Makrs: 20</p>
              <p className={styles.stepsTodo}>Place a low height toilet seats for childeren and different abled people</p>
            </div>
          </div>
          <div className={styles.bestPracticeCard}>
            <div className={styles.logoImage}>
              <img className={styles.bpImg} src={careTaker} alt="" />
            </div>
            <div className={styles.logoDetails}>
              <h5 className={styles.parameter}>Paramter :Availability of Caretaker with name</h5>
              <p className={styles.badge}>SS Makrs: 20</p>
              <p className={styles.stepsTodo}>Steps to do:Caretaker should be present and log book is maintaned</p>
            </div>
          </div>
        
        
         
         
          
          
          
          
          
          
          
          
          <button onClick={scrollRight} className={styles.scrollRightBtn}>↞</button>
        </div>
        
        </div>
       
        <div className={styles.worstToiletArea}>
         <h3 className={styles.poorWorkingToiletHeading}>Toilets which  needs urgent assistance</h3>
          {AllToiletFeedbackData.map((i)=>(
               <WorstPerformingCard key={i.toiletID} data={i}/>
          ))}
         
        </div>
        
        
   
  
        
        </>
    )
}
export default TotalCpTp;