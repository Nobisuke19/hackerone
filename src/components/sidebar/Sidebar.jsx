import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const data = [
    {
      title: "Dashboard",
      icon: "fa fa-dashboard",
      link: "/",
    },
    {
      title: "Opportunities",
      icon: "fa fa-briefcase",
      link: "/opportunities",
    },
    {
      title: "Inbox",
      icon: "fa fa-inbox",
      link: "/inbox",
    },
    {
      title: "Hacktivity",
      icon: "fa fa-circle",
      link: "/hacktivity",
    },
    {
      title: "Leaderboard",
      icon: "fa fa-trophy",
      link: "/leaderboard",
    },
    {
      title: "Directory",
      icon: "lni lni-agenda",
      link: "/directory",
    },
  ];
  return (
    <div className="bg-fixed">
      <aside id="sidebar" className={isExpanded ? "expand" : ""}>
        <div className="d-flex">
          <button className="toggle-btn" type="button" onClick={toggleSidebar}>
            <i className="lni lni-grid-alt"></i>
          </button>
          <div className="sidebar-logo">
            <a href="#">Hackerone</a>
          </div>
        </div>

        <ul className="sidebar-nav">
          {data.map((item, index) => (
            <li className="sidebar-item" key={index}>
              <NavLink
                to={item.link}
                className="sidebar-link"
                activeClassName="active"
              >
                <i className={item.icon}></i>
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <hr className="text-light" />
        <div className="sidebar-footer">
          <a href="#" className="sidebar-link">
            <i className="lni lni-help"></i>
            <span>Help</span>
          </a>
          <a href="#" className="sidebar-link">
            <i className="fa fa-bell"></i>
            <span>Notification</span>
          </a>
          <div className="dropdown">
            <a
              href="#"
              className="sidebar-link "
              id="profileDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="lni lni-user"></i>
              <span>Profile</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="profileDropdown">
              <a className="dropdown-item" href="#">
                <i className="lni lni-exit"></i>
                Logout
              </a>
              <a className="dropdown-item" href="#">
                <i className="lni lni-user"></i>
                Profile
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
