import { NavLink } from "react-router-dom"
import "./Sidebar.css"

function Sidebar() {
    return <>
        <nav>
            <ul className="nav-list">
                <li className="nav-list-item">
                    <NavLink to={"/"} className={({ isActive }) => {
                        if (isActive) return "nav-link active"
                        else return "nav-link"
                    }}>Home</NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink to={"/play"} className={({ isActive }) => {
                        if (isActive) return "nav-link active"
                        else return "nav-link"
                    }}>
                        Play
                    </NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink to={"/about"} className={({ isActive }) => {
                        if (isActive) return "nav-link active"
                        else return "nav-link"
                    }}>About</NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink to={"/help"} className={({ isActive }) => {
                        if (isActive) return "nav-link active"
                        else return "nav-link"
                    }}>Help</NavLink>
                </li>
                <li className="nav-list-item">
                    Contacts
                </li>
            </ul>
        </nav>
    </>
};

export default Sidebar