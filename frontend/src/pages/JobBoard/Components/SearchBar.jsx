import React from "react"

const SearchBar = () => {
  return (
    <div className="search-bar">
      <select className="search-bar__select">
        <option value="" disabled hidden selected>
          Department
        </option>
        <option value="">Engineering</option>
        <option value="">Marketing</option>
        <option value="">HR</option>
        <option value="">Finance</option>
        <option value="">Operations</option>
        <option value="">Sales</option>
      </select>
      <select className="search-bar__select">
        <option value="" disabled hidden selected>
          Location
        </option>
        <option value="">India</option>
        <option value="">Singapore</option>
        <option value="">UAE</option>
      </select>
      <select className="search-bar__select">
        <option value="" disabled hidden selected>
          Job Type
        </option>
        <option value="">Full Time</option>
        <option value="">Internship</option>
        <option value="">Part Time</option>
        <option value="">Contract</option>
      </select>
      <select className="search-bar__select">
        <option value="" disabled hidden selected>
          Experience
        </option>
        <option value="">Fresher</option>
        <option value="">Junior Level</option>
        <option value="">Mid Level</option>
        <option value="">Senior Level</option>
      </select>
      <button className="search-bar__button">Search</button>
    </div>
  )
}

export default SearchBar
