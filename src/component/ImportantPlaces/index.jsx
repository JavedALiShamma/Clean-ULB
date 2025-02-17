import { useState } from "react"
import busStation from "../../assets/icons/buus-station1.png"
import railwayStation from "../../assets/icons/railwayStation.jpg"
import { PlacesData } from "../../utils/OtherImportantPlacesData/places"
import PlacesTile from "./PlacesTile"
import PieChartArea from "../pieChart"
const ImportantPlacesArea =()=>{
    const[currData,setData]=useState(PlacesData);
    const handleClick=(e)=>{
        console.log(e.key);
    }
    const handleChange=(e)=>{
       let value=e.target.value;
       if(value=="all"){
            setData(PlacesData);
       }
       else{
        const result=PlacesData.filter((e)=>(e.place==value));
        
        setData(result);
       }
    }
    return(
        <div className="w-100 p-3">
        <h2 className="">All the important places in the ULB</h2>
        <p className="lead">In this section ULB can maintain all the Important places are cleaned or not</p>
            <div className="w-100 p-2 d-flex m-2 flex-wrap gap-5">
          
                <div className="w-100 border p-2">
                    <div className="w-100 d-flex align-items-center">
                        <p className="m-1 p-1 font-weight-bold text-danger">Select the category to choose</p>
                    <select onChange={handleChange} className="form-select w-25" aria-label="Default select example">
                      <option value="all" >All</option>
                      <option value="bus stand">Bus stand</option>
                      <option value="railway station">Railway Station</option>
                      <option value="highway">Highway</option>
                      <option value="circle">Circle</option>
                      <option value="market">Market</option>
                      <option value="others">Others</option>
                    </select>
                    </div>
                    <div className="w-100 border d-flex">
                    <div className="w-50 m-auto  p-3 d-flex gap-3">
                    <div onClick={((e)=>(handleClick(e)))} style={{backgroundColor:"#e7e7e7",fontWeight:900, cursor:"pointer"}} className="w-25 h-50 text-center text-primary p-2">
                                <p>All Places</p>
                                <p style={{fontWeight:700}} className="display-1">{currData.length}</p>
                            </div>
                            <div style={{backgroundColor:"#e7e7e7",fontWeight:900, cursor:"pointer"}} className="w-25 h-50 text-center text-success p-2">
                                <p>Places Cleaned</p>
                                <p style={{fontWeight:700}} className="display-1">{currData.filter((e)=>(e.isClean==true)).length}</p>
                            </div>
                            <div style={{backgroundColor:"#e7e7e7",fontWeight:900, cursor:"pointer"}} className="w-25 h-50 text-center text-danger p-2">
                                <p>Places Unclean</p>
                                <p style={{fontWeight:700}} className="display-1">{currData.filter((e)=>(e.isClean==false)).length}</p>
                            </div>
                           
                    </div>
                    <div className="w-50 border">
                    <PieChartArea data={[currData.filter((e=>(e.isClean==true))).length,currData.filter((e)=>(e.isClean==false)).length]}/>
                    </div>
                </div>
                </div>
                
               {currData.map((ele)=>(
                <PlacesTile key={ele.placeId} data={ele} />
               ))}
          
           
            </div>
        </div>
    )
}
export default ImportantPlacesArea;