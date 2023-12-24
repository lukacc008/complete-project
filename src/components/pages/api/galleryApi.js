import React, { useState, useEffect } from "react";
import axios from "axios";

import Box from "@mui/material/Box";

export function GalleryFetching() {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    fetchPictures();
  }, []);
  const fetchPictures = () => {
    axios
      .get("https://picsum.photos/v2/list")
      .then((res) => {
        console.log("Fetched gallery data", res);
        setPictures(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "5px",
      }}
    >
      {pictures.map((picture) => (
        <Box key={picture.id}>
          <h1>{picture.id}</h1>
          <h2>{picture.author}</h2>
          <p>
            <img
              src={picture.download_url}
              alt=""
              style={{ width: "400px", height: "400px" }}
            />
          </p>
        </Box>
      ))}
    </Box>
  );
}
export default GalleryFetching;
