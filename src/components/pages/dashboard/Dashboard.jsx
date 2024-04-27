import React from "react";
import SearchComponent from "../../search/SearchComponent";
import Alerts from "../../Alerts/Alerts";
import { useState } from "react";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <div className="container p-3">
      <div className="row">
      <SearchComponent onSearch={handleSearch} />
      </div>
      <div className="row mt-3 clearfix">
        <div className="col-12">
          <a href="#" className="custom-link active">
            Disclosed
          </a>
          <a href="#" className="custom-link">
            Undisclosed
          </a>
        </div>
      </div>
      <div className="row clearfix mt-3">
        <div className="col-12">
          <div className="row">
          <Alerts searchTerm={searchTerm} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
