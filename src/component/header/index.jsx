import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">Home</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink activeClassName='activeNavLin' className="nav-link" to="/Home"> Film List</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='activeNavLin' className="nav-link" to="/FilmInfo">Film info</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='activeNavLin' className="nav-link" to="/signin">Sign up</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName='activeNavLin' className="nav-link" to="/signup">Sign up</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;