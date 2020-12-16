import React from 'react';
import { NavLink } from 'react-router-dom';
import regstyle from './Autorization.module.css';

let Sign = () => {
  return(
    <div>
        <form className={regstyle.form}>
          <p> Sign In</p>
          <p><input type="text" placeholder="Your login" name="login"/></p>
          <p><input type="password" placeholder="Your password" name="password"/></p>
          <p><input type="submit" value="Send" className={regstyle.subInput}/></p>
          <NavLink to="/registration">Registration</NavLink>
        </form>
    </div>
  );
};

export default Sign;