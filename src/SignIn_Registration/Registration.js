import React from 'react';
import { NavLink } from 'react-router-dom';
import regstyle from './Autorization.module.css';

let Registration = () => {
    return(
        <div>
            <form className={regstyle.form}>
              <p> Registration</p>
              <p><input type="email" placeholder="Your mail" name="mail"/></p>
              <p><input type="text" placeholder="First name" name="firstName"/></p>
              <p><input type="text" placeholder="Last name" name="lastName"/></p>
              <p><input type="tel" placeholder="Your number" name="number"/></p>
              <p><input type="text" placeholder="Your login" name="login"/></p>
              <p><input type="password" placeholder="Your password" name="password"/></p>
              <p><input type="password" placeholder="True again your password" name="password"/></p>
              <p><input type="submit" value="Registration" className={regstyle.subInput}/></p>
              <NavLink to="/sign_in">Sign in</NavLink>
            </form>
        </div>
      );
};

export default Registration;