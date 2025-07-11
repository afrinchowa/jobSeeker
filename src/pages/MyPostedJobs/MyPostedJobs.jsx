 import React,{useEffect,useState} from 'react';
import useAuth from '../../hooks/useAuth';
const MyPostedsetJobs = () => {
  const [jobs,setJobs] = useState([]);
  const {user}=useAuth();
  useEffect(() =>{
fetch(`http://localhost:5000/jobs?email=${user.email}`)
.then(res=>res.json)
.then(data=>setJobs(data))
  },[user.email]

  )
  return (
    <div>
   <h2>My Posted jobs:{jobs.lenth}</h>
    </div>
  )
}

export default MyPostedJobs
