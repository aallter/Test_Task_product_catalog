import React from 'react';
import head from './main_table.module.css';

let Header = () => {
    return (
        <div className={head.header}>
            <ul>
                <li><a href="#">UserName</a></li>
                <li><a href="#">Directory</a></li>
                <li><a href="#">Exit</a></li>
            </ul>
        </div>
    );
};

export default Header;

