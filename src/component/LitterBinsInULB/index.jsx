import styles from "./styles.module.css"
import source_seg from "../../assets/icons/source-segregation1.png"
import litterBin from "../../assets/icons/litterBin.png"
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import PopUp from "../popUpBins";
import { LitterBinData } from "./litterBin";
import ColumnCharts from "../charts/Bar charts";

import PieChartArea from "../pieChart";
const LitterBins=()=>{
    const[data,setData]=useState(LitterBinData);

  const filterData=(e)=>{
    if(e=="cleanBins"){
      
        let currData=LitterBinData.filter((ele)=>(
            ele.isClean==true
        ))
        setData(currData);  
    }
    else if(e=="uncleanBins"){
        let currData=LitterBinData.filter((ele)=>(
            ele.isClean==false
        ))
        setData(currData);  
    }
    else{
        setData(LitterBinData);
    }
  }
    return(
       <div className={styles.litterBinMainArea}>
            <div className={styles.headerArea}>
                <h2 className="px-2">All Bins in the ULB</h2>
                <p className={styles.fadedHeading}> This section will tell us all the details of the litter bins's in ulb</p>
            </div>
            <div className={styles.pieChartArea}>
          <div className={styles.binAreaSection}>
                <h2 className="text-primary display-7 p-2">Monitor litter bins and GVP in the ULB</h2>
                <p className="px-2"style={{color:"#9697ab"}} >ULB can monitor all the bins and garbage vulenrable point/ CTU from this section</p>
                <div className={styles.numberSection}>
                    <div onClick={(e)=>{filterData("allBins")}} id={"totalBins"} className={styles.totalBins}>
                        <p style={{fontWeight:700,color:"blue"}}>Total Bins</p>
                        <p style={{fontSize:"100px",fontWeight:"700"}} className="display-1 text-center text-primary">{LitterBinData.length}</p>
                       
                    </div>
                    <div onClick={(e)=>{filterData("cleanBins")}} id="cleanBins" className={styles.totalBins}>
                        <p style={{fontWeight:700,color:"green"}}>Bins Cleaned</p>
                        <p style={{fontSize:"100px",fontWeight:"700"}} className="display-1 text-center text-success">{(LitterBinData.filter((e)=>(e.isClean==true))).length}</p>
                    </div>
                    <div onClick={(e)=>{filterData("uncleanBins")}} id="uncleanBins" className={styles.totalBins}>
                        <p style={{fontWeight:700,color:"red"}}>Unclean Bins</p>
                        <p style={{fontSize:"100px",fontWeight:"700"}} className="display-1 text-center text-danger">{(LitterBinData.filter((e)=>(e.isClean==false))).length}</p>
                    </div>
                </div>
          </div>
          <div className={styles.pieCharSection}>

          <PieChartArea data={[data.filter((e)=>(e.isClean==true)).length,data.filter((e)=>(e.isClean==false)).length]}/>
          </div>
            </div>
                <div id={styles.cardAreaSection} className="d-flex align-content-start flex-wrap">
                {data.map((ele)=>(
                    <PopUp key={ele.id} data={ele}/>
                ))}
                </div>
           
           
       </div>
    )
}
export default LitterBins;