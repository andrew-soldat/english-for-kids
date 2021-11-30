import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
   return (
      <div className="error">
         <img className="error__img" src="assets/img/404.png" alt="404" />
         <h1 className="error__title">Sorry, the page not found</h1>
         <NavLink to="/" className="error__back">
            Back to home
         </NavLink>
      </div>
   );
};
export default Error404;
