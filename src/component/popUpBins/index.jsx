
import { useState } from "react";
import styles from "./styles.module.css"
import litterBin from "../../assets/icons/litterBin.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import GVP from "../../assets/icons/GVP.jpg";
const PopUp=(props)=>{
        let res=props.data;
      
        const[isShow,setShow]=useState(false);
        const colorCheker=(e)=>{
            console.log("color");
        }
    return(
        <div className={styles.cardsArea}>
        {isShow && <div className={styles.popUpArea}>
        <div className={styles.popUp}>
            <h3 className="text-left text-primary w-100">Details of Litter Bin no: {res.binNo} </h3>
            <div className={styles.detailsOfBin}>
                <p> ADDRESS : {res.address}</p>
                <div className={styles.imageSection}>

                    <div className={styles.imageBefore}>
                    <span className="badge bg-success text-light p-2 w-75 m-2">Before</span>
                    <img src={res.imageBefore} alt="" />
                    <div className={styles.timeAndDateArea}>
                       
                       <p> Time :12.00 AM</p>
                      <p> Date : 12 Feb 2024</p>
                   </div>
                    </div>
                    <div className={styles.imageAfter}>
                    <span className="badge bg-success text-light p-2 w-75 m-2">After</span>
                    <img src={res.imageAfter} alt="" />
                    <div className={styles.timeAndDateArea}>
                       
                        <p> Time :12.15 AM</p>
                       <p> Date : 12 Feb 2024</p>
                    </div>
                    </div>
                </div>
            </div>
            <button onClick={()=>(setShow(!isShow))} type="button" className="btn btn-primary p-3"> Close</button>
        </div>
        
        </div>}
        <div id={styles.binCard} className="d-flex flex-column m-2  border border-success rounded">
           <img className={styles.demoImage} src={res.isGVP==true?GVP :litterBin} alt="" />
            <p className="text-wrap bd-highlight"> Litter:{res.binNo}</p>
            <p className={styles.cardaddress}>{res.address}</p>
            <button type="button" className={res.isClean==true?"btn btn-success w-75" :"btn btn-danger w-75"}>{res.isClean==true?"Clean":"Unclean"}</button>
            <button id="23" onClick={()=>(setShow(!isShow))} type="button" className="btn btn-primary m-1 w-75">See details</button>
        </div>


        </div>
    )
}
export default PopUp;