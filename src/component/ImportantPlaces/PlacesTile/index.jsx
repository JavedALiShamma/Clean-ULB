import busStation from "../../../assets/icons/buus-station1.png"
import railwayStation from "../../../assets/icons/railwayStation.jpg"
const PlacesTile=(props)=>{
    const res=props.data;
   
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
<div key={res.placeId} style={{minWidth:"400px",minHeight:"500px" ,height:"500px",maxHeight:"500px"}} className="w-25 border h-50 d-flex justify-content-between flex-column p-3">
  <img src={selectPPhoto(res.place)} alt="" className="img-thumbnail"/>
  <p style={{fontWeight:600}} className="text-center">{res.place} : {res.address}</p>
  <p className="blockquote-footer text-center">ward : {res.ward}</p>
  <div className="w-100 d-flex align-iteams-center justify-content-between">
  <button type="button" className={res.isClean==true? "btn btn-success m-2":"btn btn-danger m-2"}> 
    {res.isClean==true ?"Clean" :"Unclean"}</button>
  <button type="button" className="btn btn-primary m-2"> View Detals</button>
  {
  (!res.isClean) &&  
  <button type="buttn" className="btn btn-info m-1"> Alert SI/Jamadar</button>
  }
 </div>
</div>
    )
}
export default PlacesTile;