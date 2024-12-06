import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";



export default function MasterLayout() { 
  const [showModal, setShowModal]= useState(false);
  function toggleSideBar(){
    setShowModal(!showModal);
    }
return(
    
  <div className="container-fluid">  
  <div className="row">  
    <div className="col-lg-1 px-0 d-none d-lg-block"> 
    <SideBar/> 
     {showModal && ( <SideBar toggleSideBar={toggleSideBar} />)  }
    </div>  
    <div className="col-lg-11  px-0">  
      <Outlet />  
    </div>  
  </div>  
</div> 

 )   }