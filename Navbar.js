
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/Home"> <img className="logo" src={logo} alt="not found" /></Link>
            <p className="compName">Web Programming</p>
            <div className="hiddenLinks">
                <Link to="/Home"> Home </Link>
                <Link to="/Course"> Course </Link>
                <Link to="/Grades"> Grades </Link>
                <Link to="/About"> About </Link>
                <Link to="/ContactUs"> Contact Us </Link>

            </div>

            <div className="rightSide">
                <Link to="/Home"> Home </Link>
                <Link to="/Course"> Course </Link>
                <Link to="/Grades"> Grades </Link>
                <Link to="/About"> About </Link>
                <Link to="/ContactUs"> Contact Us </Link>

            </div>
        </div>
    )
}

export default NavBar
