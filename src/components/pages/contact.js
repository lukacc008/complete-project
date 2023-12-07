import React from "react";
import Header from "../header.js";
import ResponsiveDrawer from "../sidebar";

export default function Contact() {
  return (
    <div>
      <ResponsiveDrawer>
        <h1>Contact page</h1>
      </ResponsiveDrawer>
      <Header />
    </div>
  );
}