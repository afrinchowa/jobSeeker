/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
        .catch(err => console.error('Failed to load jobs:', err));
    }
  }, [user?.email]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6">
        My Posted Jobs <span className="text-primary">({jobs.length})</span>
      </h2>

      <div className="overflow-x-auto rounded shadow bg-white">
        <table className="table w-full">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Applications</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {jobs.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  You haven't posted any jobs yet.
                </td>
              </tr>
            ) : (
              jobs.map((job, index) => (
                <tr key={job._id || index}>
                  <td>{index + 1}</td>
                  <td>{job.title || 'Untitled Job'}</td>
                  <td>{job.applicationdeadline || 'N/A'}</td>
                  <td>{job.applicationCount || 0}</td>
                  <td>
                    <Link to={`/viewApplication/${job._id}`}>
                      <button className="btn btn-sm btn-outline btn-primary">
                        View Applications
                      </button>
                    </Link>
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

export default MyPostedJobs;
