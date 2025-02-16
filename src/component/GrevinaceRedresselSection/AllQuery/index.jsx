import DounghnutChart from "../../DoughnutChart";

const AllQueryPage=()=>{
       
    return(
        <>
        
        <div className="w-100 d-flex align-iteams-center">
            <div className="w-50">
                <DounghnutChart/>
                </div> 
            <div className="w-50 p-5 ">
                <div className=" w-100 border border-success">
                    <h3 className="text-center text-info border borderb-dark">Overall status of all complaints</h3>
                    <div className="w-100 d-flex">
                        <div className="w-75">
                            <div id="completedComplaintArea" style={{width:"70%",background:"green",color:"green"}} className="bg-green my-4 p-2">⬭</div>
                            <div id="completedComplaintArea" style={{width:"10%",background:"red",color:"red"}} className="bg-green my-4 p-2">⬭</div>
                            <div id="completedComplaintArea" style={{width:"20%",background:"blue",color:"blue"}} className="bg-green my-4 p-2">⬭</div>
                        </div>
                        <div className="w-25">
                            <p className=" text-success my-4 p-2">Resolved</p>
                            <p className=" text-danger my-4 p-2">Pending</p>
                            <p className=" text-primary my-4 p-2">Back tracked</p>
                        </div>
                    </div>
                </div>
                </div> 
        </div>
        <div className="w-100 p-3">
            <div className="w-100 p-2 border">
                <p className="text-center p-2 lead">Filter complaints through category</p>
                <div className="w-100 d-flex justify-content-between">
                    <select class="form-select form-select-lg mb-3 w-25" aria-label=".form-select-lg example">
                      <option selected>Select complaint category</option>
                      <option value="1">Dead Animal</option>
                      <option value="2">garbage bin not clean</option>
                      <option value="3">Garabage Vehicle </option>
                    </select>
                    <select class="form-select form-select-lg mb-3 w-25" aria-label=".form-select-lg example">
                      <option selected>Select ward</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">4</option>
                    </select>
                    <select class="form-select form-select-lg mb-3 w-25" aria-label=".form-select-lg example">
                      <option selected>Select Zone</option>
                      <option value="1">North</option>
                      <option value="2">South</option>
                      <option value="3">East</option>
                      <option value="4">West</option>
                    </select>
                </div>
            </div>
        </div>
        </>
    )
}
export default AllQueryPage;