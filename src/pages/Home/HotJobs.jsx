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
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  text-center my-10'>
        {
            jobs.map(job => <HotJobsCard key={job._id} job={job} className="card w-96 bg-base-100 shadow-xl m-5"></HotJobsCard> )}
     </div>
    </div>
  )
}

export default HotJobs


