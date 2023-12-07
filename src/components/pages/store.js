import React from "react";
import Header from "../header.js";
import ResponsiveDrawer from "../sidebar";

export default function Store() {
  return (
    <div>
      <ResponsiveDrawer>
        <h1>Store page</h1>
      </ResponsiveDrawer>
      <Header />
    </div>
  );
}