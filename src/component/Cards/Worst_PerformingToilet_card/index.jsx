import React, { useState } from "react";
import { AllToiletFeedbackData} from "../../../utils/Feedack_count/AllToiletFeedback";

import styles from "./styles.module.css";
import public_toilet from "../../../assets/icons/public-toilet.webp"
import public_toilet2 from "../../../assets/icons/public-toilet2.png"
import seatIcon from "../../../assets/icons/toiletSeat.png";
import washBasin from "../../../assets/icons/washbasin1.png"    ;
import { Route, Routes, useParams } from "react-router";
import IndividualToilet from "../../Individual Toilet";
import { starCountRating } from "../../feedback_Star/starCount";
import StarRating from "../../feedback_Star";
import washBasin1 from "../../../assets/icons/washBasin0.png";
import waterTap from "../../../assets/icons/water-tap.png";
import badSmell from "../../../assets/icons/badSmell.png";
import doorBolting from "../../../assets/icons/doorBolting.png";
import toiletLight from "../../../assets/icons/toiletLight.png";
import lightIcon from "../../../assets/icons/lightIcon.png"

const WorstPerformingCard=(props)=>{
    const[data,setData]=useState(props.data);
    const[isShow ,setIsShow]=useState(false);
  
        const showNegativeParam=(ele)=>{
        let toShow=[];
            ele.map((i)=>{
              if("Q1" in i){
                toShow=[...toShow,
                    <div key={toShow.length} className={styles.negativeParam}>
                            <img src={seatIcon} alt="" />
                            <div className={styles.negativeCountNparamArea}>
    
                            <p className={styles.negativeMessage}>
                                Toilet seat is not clean and usable
                            </p>
                            <p className={styles.nagetiveFeedbacBadge}>
                                Negative Count : {i.Q1} 
                            </p>
                            </div>
                        </div>
                ]
              }
              if("Q2" in i){
                toShow=[...toShow,
                    <div key={toShow.length} className={styles.negativeParam}>
                            <img src={washBasin1} alt="" />
                            <div className={styles.negativeCountNparamArea}>
    
                            <p className={styles.negativeMessage}>
                                Wash basins are not clean and usable
                            </p>
                            <p className={styles.nagetiveFeedbacBadge}>
                                Negative Count : {i.Q2}
                            </p>
                            </div>
                        </div>
                ]

              }
              if("Q3" in i){
                toShow=[...toShow,
                    <div key={toShow.length} className={styles.negativeParam}>
                            <img src={waterTap} alt="" />
                            <div className={styles.negativeCountNparamArea}>
    
                            <p className={styles.negativeMessage}>
                                Water is not available
                            </p>
                            <p className={styles.nagetiveFeedbacBadge}>
                                Negative Count : {i.Q3}
                            </p>
                            </div>
                        </div>
                ]

              }
              if("Q4" in i){
                toShow=[...toShow,
                    <div key={toShow.length} className={styles.negativeParam}>
                            <img src={lightIcon} alt="" />
                            <div className={styles.negativeCountNparamArea}>
    
                            <p className={styles.negativeMessage}>
                                No proper light in toilet
                            </p>
                            <p className={styles.nagetiveFeedbacBadge}>
                                Negative Count : {i.Q4}
                            </p>
                            </div>
                        </div>
                ]

              }
              if("Q5" in i){
                toShow=[...toShow,
                    <div key={toShow.length} className={styles.negativeParam}>
                            <img src={toiletLight} alt="" />
                            <div className={styles.negativeCountNparamArea}>
    
                            <p className={styles.negativeMessage}>
                                Ventelation is not found
                            </p>
                            <p className={styles.nagetiveFeedbacBadge}>
                                Negative Count : {i.Q5}
                            </p>
                            </div>
                        </div>
                ]

              }
              if("Q6" in i){
                toShow=[...toShow,
                    <div key={toShow.length} className={styles.negativeParam}>
                            <img src={doorBolting} alt="" />
                            <div className={styles.negativeCountNparamArea}>
    
                            <p className={styles.negativeMessage}>
                                Door bolting is not working
                            </p>
                            <p className={styles.nagetiveFeedbacBadge}>
                                Negative Count : {i.Q6}
                            </p>
                            </div>
                        </div>
                ]

              }
              if("Q7" in i){
                toShow=[...toShow,
                    <div key={toShow.length} className={styles.negativeParam}>
                            <img src={badSmell} alt="" />
                            <div className={styles.negativeCountNparamArea}>
    
                            <p className={styles.negativeMessage}>
                                Bad smell in toilet
                            </p>
                            <p className={styles.nagetiveFeedbacBadge}>
                                Negative Count : {i.Q7}
                            </p>
                            </div>
                        </div>
                ]

              }
            }

                
            )
        
     return toShow; 
      
    }
    const viewFullDataCT=()=>{
        // console.log(iteam.toiletID);
        // console.log(history.state);
        // const id=iteam.toiletID;
        setIsShow(!isShow);

        }
    return(
        <>
            
                <div key={props.data.toiletID}  className={styles.cardArea}>
                <div className={styles.imageAndAddress}>
                    <div className={styles.imageBox}>
                        <img className={styles.imageOfBox} src={data.image} alt="" />
                    </div>
                    <div className={styles.addressBox}>
                        <h4 className={styles.addresstoiletHeading}>
                            {data.Address}
                        </h4>
                       
                        <p className={styles.wardNumber}>
                            Ward No: {data.ward}
                        </p>
                        <div className={styles.idAndCatBox}>
                        <p className={styles.toiletIDArea}>
                            Toilet ID: {data.toiletID}
                        </p>
                        <p className={styles.toiletCatg}>
                            Categorgy:{data.category}
                        </p>    
                        </div>
                        <div className={styles.oNdmAndCareTakerArea}>
                        <p className={styles.oandMArea}>O&M:{data.oAndM}</p>
                        <p className={styles.caretakerArea}>Caretaker :{data.careTaker}</p>
                        </div>
                    </div>
                    {isShow && 
            <div className={styles.popUpArea}> 
            <div className={styles.popUp}>
                <IndividualToilet data={data}/>
                <button type="button" className="btn btn-primary px-4 m-1" onClick={viewFullDataCT}>Close</button>
            </div>
            </div>}
                    <button onClick={viewFullDataCT} className={styles.viewFullBtn}>View full feedback Details →</button>
                </div>
                <div className={styles.whatParamMissing}>
                    <div className={styles.firsthead}>
                        
                        
                        <h2 className={styles.firstHeadHeading}>
                            
                            What are the negative feedback ? and what parameters are missing </h2>
                           <p className={styles.noteWarning}>
                            Warning : Users are not happy with the services and this leads to decrease the marks as well
                            </p> 
                    </div>
                    <div className={styles.negativeParamArea}>
                        {showNegativeParam(data.negativeFeedback)}    
                       
{/* 
                        <div className={styles.negativeParam}>
                            <img src={seatIcon} alt="" />
                            <div className={styles.negativeCountNparamArea}>
    
                            <p className={styles.negativeMessage}>
                                Toilet seat is not clean and usable
                            </p>
                            <p className={styles.nagetiveFeedbacBadge}>
                                Negative Count : 121
                            </p>
                            </div>
                        </div> */}
                   
                      
                      
                    
                    </div>
                    <div className={styles.starCountArea}>
                        <h3>Total rating :  {starCountRating(data.fiveStar,data.fourStar,data.threeStar,data.twoStar,data.oneStar)}</h3>
                        <StarRating rating={starCountRating(data.fiveStar,data.fourStar,data.threeStar,data.twoStar,data.oneStar)}/>
                       
                    </div>
                </div>
            </div>
          
            </>
    )
}

export default WorstPerformingCard;