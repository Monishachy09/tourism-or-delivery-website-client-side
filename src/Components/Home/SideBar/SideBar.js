import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'


const Sidebar = () => {
    return (
        <div>
            <div class="sidebar mt-5">
                <Link to="/addSection">Add Section</Link>
                <Link to="/editProduct">Edit Product</Link>
                
            </div>

           
        </div>
    );
};

export default Sidebar;