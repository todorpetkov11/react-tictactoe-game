import { Outlet } from "react-router-dom"
import Loader from "../Loader/Loader"
import Sidebar from "../Sidebar/Sidebar"
import "./Layout.css"
import "animate.css"


function Layout() {
    return (
        <div className="layout">
            {/* <Loader /> */}
            <Sidebar />
            <div className="container">
                <Outlet />
            </div>
        </div>)
};

export default Layout