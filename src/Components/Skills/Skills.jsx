import Section from "../Section/Section";  
import "./Skills.css";  

export default function Skills() {  
  return (  
    <Section  
      title='MY SPECIALTY'   
      heading='MY SKILLS'   
      content='The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.'  
    >  
      <div className="row">   
        <div className="col-md-6">  
          <h3 className="mb-2 progressTitle">Photoshop</h3>  
          <div className="progress" role="progressbar" aria-label="Photoshop skill level" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">  
            <div className="progress-bar color1" style={{ width: '75%' }}>75%</div>  
            </div>  

          <h3 className="mb-2 progressTitle">HTML5</h3>  
          <div className="progress" role="progressbar" aria-label="HTML5 skill level" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">  
            <div className="progress-bar bg-warning" style={{ width: '85%' }}>85%</div>  
          </div>  

          <h3 className="mb-2 progressTitle">WordPress</h3>  
          <div className="progress" role="progressbar" aria-label="WordPress skill level" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">  
            <div className="progress-bar color3" style={{ width: '70%' }}>70%</div>  
          </div>  
        </div>  

        <div className="col-md-6">  
          <h3 className="mb-2 progressTitle">JQuery</h3>  
          <div className="progress" role="progressbar" aria-label="JQuery skill level" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">  
            <div className="progress-bar bg-danger" style={{ width: '60%' }}>60%</div>  
          </div>  

          <h3 className="mb-2 progressTitle">CSS3</h3>  
          <div className="progress" role="progressbar" aria-label="CSS3 skill level" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">  
            <div className="progress-bar color5" style={{ width: '90%' }}>90%</div>  
          </div>  

          <h3 className="mb-2 progressTitle">SEO</h3>  
          <div className="progress mb-5" role="progressbar" aria-label="SEO skill level" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">  
            <div className="progress-bar color6" style={{ width: '80%' }}>80%</div>  
          </div>  
        </div>  
      </div>  
    </Section>  
  );  
}