import { Outlet } from "react-router-dom";  
import SideBar from "../SideBar/SideBar";  
import { useState } from "react";  

export default function MasterLayout() {  
  const [showModal, setShowModal] = useState(false);  
  
  function toggleSideBar() {  
    setShowModal(!showModal);  
  }  
  function closeSidebar(){
 setShowModal(false)
  }
  return (  
    <>
   
    <div className="container-fluid">  
      <div className="row">  
        <span   
          className="text-black toggleIcon d-block d-md-none"   
          onClick={toggleSideBar}   
          aria-hidden="true"  
        >  
          <i className="fa-solid fa-bars"></i>  
        </span>  
        <div className={`col-lg-1 px-0 ${showModal ? 'd-block' : 'd-none d-lg-block'}`}>  
          <SideBar closeSideBar={closeSidebar} showModal={showModal} />  
        </div>  
        <div className="col-lg-11 px-0" >  
        <div className={`overLay ${showModal? 'd-block' : 'd-none'}`} onClick={closeSidebar}></div>
          <Outlet/>  
        </div>  
      </div>  
    </div> 
     </>
  );  
}