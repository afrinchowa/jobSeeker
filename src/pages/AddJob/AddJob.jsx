import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddJob = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    const { min, max, currency, requirements, responsibilities, ...rest } = formValues;

    const newJob = {
      ...rest,
      salaryRange: {
        min: parseInt(min),
        max: parseInt(max),
        currency,
      },
      requirements: requirements.split("\n").filter(Boolean),
      responsibilities: responsibilities.split("\n").filter(Boolean),
      hr_email: user?.email || rest.hr_email,
    };

    try {
      const res = await fetch("http://localhost:5000/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      });

      const data = await res.json();

      if (data.insertedId) {
        Swal.fire({
          title: "Job has been added!",
          text: "Good luck 🍀 We're rooting for you!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/myPostedJobs");
      }
    } catch (error) {
      console.error("Error submitting job:", error);
      Swal.fire({
        title: "Submission Failed",
        text: "Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div className="p-4 md:p-10 bg-base-100 shadow-md rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Post a New Job</h2>
      <form onSubmit={handleAddJob} className="space-y-6">
        {/* Job Title */}
        <InputField label="Job Title" name="title" placeholder="e.g. Software Engineer" />

        {/* Company Name */}
        <InputField label="Company Name" name="company" placeholder="e.g. TB Company" />

        {/* Location */}
        <InputField label="Location" name="location" placeholder="e.g. Banani, Dhaka" />

        {/* Job Type & Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField label="Job Type" name="jobType" options={["Full Time", "Part Time", "Contract", "Internship", "Temporary"]} />
          <InputField label="Category" name="category" placeholder="e.g. Marketing, Design, Tech" />
        </div>

        {/* Application Deadline */}
        <InputField label="Application Deadline" name="applicationDeadline" type="date" />

        {/* Salary Range */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InputField label="Min Salary" name="min" type="number" placeholder="e.g. 30000" />
          <InputField label="Max Salary" name="max" type="number" placeholder="e.g. 50000" />
          <SelectField label="Currency" name="currency" options={["BDT", "USD", "EURO"]} />
        </div>

        {/* Description */}
        <TextAreaField label="Description" name="description" placeholder="Write job description here..." />

        {/* Requirements */}
        <TextAreaField label="Requirements" name="requirements" placeholder="Each requirement in a new line" />

        {/* Responsibilities */}
        <TextAreaField label="Responsibilities" name="responsibilities" placeholder="Each responsibility in a new line" />

        {/* HR Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="HR Name" name="hr_name" placeholder="e.g. Farhan Rahman" />
          <InputField label="HR Email" name="hr_email" type="email" defaultValue={user?.email} />
        </div>

        {/* Logo */}
        <InputField label="Company Logo URL" name="company_logo" type="url" placeholder="https://your-logo-link.com" />

        {/* Status */}
        <SelectField label="Status" name="status" options={["active", "inactive", "closed"]} />

        {/* Submit */}
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
