import React from 'react'
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        // <div className="container-fluid">

        <div >
            <div className="row">
                <div className="col-12">
            <nav className="navbar navbar-expand-lg  navbar-light bg-light">
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink exact activeClassName="alert-primary" className="nav-link" to="/" >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink exact activeClassName="alert-primary" className="nav-link" to="/logIn" >
                                Log in
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink exact activeClassName="alert-primary" className="nav-link " to="/events" >
                                ארועים בשכונה
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink exact activeClassName="alert-primary" className="nav-link " to="/sales" >
                                מכירות יד 2 בשכונה
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink exact activeClassName="alert-primary" className="nav-link " to="/babySitter" >
                                שרותי שמרטפות בשכונה
                            </NavLink>
                        </li>
                    </ul>



                </div>
                {/* לבדוק למה הכפתורים מתקטנים */}
                {/* <div class="container-fluid">
                    
                    <form class="d-flex">
                        <input class="form-control me-7" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div> */}
            </nav>
                </div>
            </div>

        </div>
    )
}

export default Header
