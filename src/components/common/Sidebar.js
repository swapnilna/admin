import { Link } from "react-router-dom";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/admin/">  <i className='fa fa-home text-primary pl-2' /> Home</Link>
        </li>
        <li>
          <Link to="/admin/dashboard">  <i className='fa fa-tv text-primary pl-2' /> Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/user-profile"> <i className='fa fa-user text-primary pl-2' /> Users List</Link>
        </li>
        {/* <li>
          <Link to="/auth/test"> <i className='fa fa-message text-primary pl-2' /> Test</Link>
        </li> */}
      </ul>
    </aside>
  );
};

export default Sidebar;
