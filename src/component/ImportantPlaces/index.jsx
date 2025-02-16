import { useState } from "react"
import busStation from "../../assets/icons/buus-station1.png"
import railwayStation from "../../assets/icons/railwayStation.jpg"
import { PlacesData } from "../../utils/OtherImportantPlacesData/places"
import PlacesTile from "./PlacesTile"
const ImportantPlacesArea =()=>{
    const[currData,setData]=useState(PlacesData);
    return(
        <div className="w-100 p-3">
        <h2 className="">All the important places in the ULB</h2>
        <p className="lead">In this section ULB can maintain all the Important places are cleaned or not</p>
            <div className="w-100 p-2 d-flex m-2 flex-wrap gap-5">
            {/* <div className="w-25 border h-50 d-flex flex-column">
                    <img src={busStation} alt="" className="img-thumbnail"/>
                    <p style={{fontWeight:600}} className="text-center">Bus stand : Near nirzala mandir</p>
                    <p className="blockquote-footer text-center">ward : 12</p>
                    <div className="w-100 d-flex align-iteams-center justify-content-between">
                        <button type="button" className="btn btn-success m-1 "> Clean</button>
                        <button type="button" className="btn btn-primary m-1"> View Detals</button>
                        <button type="buttn" className="btn btn-info m-1"> Alert SI/Jamadar</button>
                    </div>
            </div> */}
           
               {currData.map((ele)=>(
                <PlacesTile key={ele.placeId} data={ele} />
               ))}
          
           
            </div>
        </div>
    )
}
export default ImportantPlacesArea;