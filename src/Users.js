import React, { useState } from "react";
import useFetch from "./useFetch";


const Users = () => {
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useFetch(
    "https://randomuser.me/api/?results=200"
  );

  console.log(data);

  const PER_PAGE = 5;
  const total = data?.results?.length;
  const pages = Math.ceil(total / PER_PAGE);
  const skip = page * PER_PAGE - PER_PAGE;

  if (isLoading) {
    return (
      <div className="con-con ">
        <h1 className="title">Loading...</h1>
      </div>
    );
  }

  if (!isLoading && error) {
    return (
      <div className="con-con ">
        <h1 className="title">{error}</h1>
      </div>
    );
  }
  return (
    <div className="con-con">
      <h1 className="title text-success fw-bolder mb-5">List Of Users</h1>
      <div className="row">
        {data?.results.slice(skip, skip + PER_PAGE).map((each, index) => {
          const fullname = `${each.name.title} ${each.name.first} ${each.name.last}`;
          const address = `${each.location.street.number}, ${each.location.street.name}, ${each.location.city}, ${each.location.state}, ${each.location.country}`;
          return (
            <div className="col-md-4">
              <div className="card">
               
                <img
                  src={each.picture.large}
                  className="card-img-top"
                  alt="user's "
                /> 
                 <div className="text-con">
                <div className="card-body">
                  <h5 className="card-title">{fullname}</h5>
                  <p className="card-text"></p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <i className="bi-person-fill"></i> {each.login.username}
                  </li>
                  <li class="list-group-item">
                    <i className="bi-envelope-fill"></i> {each.email}
                  </li>
                  <li class="list-group-item">
                    <i className="bi-calendar2-date"></i> {each.dob.date}
                  </li>
                  <li className="list-group-item">
                    <i className="bi-geo-alt-fill"></i> {address}
                  </li>
                  <li className="list-group-item">
                    <i className="bi-globe"></i> {each.nat}
                  </li>
                </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-5 d-flex justify-content-between">
        <button
          className="btn btn-primary"
          type="button"
          disabled={page <= 1}
          aria-disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          <i className="bi-skip-backward-fill">Previous</i>
        </button>

        <p>
          {page} of {pages}
        </p>

        <button
          className="btn btn-primary"
          type="button"
          disabled={page >= pages}
          aria-disabled={page >= pages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <i className="bi-skip-forward-fill">Next</i>
        </button>
      </div>

      <div className="mt-3">
        {Array.from({ length: pages }, (_, index) => index + 1).map((each) => (
          <button
            className="bg-success text-white"
            onClick={() => setPage(each)}
          >
            {each}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Users;
