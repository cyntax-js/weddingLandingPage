import React from "react";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import AdminHome from "./AdminPages/AdminHome";
const Admin = () => {
  return (
    <div className="Admin">
      <AdminHeader />
      <AdminHome />
      <AdminFooter />
    </div>
  );
};

export default Admin;
