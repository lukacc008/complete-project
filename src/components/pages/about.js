import React from "react";
import Header from "../header.js";
import ResponsiveDrawer from "../sidebar";

export default function About() {
  return (
    <div>
      <ResponsiveDrawer>
        <h1>About page</h1>
      </ResponsiveDrawer>
      <Header />
    </div>
  );
}