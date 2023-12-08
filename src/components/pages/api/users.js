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
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   return (
  //     <Box>
  //       {users.map((user) => (
  //         <Box>
  //           <h1>{user.id}</h1>
  //           <h2>{user.username}</h2>
  //           <h3>{user.name}</h3>
  //           <p>{user.email}</p>
  //           <p>{user.lat}</p>
  //         </Box>
  //       ))}
  //     </Box>
  //   );
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
