import React from "react"

const JobCard = () => {
  const skills = ["Python", "Mysql", "AWS"]
  const profile = "SDE 2"
  const department = "Engineering"
  const postDate = "2"

  return (
    <div className="job-card">
      <div className="job-card__left-section">
        <div className="job-card__profile">
          <h2> {profile} </h2>
          <p> {department} </p>
        </div>
        <p>Full Time &#x2022; Fresher &#x2022; In-Office</p>
        <div className="job-card__requirements">
          {skills.map((skill) => (
            <p key={skill}>{skill}</p>
          ))}
        </div>
      </div>
      <div className="job-card__right-section">
        <p>Posted {postDate} Days Ago</p>
        <button>View</button>
      </div>
    </div>
  )
}

export default JobCard
