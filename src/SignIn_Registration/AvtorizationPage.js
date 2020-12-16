import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import regstyle from './Autorization.module.css';
import Registration from './Registration';
import Sign from './Sign_in';


let Avtorization = () => {
  return(
    <BrowserRouter>
      <div className={regstyle.flex_disp}>
        <div className={regstyle.infoPrev}>
          <h1>App for your directory products</h1>
          <p>Nullam nisi ante, blandit at fringilla vitae, imperdiet nec nisi. Nam gravida elementum nisi, mattis varius arcu molestie nec. Nunc sapien dui, cursus quis tortor eget, dignissim commodo turpis. Aenean at posuere erat. In dapibus magna ut diam tempor faucibus. Fusce lacus metus, gravida quis volutpat eget, euismod nec lectus.</p>
          <p>Duis id turpis ac nibh vestibulum elementum. Fusce a viverra lectus, eget ultricies enim. Cras placerat quam vitae semper pellentesque. Etiam et porta lacus. In non sodales enim.</p>
        </div>
        <Route path="/sign_in" component={Sign}/>
        <Route path="/registration" component={Registration}/>
      </div>
    </BrowserRouter>
  );
};

export default Avtorization;