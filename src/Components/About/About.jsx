
import Section from "../Section/Section";
import "./About.css";
import Card from "./Card";

export default function About() {

  return (
  <Section title='ABOUT US' heading='WHO AM I?' content={[<strong key={"first"}>Hi Im Jackson Ford</strong> ,' On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.']}>
    <p className="Content">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
    <div className="row">
    <Card title="Graphic Design" iconName="icons iconTwo" className="colorOne" icon= <i className="fa-solid fa-lightbulb"></i>/>
    <Card title="Web Design"  iconName="icons iconThree" className="colorTwo" icon= <i className="fa-solid fa-earth-africa"></i>/>
    <Card title="Software"  iconName="icons iconFour" className="colorThree" icon= <i className="fa-solid fa-database"></i>/>
    <Card title="Application"  iconName="icons iconFive" className="colorFour" icon= <i className="fa-solid fa-mobile-screen-button"></i>/>

    </div>
    </Section>
  )
}
