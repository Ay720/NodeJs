import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MySite</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
      </div>
    </nav>
  )
}

export default Navbar
