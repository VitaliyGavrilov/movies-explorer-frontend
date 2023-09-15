import React from 'react';
import Header from '../../components/Header/Header';
import UserProfile from '../../components/UserProfile/UserProfile';

function Profile({ isLoggedIn, handleLogout }) {
  return (
    <div className='app__page app__page_gray'>
      <Header
        isLoggedIn={isLoggedIn}
      />
      <main className='app__main-block'>
        <UserProfile handleLogout={handleLogout}
        />
      </main>
    </div>
  );
}

export default Profile;