
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "../styles/footer.css";

function Footer() {
    return (
        <div className="footer">
            <p className="ps"><MailIcon /> :  <a href='mailto:a@gmail.com'>WebProgramming@gmail.com</a></p>
            <p className="ps"><AccessTimeIcon />  :  Mon–Fri: 8:00 AM – 3:00 PM</p>
            <p className="ps"><PhoneIcon />  :  (+961) 81 895186</p>
            <p className="ps"><LocationOnIcon />  : Hasbayya - Main road</p>
            <h5>Copyright&copy; 2025&nbsp;Web Programming. All rights reserved</h5>
        </div>
    )
}
export default Footer