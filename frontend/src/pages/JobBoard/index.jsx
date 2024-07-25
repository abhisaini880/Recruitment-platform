import React from "react"
import JobCard from "./Components/JobCard"
import SearchBar from "./Components/SearchBar"

import "./JobBoard.css"

const JobBoard = () => {
  return (
    <div className="job-board">
      <h1>JobBoard</h1>
      <div className="job-board__search">
        <SearchBar />
      </div>
      <div className="job-board__cards">
        <JobCard />
      </div>
    </div>
  )
}

export default JobBoard
