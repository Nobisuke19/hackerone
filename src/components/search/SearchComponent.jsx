import React from "react";

function SearchComponent({onSearch}) {
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };
  return (
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div className="card">
        <div className="card-body">
          <label className="text-bold"> <strong>Search for Reports</strong></label>
          <div className="row mt-2">
            <div className="col-lg-10 col-md-8 col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Search for Reports"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-lg-2 col-md-4">
              <button className="btn btn-outline-dark" type="button"> <i className="fa fa-search"></i>  
                 {"  "}Search
              </button>
              <button className="btn btn-outline-dark ml-2" type="button">  <i className="fa fa-filter"></i> Sort</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
