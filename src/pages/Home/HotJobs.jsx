import React, { useEffect, useState } from 'react'

const HotJobs = () => {
     const [jobs,setJobs]=useState([]);
      useEffect(() => {
        fetch('http://localhost:5000/jobs')
        .then(res =>res.json())
        .then(data =>setJobs(data))
      },[])
  return (
    <div>
     
    </div>
  )
}

export default HotJobs


