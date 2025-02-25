import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "../Login";
import EODashboard from "../ExecutiveOfficer/EODashboard";

const MobileMainDashboard=()=>{
    return(
        // <div className="w-100 p-1">
        //     <LoginPage/>
        // </div>
      
        <Routes>
            <Route path="Login" element={<LoginPage/>}>

            </Route>
            <Route path="/EODashboard/:eoId" element={<EODashboard/>}></Route>
        </Routes>
        
    )
}
export default MobileMainDashboard;