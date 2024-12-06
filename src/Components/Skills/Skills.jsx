import Section from "../Section/Section";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./Skills.css"
export default function Skills() {
  return (
    <Section  title='MY SPECIALTY' heading='MY SKILLS' content='The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.'>
  <div className="row"> 
   <div className="col-md-6">
   <h3 className="mb-2 progressTitle">Photoshop</h3>

   <ProgressBar  variant="info" now={75} className="color1"/>
   <h3 className="mb-2 progressTitle">HTML5</h3>
   <ProgressBar variant="warning" now={85} className="color2" />
   <h3 className="mb-2 progressTitle">WordPress</h3>
   <ProgressBar variant="success" now={70} className="color3"/>
   </div>
   <div className="col-md-6">
   <h3 className="mb-2 progressTitle">JQuery</h3>

   <ProgressBar variant="danger" now={60} className="color4"/>
   <h3 className="mb-2 progressTitle">CSS3</h3>
   <ProgressBar variant="black" now={90} className="color5"/>
   <h3 className="mb-2 progressTitle">SEO</h3>
   <ProgressBar variant="info" now={80} className="color6"/>
   </div>
     </div>
    </Section>
  )
}

// <ProgressBar variant="success" now={40} />
// <ProgressBar variant="info" now={20} />
// <ProgressBar variant="warning" now={60} />
// <ProgressBar variant="danger" now={80} />
//  <div className="proColor2 progress"><div role="progressbar" className="progress-bar bg-warning" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style="width: 85%;"></div></div><div className="proColor3 progress"><div role="progressbar" className="progress-bar bg-success" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div></div>