import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const cardStyle = {
    width: 400,
    height: 150,
  };

const UserCard = ({ user }) => (
  <Card variant="outlined" style={cardStyle}>
    <CardContent>
      <Typography variant="h5" component="div">
        {user.name}
      </Typography>
      <Typography color="text.secondary" gutterBottom>
        ID: {user.id}
      </Typography>
      <Typography color="text.secondary" gutterBottom>
        Username: {user.username}
      </Typography>
      <Typography color="text.secondary" gutterBottom>
        Email: {user.email}
      </Typography>
    </CardContent>
  </Card>
);

export default UserCard;