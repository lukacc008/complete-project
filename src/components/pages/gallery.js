import React from "react";
import Header from "../header.js";
import ResponsiveDrawer from "../sidebar";
import GalleryFetching from "./api/galleryApi.js";

export default function Gallery() {
  return (
    <div>
      <ResponsiveDrawer>
        <GalleryFetching />
      </ResponsiveDrawer>
      <Header />
    </div>
  );
}
