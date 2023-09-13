import React from "react";
import { Navigate } from "react-router-dom";

import Preloader from "../Preloader/Preloader";

function ProtectedRoute ({ loggedIn, checkedIn, element }) {
  return (
    <>
      { checkedIn ?
        loggedIn ? element : <Navigate to="/" replace />
        :
        <Preloader />
      }
    </>
  )
};

export default ProtectedRoute;