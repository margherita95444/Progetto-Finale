import { Link } from "react-router-dom";

export default function Navbar() {
    
    return (
        <nav className="navbar navbar-expand-lg shadow-lg ">
            <div className="container-fluid"> 
                <Link className="navbar-brand text-dark" to="/">BLOG</Link> 
            </div>
        </nav>
    );
}