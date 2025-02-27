 let bin_percentage=0;

  const apiCall=async({path,method="GET"})=>{
    const baseURL="https://retoolapi.dev/rAqhrd";
    const url=baseURL+path;
    try{
      const res=await fetch(url,{
        method,
      });
      if(res.status >=200 && res.status<400){
        
        const data=await res.json();
        console.log("data recieved")
        return data;
      }
      throw new Error(res.statusText);
    }
    catch(e){
      console.log("ERROR in",url,e);
    }
  }
  const binCalculation=apiCall({path:"/data"});
  // binCalculation.then(async(user)=>{
  //   bin_percentage=cleanedPercentage(user);
  //  console.log("bin_perc",bin_percentage);
  // })
  // export default bin_percentage;
  export default binCalculation;