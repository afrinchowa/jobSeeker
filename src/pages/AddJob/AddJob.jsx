import React from "react";

const AddJob = () => {
  const handleAddJob =e =>{
    e.preventDefault();
    const formData =new FormData(e.target);
      console.log(formData.entries());
      const initialData = Object.formEntries(formData.entries())
      console.log(initialData)
    const {min ,max,currency,...newJob}=initialData;
    console.log(newJob)
    newJob.salaryRange={min,max,currency}
  }
  return (
    <div className="p-4 md:p-10 bg-base-100 shadow-md rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Post a New Job</h2>
      <form className="space-y-6">
        {/* Job Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Software Engineer"
            className="input input-bordered"
            required
          />
        </div>

        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="e.g. TB Company"
            className="input input-bordered"
            required
          />
        </div>

        {/* Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="e.g. Banani, Dhaka"
            className="input input-bordered"
            required
          />
        </div>

        {/* Job Type & Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Job Type</span>
            </label>
            <select name="jobType" className="select select-bordered" required>
              <option disabled selected>Choose type</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
              <option>Internship</option>
              <option>Temporary</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="e.g. Marketing, Design, Tech"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        {/* Application Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Application Deadline</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            className="input input-bordered"
            required
          />
        </div>

        {/* Salary Range */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Min Salary</span>
            </label>
            <input
              type="number"
              name="min"
              placeholder="e.g. 30000"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Max Salary</span>
            </label>
            <input
              type="number"
              name="max"
              placeholder="e.g. 50000"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Currency</span>
            </label>
            <select name="currency" className="select select-bordered" required>
              <option disabled selected>Select</option>
              <option>BDT</option>
              <option>USD</option>
              <option>EURO</option>
            </select>
          </div>
        </div>

        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Write job description here..."
            className="textarea textarea-bordered"
            required
          ></textarea>
        </div>

        {/* Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Requirements</span>
          </label>
          <textarea
            name="requirements"
            placeholder="Each requirement in a new line"
            className="textarea textarea-bordered"
            required
          ></textarea>
        </div>

        {/* Responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Responsibilities</span>
          </label>
          <textarea
            name="responsibilities"
            placeholder="Each responsibility in a new line"
            className="textarea textarea-bordered"
            required
          ></textarea>
        </div>

        {/* HR Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="e.g. Farhan Rahman"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">HR Email</span>
            </label>
            <input
              type="email"
              name="hr_email"
              placeholder="e.g. hr@company.com"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        {/* Company Logo URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Company Logo URL</span>
          </label>
          <input
            type="url"
            name="company_logo"
            placeholder="https://your-logo-link.com"
            className="input input-bordered"
          />
        </div>

        {/* Status */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Status</span>
          </label>
          <select name="status" className="select select-bordered" required>
            <option disabled selected>Select job status</option>
            <option>active</option>
            <option>inactive</option>
            <option>closed</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
