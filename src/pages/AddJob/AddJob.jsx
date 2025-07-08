import React from 'react'

const AddJob = () => {
  return (
    <div>
    <form className="card-body">
        {/* job title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="title" name="Title" placeholder="title" className="input input-bordered" required />
        </div>
        {/* job location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="location" placeholder="location" name="location" 
          className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      

    </div>
  )
}

export default AddJob
