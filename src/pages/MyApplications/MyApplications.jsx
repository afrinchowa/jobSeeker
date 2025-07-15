/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/job-applications?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setJobs(data))
        .catch((error) => console.error('Error fetching job applications:', error));
    }
  }, [user?.email]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6">
        My Applications <span className="text-primary">({jobs.length})</span>
      </h2>

      <div className="overflow-x-auto rounded shadow bg-white">
        <table className="table w-full">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>#</th>
              <th>Job Info</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {jobs.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No applications found.
                </td>
              </tr>
            ) : (
              jobs.map((job, index) => (
                <tr key={job._id || index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-4">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={job.company || 'https://via.placeholder.com/48'}
                            alt="Company Logo"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{job.title}</div>
                        <div className="text-sm text-gray-500">{job.companyName || 'Unknown Company'}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-outline">{job.location || 'N/A'}</span>
                  </td>
                  <td>
                    <span className="badge badge-success">Applied</span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline">Details</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
