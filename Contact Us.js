
import '../styles/ContactUs.css'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const ContactUs = () => {
  return (
    <div class="content">


      <section class="hero-section">
        <h1>Contact Us</h1>
        <p className="CUS">If you have questions, need help, or want to give feedback,
          you can reach us using the form below or through our contact information.</p>

      </section>


      <section class="info-section">
        <h2>Send Us a Message</h2>
        <form class="contact-form" action="#" method="post">
          <table className="table1">

            <tr>
              <th>
                Full Name:
              </th>
              <td>
                <input type="text" id="name" name="name" placeholder="Your full name" required></input><br></br>
              </td>
            </tr>

            <tr>
              <th>
                Email:
              </th>
              <td>
                <input type="email" id="email" name="email" placeholder="Your email address" required></input><br></br>
              </td>
            </tr>
            <tr>
              <th>
                Message:
              </th>
              <td>
                <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
              </td>
            </tr>
            <tr >
              <td>

              </td>
              <td>
                <button type="submit">Send Message</button>
              </td>
            </tr>
          </table>
        </form>
      </section><br></br><br></br>
      <div className="Media">
        <a
          href="https://www.instagram.com/adham-abou-ibrahim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.facebook.com/adham.abouibrahim.3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
        <TwitterIcon />  <LinkedInIcon />
      </div>
      <br></br><br></br>
    </div>
  )
}

export default ContactUs
