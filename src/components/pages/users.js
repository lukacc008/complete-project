import React from "react";
import Header from "../header.js";
import ResponsiveDrawer from "../sidebar";
import UserFetching from "./api/usersApi.js";

export default function Users() {
  return (
    <div>
      <ResponsiveDrawer>
      <UserFetching />
      </ResponsiveDrawer>
      <Header />
    </div>
  );
}