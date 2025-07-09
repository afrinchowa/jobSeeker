import React from "react";

const AddJob = () => {
  return (
    <div>
      <form className="card-body">
        {/* job title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="title"
            name="Title"
            placeholder="title"
            className="input input-bordered"
            required
          />
        </div>
        {/* job location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="location"
            placeholder="location"
            name="location"
            className="input input-bordered"
            required
          />
        </div>
        {/* job type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select className="select select-ghost w-full max-w-xs">
            <option disabled selected>
              Pick a job type{" "}
            </option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Contract</option>
            <option>Internship</option>
            <option>Temporary</option>
          </select>
        </div>
        {/* job type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select className="select select-ghost w-full max-w-xs">
            <option disabled selected>
              Pick a job location
            </option>
            <option>Dhaka</option>
            <option>Jessore</option>
            <option>Khulna</option>
            <option>Chittagong</option>
            <option>Rongpur</option>
          </select>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
