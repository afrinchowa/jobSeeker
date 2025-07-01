import React from 'react'
import { useParams } from 'react-router-dom';
const JobApply = () => {

  const {id} =useParams();
  console.log(id);

  const submitJobApplication = e =>{
    e.preventDefault();
    const form = e.target;
    const linkedinurl = form.linkedinurl.value;
    const githuburl = form.githuburl.value;
    const resumeurl = form.resumeurl.value;
    console.log(linkedinurl, githuburl, resumeurl);
  }
  return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form  onSubmit={submitJobApplication} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIN URL</span>
          </label>
          <input type="url" placeholder="Linkedin URL" name='linkedinurl' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input type="url" placeholder="Github URL" name='githuburl' className="input input-bordered" required />

        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">RESUME URL</span>
          </label>
          <input type="url" placeholder="Resume URL" name='Resume URL' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default JobApply
