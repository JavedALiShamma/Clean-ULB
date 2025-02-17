import { useState } from "react";
import busStation from "../../../assets/icons/buus-station1.png"
import railwayStation from "../../../assets/icons/railwayStation.jpg";
import styles from "./styles.module.css"
const PlacesTile=(props)=>{
    const res=props.data;
   const[isShow,setIsShow]=useState(false);
    const selectPPhoto=(result)=>{
        if(result=="bus stand"){
            return busStation;
        }
        else if(result=="railway station"){
            return railwayStation;
        }
        else if(result=="market"){
                return("https://discoverlehladakh.in/wp-content/uploads/2023/06/Leh-main-market-in-Ladakh.jpg");
        }
        else if(result=="highway"){
                return("https://www.shutterstock.com/image-photo/view-empty-red-road-morning-260nw-1776022208.jpg");
        }
        else {
            return ("https://thumbs.dreamstime.com/b/city-traffic-view-busy-k-r-circle-rotary-devaraj-urs-road-sayyaji-rao-road-intersection-mysore-india-india-night-271664068.jpg");
        }
    }
    return(
 <>
  {isShow && 
  
  <div id={styles.popUpArea} className="p-5 w-100">
    <div id={styles.popUp} className="w-auto p-5 m-auto">
        <h2 className="text-primary">Photos of today before and after</h2>
        <div className="width border p-2 d-flex flex-column">
            <div className="w-100 d-flex flex-column">
                <p>Before</p>
                <img src="https://media.istockphoto.com/id/916291672/photo/indian-women-cleaning-road-in-the-street.jpg?s=612x612&w=0&k=20&c=qWEwLDOVEjpQsZz5m3R6jviuJz6Z8FB7QXR3av2K9vc=" alt="" className="w-100 h-50" />
            </div>
            <div className="w-100">
                <p>After</p>
                <img src="https://img.freepik.com/premium-photo/clean-road-central-delhi-india_271326-323.jpg" className="w-100 h-50" alt="" />
            </div>
        </div>
        <button onClick={(()=>(setIsShow(!isShow)))} type="button"className="btn btn-primary m-1 px-3 py-2">Close</button>
    </div>
  </div>
  
  
  }
<div key={res.placeId} style={{minWidth:"400px",minHeight:"500px" ,height:"500px",maxHeight:"520px"}} className="w-25 border h-50 d-flex justify-content-between flex-column p-1">
  <img src={selectPPhoto(res.place)} alt="" className="img-thumbnail"/>
  <p style={{fontWeight:600}} className="text-center">{res.place} : {res.address}</p>
  <p className="blockquote-footer text-center">ward : {res.ward}</p>
  <div className="w-100 d-flex align-iteams-center justify-content-between">
  <button type="button" className={res.isClean==true? "btn btn-success m-2":"btn btn-danger m-2"}> 
    {res.isClean==true ?"Clean" :"Unclean"}</button>
 <button onClick={(()=>(setIsShow(!isShow)))} type="button" className="btn btn-primary m-2"> View Detals</button>
  {
  (!res.isClean) &&  
  <button type="button" className="btn btn-info m-1"> Alert SI/Jamadar</button>
  }
 </div>
</div>
</>
    )
}
export default PlacesTile;