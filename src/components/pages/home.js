import React from "react";
import Header from "../header.js";
import ResponsiveDrawer from "../sidebar";

export default function Home() {
  return (
    <div>
      <ResponsiveDrawer>
        <h1>Home page</h1>
      </ResponsiveDrawer>
      <Header />
    </div>
  );
}