import React, { useState, useEffect } from "react";
import axios from "axios";

import Box from "@mui/material/Box";

import UserCard from "../../cards/card";

export function UserFetching() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log('Users fetched',res);
        setUsers(res.data);
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
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Box>
  );
}
export default UserFetching;
