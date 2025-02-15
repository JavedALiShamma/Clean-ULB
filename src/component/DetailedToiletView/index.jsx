import styles from "./styles.module.css";
import washBasin1 from "../../assets/icons/washbasin0.png";
import waterTap from "../../assets/icons/water-tap.png";
import badSmell from "../../assets/icons/badSmell.png";
import doorBolting from "../../assets/icons/doorBolting.png";
import toiletLight from "../../assets/icons/toiletLight.png";
import lightIcon from "../../assets/icons/lightIcon.png";
import seatIcon from "../../assets/icons/toiletSeat.png";
import washBasin from "../../assets/icons/washbasin1.png";
const DetailedView=(props)=>{
    const res=props.data;
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
    return(
        showNegativeParam(res)
    )
}
export default DetailedView;