/* eslint-disable react/prop-types */


export default function Work({ title, time, desc, className }) {
  return (
    <li>
      <div className={`timeline-badge ${className}`} ><i className="fa-solid fa-pencil"></i></div>

      <div className="timeline-panel">
        <h2>
          <a href="#">{title}</a>
          <span> {time}</span>
        </h2>
        <p>{desc}</p>
      </div>

    </li>
  )
}
