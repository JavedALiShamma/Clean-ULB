import StarRating from "../feedback_Star";
import styles from "./styles.module.css"
import { starCountRating } from "../feedback_Star/starCount";
import { useState } from "react";
import { Heading2 } from "lucide-react";
import DetailedView from "../DetailedToiletView";

const ToiletBadge=(props)=>{
    const res=props.data;
    console.log(res);
    const[isShow,setIsShow]=useState(false);
    const handleShow=()=>{
        setIsShow(!isShow);
    }
    
    return(

                <div key={res.toiletID} className={styles.cardArea}>
                    <h5 id={styles.cardHeading} className="text-center py-1 font-weight-bold"> Category :{res.category}</h5>
                <div className="d-flex justify-content-evenly">
                <div id={styles.addressArea} className="px-2 flex-1  text-wrap">
                    <p className="text-wrap">Address :{res.Address}</p>
                    <p >Toilet ID : {res.toiletID}</p>
                    <p>Ward :{res.ward}</p>
                </div>
                <div className="px-2 flex-1">
                    <p>Care taker name: {res.careTaker}</p>
                    <p>O&M:{res.oAndM}</p>
                    
                </div>
                <div className="flex-1">
                        <p>Overall star rating</p>
                        <StarRating rating={starCountRating(res.fiveStar,res.fourStar,res.threeStar,res.twoStar,res.oneStar)}/>
                    </div>  
                <div className="d-flex flex-column gap-1 flex-1">
                    <button type="button" className="btn btn-light text-primary">Download Feedback</button>
                    <button onClick={handleShow} type="button" className="btn btn-light text-success">View Summary</button>
                      {isShow && (<div className={styles.popUpArea}>
                    
                                      <div className={styles.popUp}>
                                         <h2 className="text-center text-primary">Summary Report of Toilet </h2>
                                         <div className={styles.mainSection}>
                                             <div className={styles.paramOfFeedbackSection}>
                                                <h5>These are the parameter which are missing in toilet {res.toiletID}</h5>
                                                    <DetailedView data={res.negativeFeedback}/>
                                             </div>
                                             <div className={styles.chartAreaSection}></div>
                                         </div>
                                      </div>
                                        <button onClick={()=>(setIsShow(!isShow))} type="button" className="btn btn-primary">Close</button>
                                      </div>)}
                </div>
                   
                </div>
                
                </div>
    )
}
export default ToiletBadge;