import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sortBy, search } from "../features/sort_filter_search/sortFilterSlice";

export default function Joblistheading({ title, jobs }) {
  const dispatch = useDispatch();

  const handleSort = (event) => {
    dispatch(sortBy({ jobs, sortBy: event.target.value }));
  };

  const handleSearch = (event) => {
    console.log(event.target.value);
    const searchTerm = event.target.value;
    dispatch(search({ jobs, searchTerm: searchTerm }));
  };

  return (
    <>
      <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
        <h1 className="lws-section-title">{title}</h1>
        <div className="flex gap-4">
          <div className="search-field group flex-1">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input
              type="text"
              placeholder="Search Job"
              className="search-input"
              id="lws-searchJob"
              onChange={handleSearch}
            />
          </div>
          <select
            id="lws-sort"
            name="sort"
            autocomplete="sort"
            className="flex-1"
            onChange={handleSort}
          >
            <option value="Default">Default</option>
            <option value="LowToHigh">Salary (Low to High)</option>
            <option value="HighToLow">Salary (High to Low)</option>
          </select>
        </div>
      </div>
    </>
  );
}
