import FAQsQuestions from "./component/FAQS";
import NHeader from "./component/Netflix_Header";
import "./App.css"
import Nmain from "./component/netflixMain";
import {QNA} from "./utils/FAQ_QNA.js"
import FormDetails from "./forms/index.jsx";
import Counter from "./component/class Component/index.jsx";
import LifeCycle from "./component/class Component/ClassComponentLifeCycle/index.jsx";
import HookArea from "./Hooks/index.jsx";
import FeedbackArea from "./component/feedback/index.jsx";
import { BrowserRouter, Routes,Route } from "react-router";
import DashboardMain from "./component/Dashboard/ULBPanel/index.jsx";
import AddNewToilet from "./component/AddNewToilet/index.jsx";
import RRRform from "./component/RRR_form/index.jsx";
import MobileMainDashboard from "./Mobile App/MainDashboard/index.jsx";



const Header=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/Officials" element={<MobileMainDashboard/>}></Route>
      <Route path="/newEntry" element={<RRRform/>}></Route>
      <Route path="/ULBDashboard/*" element={<DashboardMain/>}></Route>
      <Route path="/feedbackForm" element ={<FeedbackArea/>}></Route>
      <Route path="*" element={<DashboardMain/>}></Route>
    {/* <NHeader/>
    <Nmain/>
    <HookArea/>
    <FAQsQuestions/>
    <FormDetails/> */}
    {/* <Counter count={10}/>
    <LifeCycle/> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default Header;
