import { Tab, Tabs } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createSearchParams, Route, Routes, useNavigate } from "react-router";
import AllQueryPage from "../AllQuery";
import PendingQueriesArea from "../PendingQueries";
import ResolvedComplaintArea from "../CompletedQueries";

const GRMainPage=()=>{
    const navigate=useNavigate();
    const handleClick=(e)=>{
       if(e=="all"){
        navigate({
            pathname:"/GrievanceRedressal/AllComplaints",
            search:createSearchParams({
                
            }).toString()
        })
       }
       else if(e=="Pending"){
        navigate({
            pathname:"/GrievanceRedressal/PendingComplaints",
            search:createSearchParams({
                
            }).toString()
        })
       }
       else if(e=="resolved"){
        navigate({
            pathname:"/GrievanceRedressal/ResolvedComplaints",
            search:createSearchParams({
                
            }).toString()
        })
       }
    }
    return(
        <div className="w-100">
            <div className="w-100 d-flex justify-content-between">
            <Tabs
            onSelect={((e)=>(handleClick(e)))}
      defaultActiveKey="all"
      id="justify-tab-example"
      className="mb-3 w-100"
      justify
    >
      <Tab selected className="text-success" eventKey="all" title="All Complaints">
        
      </Tab>
      <Tab eventKey="Pending" title="Pending">
       
      </Tab>
      <Tab eventKey="resolved" title="Resolved">
      
      </Tab>
      <Tab eventKey="Reverted back" title="Reverted Back" >
      
      </Tab>
    </Tabs>
            </div>
            <div className="w-100 border m-2">
                <Routes>
                    <Route  path="/AllComplaints"
                        element={<AllQueryPage/>}></Route>
                        <Route path="/PendingComplaints"
                        element={<PendingQueriesArea/>}
                        ></Route>
                        <Route path="/ResolvedComplaints"
                                element={<ResolvedComplaintArea/>}
                        >

                        </Route>
                </Routes>
            </div>
        </div>
    )
}
export default GRMainPage;