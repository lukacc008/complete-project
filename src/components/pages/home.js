import React from "react";
import Header from "../header.js";
import ResponsiveDrawer from "../sidebar";

export default function Home() {
  return (
    <div>
      <ResponsiveDrawer />
      <Header />
    </div>
  );
}