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
        <h2 className="mx-4 text-dark">All Complaints</h2>
        <div className="w-100 border d-flex">
            <div className="w-50 d-flex border border-primary">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fu7KDi1Z9vjE4qy7HroAIl-Go0FmUrNi_g&s" alt="" className="img-thumbnail p-2" />
            <div className="w-100 d-flex flex-column">
            <p className="p-2 text-danger">
            शिकायत श्रेणी : मृत जानवर</p>
            <p>आवेदक का नाम : 
            केशव कुमार</p>
            <p>
            पता :कपूर पब्लिक स्कूल के पास, शास्त्री नगर</p>
            <p className="px-2 text-wrap">
            शिकायत विवरण : कल सुबह से मृत जानवर पालिका द्वार एनएच उठाया गया है</p>
            <p>
            वार्ड: 25</p>
            <p>शिकायत की तारीख : 15-2-2025</p>
            <p>
            शिकायत का समय : 04:10 PM</p>
            <div className="w-100 d-flex align-items-center justify-content-center">

            <p className="mx-2 badge bg-primary text-wrap w-25">Complaint ID : 8004512455AS045</p>
            <button type="btn" className="btn btn-danger m-1">Status : Pending</button>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default AllQueryPage;