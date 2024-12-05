import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";



export default function MasterLayout() { 
return(
    
  <div className="container-fluid">  
  <div className="row">  
    <div className="col-lg-1 px-0 d-none d-lg-block">  
      <SideBar />  
    </div>  
    <div className="col-lg-11  px-0">  
      <Outlet />  
    </div>  
  </div>  
</div> 

 )   }