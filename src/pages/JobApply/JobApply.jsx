import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2'
const JobApply = () => {
  const { id } = useParams();
  const {user}=useAuth();
  // console.log(id,user);

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedinurl = form.linkedinurl.value;
    const githuburl = form.githuburl.value;
    const resumeurl = form.resumeurl.value;
 /*    console.log(linkedinurl, githuburl, resumeurl); */
    const jobApplication ={
      job_id:id,
      applicant_email:user.email,
      linkedinurl,
      githuburl,
      resumeurl
    }
    fetch("http://localhost:500/job-applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobApplication),
  })
  .then(res => res.json())
  .then(data => {
  if(data.insertedId){
    Swal.fire({
  title: "Good job!",
  text: "Your work has been saved",
  icon: "success",
  timer: 1500,
  showConfirmButton: false
});
  form.reset();
  }
});
  }
  })

}
  return (
    <div className="card bg-base-100 w-full  shadow-2xl">
      <h1 className="text-5xl font-bold text center">
        Apply job and Good Luck!
      </h1>
      <form onSubmit={submitJobApplication} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIN URL</span>
          </label>
          <input
            type="url"
            placeholder="Linkedin URL"
            name="linkedinurl"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input
            type="url"
            placeholder="Github URL"
            name="githuburl"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">RESUME URL</span>
          </label>
          <input
            type="url"
            placeholder="Resume URL"
            name="Resume URL"
            className="input input-bordered"
            required
          />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
