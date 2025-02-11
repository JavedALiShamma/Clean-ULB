import styles from "./styles.module.css";
import Btoilet from "../../assets/icons/Btoilet.png"

import { useState } from "react";

const CareTakerDashboard=()=>{
    const style = {
        color: '#e21d5f',
     
      };
    const dateObj = new Date();
    const month   = dateObj.getUTCMonth() + 1; // months from 1-12
    const day     = dateObj.getUTCDate();
    const year    = dateObj.getUTCFullYear();

    const newDate = day + "/" + month + "/" + year; 
    const[isShow,setisShow]=useState(false);
    const handleShow=()=>{
        setisShow(!isShow);
    }
    return(
    <div className={styles.backGroundArea}>
            <div className={styles.mainArea}>
                <h3 className="text-primary text-center">Toilets are care taken by Care Takers</h3>
                <div className={styles.cardSection}>
                   {isShow && <div className={styles.popUpArea}>
                    <div className={styles.popUp}>
                        <div className={styles.cardArea}>
                            <h3 style={style} className="txt-center">
                                All Details of toilet cleaning and caretaker
                            </h3>
                            <div className={styles.detailedContainer}>
                                <div className={styles.smallCard}>
                                    <div className={styles.innerCard}>
                                    <h4 className="py-3">TODAY</h4>   
                                        <p className={styles.newDate1}>Date :{newDate}</p>
                                    </div>
                                    <p style={style}> Toilet Open time: 10.20 AM</p>
                                 </div>
                                 <div className={styles.smallCard}>
                                    <div className={styles.innerCard}>
                                    <h4 className="py-3">TOILET CLEAN TIME</h4>   
                                        <p className={styles.newDate1}>Date :{newDate}</p>
                                    </div>
                                    <p style={style}> Toilet was cleaned On : 10.50 AM</p>
                                 </div>
                                 <div className={styles.smallCard}>
                                    <div className={styles.innerCard}>
                                    <h4 className="py-3">PEOPLE VISITED TODAY</h4>   
                                        <p className={styles.newDate1}>Date :{newDate}</p>
                                    </div>
                                    <p style={style}> 24 people visited today</p>
                                 </div>
                            </div>
                            <div className="d-flex">
                                <div className={styles.imageArea}>
                                    <img className={styles.ctPhotos} src="https://c8.alamy.com/comp/ET0YB2/toilet-for-gents-ladies-public-toilets-man-woman-men-women-plastic-ET0YB2.jpg" alt="" />
                                    <img className={styles.ctPhotos} src="https://ichef.bbci.co.uk/news/976/cpsprodpb/91C9/production/_130812373_gettyimages-120273953-594x594.jpg" alt="" />
                                    <img className={styles.ctPhotos} src="https://thevoiceofchandigarh.com/wp-content/uploads/2022/06/IMG_20220606_101125.jpg" alt="" />
                                    <img className={styles.ctPhotos} src="https://sbmurban.org/storage/app/media/F7H6Ey6WsAECY3f.jpg" alt="" />
                                    <img className={styles.ctPhotos} src="https://4.imimg.com/data4/WQ/PU/MY-3911057/img-20151029-wa0072.jpg" alt="" />
                                    <img className={styles.ctPhotos} src="https://content.jdmagicbox.com/v2/comp/chennai/q9/044pxx44.xx44.240810211037.q1q9/catalogue/shirajudin-cleaning-services-pallikaranai-chennai-residential-cleaning-services-71iphomecv.jpg" alt="" />
                                </div>
                                <div className={styles.cleaningDetails}>

                                </div>
                            </div>

                        </div>
                        <button onClick={handleShow} type="button" id={styles.closeBtn}  className="btn btn-primary m-1 p-2 px-4">Close</button>
                    </div>
                   
                    </div>
                    }<div className={styles.card}>
                        <div className={styles.logoArea}>
                            <img className={styles.logoImage} src={Btoilet} alt="" />
                        </div>
                        <div className={styles.adressNIDarea}>
                            <p>Adrees :Near kapoori bazar,Bada bazar road </p>
                            <p>Toilet ID :80004512 </p>
                            <p>Ward no : 32 </p>
                            <p>Category : public toilet</p>
                        </div>
                        <div className={styles.caretakerDetails}>
                            <p>Care taker name :Roshan singh</p>
                            <p> Mobile no : 9987541402</p>
                            <p>O&M :ULB </p>
                        </div>
                        <div className={styles.cleanAndOpenArea}>
                            <button onClick={handleShow} type="button" className="btn btn-success my-1">Clean</button>
                            <button type="button" className="btn btn-success my-1">Open</button>
                        </div>
                        <div className={styles.AttendanceRegister}>
                            <button className="btn btn-danger my-1">Download Attendance Register</button>
                        </div>
                   </div>
                   <div className={styles.card}>
                               
                   </div>
                   <div id="centerCard2" className={styles.card}>

                   </div>
                   <div className={styles.card}>

                   </div>
                </div>
            </div>
       </div>
    )
}
export default CareTakerDashboard;