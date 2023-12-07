import React from "react";
import Header from "../header.js";
import ResponsiveDrawer from "../sidebar";

export default function Users() {
  return (
    <div>
      <ResponsiveDrawer>
        <h1>Users page</h1>
      </ResponsiveDrawer>
      <Header />
    </div>
  );
}