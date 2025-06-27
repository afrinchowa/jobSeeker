import React from 'react';
import { useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    title,
    company,
    location,
    type,
    salary,
    description,
    postedDate,
    deadline,
    requirements
  } = job || {};

  return (
    <div className="max-w-4xl mx-auto p-6 my-8 bg-white shadow-md rounded-lg">
      {/* Job Header */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="text-lg text-gray-600">{company}</p>
        <p className="flex items-center text-sm text-gray-500 mt-1">
          <CiLocationOn className="mr-1" /> {location}
        </p>
      </div>

      {/* Job Description */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Job Description</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Requirements</h3>
        <div className="flex flex-wrap gap-2">
          {requirements?.map((req, idx) => (
            <span
              key={idx}
              className="bg-gray-100 px-3 py-1 rounded-md text-sm text-gray-700 border hover:bg-blue-100 hover:text-blue-600 transition"
            >
              {req}
            </span>
          ))}
        </div>
      </div>

      {/* Job Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <p className="font-medium text-gray-600">Job Type:</p>
          <p className="text-gray-800">{type}</p>
        </div>
        <div>
          <p className="font-medium text-gray-600">Salary:</p>
          <p className="text-gray-800">{salary}</p>
        </div>
        <div>
          <p className="font-medium text-gray-600">Posted On:</p>
          <p className="text-gray-800">{postedDate}</p>
        </div>
        <div>
          <p className="font-medium text-gray-600">Application Deadline:</p>
          <p className="text-gray-800">{deadline}</p>
        </div>
      </div>

      {/* Apply Button */}
      <div className="text-right">
        <button className="btn btn-primary px-6 py-2 text-white font-medium rounded-md shadow hover:bg-blue-600 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
