import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

export default function NavbarLayout () {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}
