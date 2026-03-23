import "../styles/workexperience.scss"
import tw1 from "../assets/work/TW_1.jpg"
import {FigureImage} from "react-bootstrap";

export default function WorkExperience() {
  return (
    <div className="w-100 h-100 flex-column d-flex gap-5">
      {/* Thriftwood Campsite */}
      <div className="work-experience-div">
        <h2>Thriftwood Scout Campsite</h2>
        <div className="d-flex flex-row gap-5">
          <p className="w-50">
            I worked here over 2 full summers (2024 and 2025) as well as for 2 weeks in 2023. My role spanned a wide variety of
            work around the site, with the majority being leading and co-leading activities for young people. These could include
            leading archery, co-leading climbing, kayaking, etc. The role also had site work, with everything from toilet cleaning to
            fence building!
            <br/><br/>
            As a first job, it taught me a lot about work-ethic and working in a larger team - and how coordination and communication
            is very important in teams where everyone is doing different things and different times. I also learnt a lot of responsibility
            in this role, and general common sense.
          </p>
          <FigureImage src={tw1} className="w-50"/>
        </div>

      </div>

      {/* Placement Year (Autodesk) */}
      <div className="work-experience-div">
        <h2>Industrial Placement Year</h2>
        <p>I have secured a placement year at Autodesk! More to come soon when I start in July</p>
      </div>
    </div>
  )
}