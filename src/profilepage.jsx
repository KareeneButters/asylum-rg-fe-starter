import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'; 

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0(); 

    if (!isAuthenticated) {
        return <div>Please log in to see your profile.</div>;
    }

return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ProfilePage;