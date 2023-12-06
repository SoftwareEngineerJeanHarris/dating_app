import React from 'react';

const UserProfile = ({ match }) => {
  // Extract userId from the URL parameter
  const userId = match.params.userId;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Showing profile for user with ID: {userId}</p>
      {/* Add content for the user profile */}
    </div>
  );
};

export default UserProfile;
