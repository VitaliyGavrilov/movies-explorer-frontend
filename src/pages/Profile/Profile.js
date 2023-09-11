import React from 'react';
import Header from '../../components/Header/Header';
import UserProfile from '../../components/UserProfile/UserProfile';

function Profile({currentUser}) {
  return (
    <div className='app__page app__page_gray'>
      <Header
        isLoggedIn
      />
      <main className='app__main-block'>
        <UserProfile
          currentUser={currentUser} 
        />
      </main>
    </div>
  );
}

export default Profile;