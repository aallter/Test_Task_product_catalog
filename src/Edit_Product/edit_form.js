import React from 'react';
import ed from './ed_form.module.css';

let EditForm = () => {
    return(
        <div>
            <h2>Edit Page</h2>
            <form className={ed.edform}>
                <h3>Edit to product's Title</h3>
                <p><input name="title" placeholder="title product" type="text" /></p>
                <h3>Edit to product's discription</h3>
                <p><textarea rows="10" cols="45" name="discr" placeholder="Discription" type="text"></textarea></p>
                <h3>EEdit to product's cost</h3>
                <p><input name="cost" placeholder="cost" type="number" /></p>
                <h3>Edit to product's discount</h3>
                <p><input name="discount" placeholder="discount%" type="number" /></p>
                <h3>Edit to product's data time</h3>
                <p><input name="lastday" placeholder="last day discount" type="date" /></p>
                <p><input name="Edit" value="Edit" type="submit" className="subInput"/></p>
            </form>
        </div>
    );
}

export default EditForm;