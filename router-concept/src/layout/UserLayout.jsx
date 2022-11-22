import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="main-content">
        <aside className="dashboard-sidebar">
          <ul>
            <li>
              <Link to="/user">Dashboard</Link>
            </li>
            <li>
              <Link to="/user/profile">Profile</Link>
            </li>
            <li>
              <Link to="/user/account">Account</Link>
            </li>
          </ul>
        </aside>
        <main className="dashboard-main">
          <Outlet />
        </main>
    </div>
  );
};

export default UserLayout;
