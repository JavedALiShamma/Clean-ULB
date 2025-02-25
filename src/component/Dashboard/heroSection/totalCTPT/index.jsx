
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
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import PieChartArea from "../../../pieChart";
import Chart from "react-google-charts";


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
  const handleRoute=(e)=>{
    
  }
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };  
  const config = {
    type: 'doughnut',
    data: data,
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
          <h3 className={styles.ssParamHead}><u>Overview Detalis of cleanliness in ULB</u></h3>
        </div>

       <div className="w-100 bg-white d-flex flex-column">
        <div className="w-100 bg-white">
              <p style={{fontWeight:"700"}} className="text-succcess text-center text-success h3 p-3">Monitor how many places and bins are cleared right now</p>
        </div>
        <div className="w-100 d-flex">
        <div className="w-50">
          <div className="w-100 d-flex">
            <p className="w-25 text-center blockquote"> Cleaned : 50%</p>
            <div className="w-75 border border-dark rounded">
              <div  style={{width:"50%",backgroundColor:"green",height:"100%",content:" "}} id="progressBar"></div>
            </div>
          </div>
          <div  style={{cursor:"pointer"}} className="w-100 d-flex flex-column border border-dark my-1 justify-content-center align-items-center">
          <p className="display-6 text-center">Area Cleaned in ULB</p>
            <PieChartArea data={[10,10]}/>
          </div>
        </div>
        <div className="w-50">
          <div className="w-100 d-flex">
            <p className="w-25 text-center blockquote"> Cleaned :70%</p>
            <div className="w-75 border border-dark rounded">
              <div style={{width:"70%",backgroundColor:"green",height:"100%",content:" "}} id="progressBar"></div>
            </div>
          </div>
          <div className="w-100 d-flex flex-column border border-dark my-1">
            <p className="display-6 text-center">Bins cleaned in ULB</p>
            <PieChartArea data={[70,30]}/>
           
          </div>
        </div>
       </div>
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