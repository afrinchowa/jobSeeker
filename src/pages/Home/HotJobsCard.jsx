import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';

const HotJobsCard = ({ job }) => {
  const { title, company, location, type, salary, description, postedDate, deadline, requirements } = job;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="card-body">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <figure>
            <img
              className="w-14 h-14 object-cover rounded-full border"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAclBMVEXw6uoAAADz7e328PD58/P99/f28vHt6ejn4+Ld2djw7Ovz7+7q5uXX1NOopqVISEdZWFeHhYTJxsWenJuQjYwqKShAQD+Af36vraxdXVxoZ2ZycXA3Nja4tbRUU1I8OzsXGBjAvr0gICD///8ODg8vLzCpfro6AAAI+UlEQVR4nO2ba3erqhaGZQIKeKtgqtGYapr8/794QE3ihXTtscde0Z7B82GNtJnL8irMG+h5DofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw/H/iNh6AP8tQCkhlMBrC6wtKA1/uAQxFmT7G0O5qo/HovPJCwP4lll1rHL+ysAjUaIvUZcvL/EmIFS3K9K0Z0mtFoSdL8bieimw9emBX57a/hJpQ394vn8dCAp055r4lnlC5OFhcbAZeGH+MEA5/utDfk0wGQhqm/WywPHnxOJz+fC0OEgmBijx3zNwCyKeDgRVfDlLgB1nFmo1FYHNDM7xZs8mLGYjQd1CDEQLg9NqqDSfWySbrRr/Oh9JHs2+FiK5zA0ucqmGHuYWGdtKTTQfCKoZTJd42JwWBm259L5kYbGequ+CLUZSz27rfPG/EBMuLD42E7McScEmX4rovNSCLs1qmi3vx2ZiyOLWl9OB0GqlBR1WK+I7nVsslt0bmccI1E6X9/fCTfUcV66ZNDOD6+rRvQ3BZit8eldpZ9GC+DqsktklimC7hAbLyUAq/ryrOEYWEkv6hvnEv3/E22UA2gV0X/c5Vk+0hGzplPvbbk1FtdMb5VyreNu8mfDs/HW7fVYqeGqBwLL40TG0TyHM8g9ziaMKtnwuhpDwrmykN7nr4OXtWkv60ukCYV1TdtGmBcB9LL7vT0sVCMvDWsuXnA0VNJOfMCH2amdrQH6ttVySSaYjaMhlzPCW1cs/A+J0rQXlE5/rB0n9kZ6PhbRWazsCotqipZqEfhpXYzJ9yn/ocmxMf5uxLfKnE7dN5CRnq+2Ng52wSE8GDvIZPxZPzhZH9wLmFi3X8jliENn8y61Dy2vCZYXTk30/LYRafLnbRwOWEmaeKkOzKKRRtVMxEGQWLal4OjJL8ZnuVEyoLFnMl3yuinDReTKsemn7ADe3tZZLEz4Co/AtIWif0wxLW+RXotfS/2MtPps9ujPMbWl/EU0if3m1WOxRi33xHyeRn0pbwdZsvI1hBZeWkX5OIz+zue18l1o6y0gPzXNxh8HakenVL3ZYxNizmEnPH8A2Cz836/j9QBisYqGmnqxtSCwh6Cb3WAGEthLmGDyHGnYWtYdyh8/F823x48QnkZ9bFn+bb9jwewmxxY+2I8HD4kXxucMWALHGj2QyUt+++HeoxY9tPlc9H4tHE4tBu9pD2wEhKyxDrdlz8RNr23m167QDhL+sHA3pZM8YomU5Zsj2mCtbs5jTNIsJbSHo4/uHa25FKC23vU0mUwjbHNlpj72/F8njpE/pLzfPDbd4hwHGA9skq6Pn4gducXWHZo9avNBSW54nkV/H0/V+QKu8XYoRay2tnPpcW6+22OwMxs9YWn7NzOfCWsxxj2m/YXncREf+eSxcP5l0u2NLf2B5EAjVML/tZBlSD7us+XuWQeS8XA64W2yirQ+c7YbF4bnTKhEWi7Kt3mPkvyNmxxq7dQ/Mn3UGd9qKHQFWP2r7QyJsB06bp5p0p075DjCV9l7gcmzse99U1kPg/Cr2WFrOgFCqoi6y5OUZbBKUeVEUeffigMauwH7AIvHD8XkgELHgF2z69wD86Z7/0WAf7LEycTgcDsevBQDPAiDg2YHG1UcRLs4vWqxh/tPb4qsvYinZeDBUeJhwKXl4T1SAPwxhSJBFwDXPk6QQPLfSo/v2TG8qxiwUoknL/W8C0FSfh9NZYXPeUpiEOD3d0qobckzgdTK2zEh57t9xwEmq+VCPvOx4314GXqn+A84KYU53nIdGB8mP7xHjKZQmsqtRbUYU0O6C8k6qSzscs4I4vQZ9egNehfqx+TnKlTqibJTboXHMWsyh7Q9nhB9n8+YZa1Pz/Ig8ZG+RoodSRKGeXE0/CmAXFPl6EQVn1LdcID6P3RlaXgYxOL/EoRcWp2E3hn6gUbgWc0KpOSwfHj/MDaCJOXmmi73bW1pRwM7jzp3O5vXfpzUyPwqBo9vpexTTnx6BqEIPMRwExMj00gVmKCvGo6fAb8cP8/LQKMajn1cOvkLdW3agzZCmx+DE6Ti2J2iOot4gLdqcmhXzWT/FYPM/+64MLVretUOzSU8z1bUKPH8UAwxVVH5m0Vu8GXS3blJgQXy5b12QDplppMUkOdK+mFW5ek4zLFh+M98LH1Xf/HNYE1pMRvVzwDCK8ahqk+z0ph4hNDdpF4MfYvLgmtOw+5TJXcxVJUkxvBmrl4Uknvrqr2LEhIFeIeQuxhMpuiVvqkdBzjYiITrdDyXrO2wWghFDs5ZFRRGqhzfTrvmo+i1OP72FLOiu/auYvRjM04pWdzH6D0z3Qv+uGH6qhzg3lPP0eB3eMgHvfDCyjJgwuuYybb4f06zt4pj3u0+kaw9FXVTt0bzf1IvRnhippxh2yd7WvA0UUkAAU9lPFD256pACEJENnsGI0UHvUtURfa4Z7o8JCqlRojR1293FCDP1bsctxAhWo0Lf6GycX9qPVmXMG/3bYTBajNDR79D4ZCJm9E4gb/3JIO3Aa+2xRjFG4lNM+z4xpuPXXm8HVLDBmYbNAd1u6KIGdwrxV27OL+V997/P07QDuIvRz2DYyiQF4kKLuRS9I4gO53GdhKwt3rhHAJjJpmNjN08ICOKmkdE90QXehxvzMRoGDuz5Gur4K/27IR/lY/Rkd7lC/+oNIibAvJn3sgRwOByOBb/TQ0xf/YuICSdeaDy7KeZ+Sa/90WfB8t6WwF1ZNiToVMKxyBoFrMn3eqxhCoTc0zWo4AKoutdYkPMgC7mKmo6oOJAljtQuDzXN0FmZSjKJoyxRnFf5EOaFYMF3TeKS8pIxEWoxJNm9GNPnkD6tCc8IEfrJPBIFmksSJ4SVDPu8oN4vEGNaX1mSlHquKRXT/LFL7pcNhTihccOAmXQb/woxsmGMAZei62gimYiN28KdYjzkZawliIqx6HeI8XCcJNyLyqSLPCglKU1disskSQLgqtMlgkoSiSF+c2787xgyat83kUR/HFYNJoToWoyYjkf/8ZdGTofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+H45/wP3N10FoY34O0AAAAASUVORK5CYII="
              alt="Company Logo"
            />
          </figure>
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-500">{company}</p>
            <p className="flex items-center text-sm text-gray-500 mt-1">
              <CiLocationOn className="mr-1" />
              {location}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-3">{description}</p>

        {/* Requirements */}
        <div className="flex flex-wrap gap-2 mb-4">
          {requirements?.map((req, index) => (
            <span
              key={index}
              className="px-2 py-1 border text-sm rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors"
            >
              {req}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">
            <p>Type: {type}</p>
            <p>Salary: {salary}</p>
          </div>
          <p>Posted Date: {postedDate}</p>
          <p>Deadline: {deadline}</p>
             <Link to={`/jobs/${job._id}`} className="text-blue-500 hover:underline">
         <button className="btn btn-primary btn-sm">Apply Now</button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
