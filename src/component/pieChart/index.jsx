import { Chart } from "react-google-charts";

const PieChartArea=(props)=>{
          const res=props.data;
      
        
 
    const data = [
        ["feedback", "per Month"],
    
        ["Dissatisfactory", 0],
        ["Unclean", res[1]] ,
        ["Very Satisfactory", 0],
        ["Clean",res[0]],  
      ];
    
      const options = {
        title: "Overall Feedback",
      };
    
    return(

       <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />

    )
}
export default PieChartArea;