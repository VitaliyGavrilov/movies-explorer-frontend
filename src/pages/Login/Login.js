import React from 'react';
import PageWithForm from '../../components/PageWithForm/PageWithForm';

function Login({   
  isSignIn,
  handleSubmit,
  preloader,
  submitError,
  submitProcess 
}) {
  return (
    <div className='app__page app__page_gray'>
      <main>
        <PageWithForm
            isSignIn={isSignIn}
            handleSubmit={handleSubmit}
            preloader={preloader}
            submitError={submitError}
            submitProcess={submitProcess}
        />
      </main>
    </div>
    
  );
}

export default Login;