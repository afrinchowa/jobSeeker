import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedinurl = form.linkedinurl.value;
    const githuburl = form.githuburl.value;
    const resumeurl = form.resumeurl.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedinurl,
      githuburl,
      resumeurl,
    };

    fetch("http://localhost:500/job-applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Application Submitted!",
            text: "Good luck 🍀 We're rooting for you!",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-10 space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-indigo-700">
          🚀 Apply for the Opportunity
        </h1>
        <p className="text-center text-gray-500">Show us who you are!</p>

        <form onSubmit={submitJobApplication} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              LinkedIn Profile
            </label>
            <input
              type="url"
              name="linkedinurl"
              placeholder="https://linkedin.com/in/yourname"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              GitHub Profile
            </label>
            <input
              type="url"
              name="githuburl"
              placeholder="https://github.com/yourname"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Resume Link
            </label>
            <input
              type="url"
              name="resumeurl"
              placeholder="https://yourdomain.com/resume.pdf"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="btn btn-primary w-full text-white transition-all duration-300 hover:scale-105"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
