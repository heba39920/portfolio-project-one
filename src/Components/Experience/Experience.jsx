import Section from "../Section/Section";
import "./Experience.css"
import Work from "./Work"
export default function Experience() {
  return (
   <Section title = "EXPERIENCE" heading= "WORK EXPERIENCE">
   <ul className="timeline">
   <Work  title="Full Stack Developer" time="2017-2018" desc="Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may."/>
   <Work className="bg-danger" title="Front End Developer at Google Company" time="2017-2018" desc="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."/>
   <Work className="bg-warning" title="System Analyst" time="2017-2018" desc="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."/>
   <li> <div className="timeline-badge-end"></div> </li>

   </ul>
   </Section>
  )
}
