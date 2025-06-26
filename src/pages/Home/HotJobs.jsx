import React, { useEffect, useState } from 'react'
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
     const [jobs,setJobs]=useState([]);
      useEffect(() => {
        fetch('http://localhost:5000/jobs')
        .then(res =>res.json())
        .then(data =>setJobs(data))
      },[])
  return (
    <div>
     <div>
        {
            jobs.map(job => <HotJobsCard key={job._id} job={job} className="card w-96 bg-base-100 shadow-xl m-5"></HotJobsCard> )}
     </div>
    </div>
  )
}

export default HotJobs


