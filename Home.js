
import '../styles/Home.css'
import project1 from '../assets/project1.png'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div class="content">
      <section class="hero-section">
        <h1 className="h">Welcome to the Student Portal</h1>
        <div className="div1">
          <div>
            <p className="top">This page gives new students a quick look at the course they
              can register for, including qualifications, objectives, and benefits.</p></div>
          <div>
            <img className="img1" src={project1} ></img>
          </div>
        </div>
      </section>

      <section class="info1">
        <h1 className="h">Who Qualifies for Course Enrollment</h1>
        <div className="div2">
          <table>
            <tr>
              <th>Qualifies</th>
              <th>Details</th>
            </tr>
            <tr>
              <th>
                <p><b>They are officially registered at the institution.</b></p> </th>
              <td>
                <p> New students must complete the admission process before accessing
                  course enrollment.</p></td>
            </tr>
            <tr>
              <th>
                <p><b>They have submitted all required documents.</b></p></th>
              <td>
                <p> Students become eligible for selecting courses once the financial process
                  is finalized.</p>
              </td>
            </tr>
            <tr>
              <th>
                <p><b>They meet any prerequisites for the course.</b></p></th>
              <td>
                <p> Some subjects require that you complete introductory or foundational
                  courses first.</p></td>
            </tr>
            <tr>
              <th>
                <p><b>They follow the enrollment dates.</b></p></th>
              <td>
                <p> Each semester has a specific window for adding or dropping courses.</p></td>
            </tr>
          </table>
        </div>

        <h2>Complete the registration through the <span><Link to="/Course"> Course </Link></span> page</h2>

      </section>

      <section class="info2">
        <h1 className="h">This course is designed to help students build a strong foundation in
          the subject they are studying. Its main objectives include:</h1>
        <div3 className="div3">

        </div3>

        <p className="p2"> 1- Introducing the fundamental concepts
          Students will learn the essential ideas and principles that form the basis
          of the course.</p>

        <p className="p2">2- Developing practical skills
          The course focuses on helping students apply what they learn through real
          examples and simple exercises.</p>

        <p className="p2">3- Improving problem-solving abilities
          By working through different topics, students will learn how to analyze
          problems and think logically.</p>

        <p className="p2">4- Preparing students for advanced subjects
          This course acts as an entry point, giving students the background they need
          for more advanced courses later.</p>

        <p className="p2">5- Helping students understand how the subject is used in real situations
          The goal is to show where these concepts appear in the industry or in future
          academic work.</p>
        <div4 className="div4"></div4>

      </section>

      <section class="info3">
        <h1 className="h">Benefits of Taking This Course</h1>
        <div className="div5">
          <div>
            <ul>
              <li><p>A solid understanding of core concepts</p></li>
              <li><p>Increased confidence in related subjects</p></li></ul></div>
          <div>
            <ul>
              <li><p>Better academic performance in future courses</p></li>
              <li><p>Improved analytical and practical skills</p></li></ul></div>
        </div>
        <ul className="div6">
          <li><p>A smooth transition into higher-level topics</p></li>
        </ul>

      </section>
    </div>
  )
}

export default Home
