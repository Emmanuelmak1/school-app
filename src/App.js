import React from 'react';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <div id="container">
      <header>
        <h1>Welcome to Emmanuels University </h1>
        <p>Enhance your knowledge!</p>
      </header>

      <section class="body-container">
        <article>
          <h2>Embark on ourAlumni Stories</h2>
          <p>
          Discover the inspiring journeys, achievements, and experiences that shape our proud alumni community.
          </p>
        </article>

        <img src="https://s39613.pcdn.co/wp-content/uploads/2016/03/iStock_000037379776_Medium.160328.jpg" alt="Description "></img>

        <div class="sep-container">
          <button>APPLY NOW ! </button>
          <button>EXPLORE PROGRAMS</button>
          <button>CONNECT WITH ALUMNI</button>
        </div>

        <article>
          <h2>Our Mission</h2>
          <p>
          At Emmanuel University, our mission is to cultivate a vibrant learning community dedicated to academic excellence, innovation, and the holistic development of individuals. We strive to empower our students with knowledge, critical thinking skills, and a passion for lifelong learning. Committed to fostering diversity, inclusivity, and global perspectives, we aim to inspire our graduates to become ethical leaders, compassionate contributors to society, and catalysts for positive change.
          </p>
        </article>


      </section>



      <aside class="sidebar">
        <section>
          <h2>Departments</h2>
          <ul>
            <li>Admissions</li>
            <li>Finance</li>
            <li>Human Resources</li>
          </ul>
        </section>

        <section>
          <h2>Professional Schools/Colleges</h2>
          <ul>
            <li>Law School</li>
            <li>Medical School</li>
            <li>Engineering School</li>
          </ul>
        </section>

        <section>
          <h2>Events</h2>
          <ul>
            <li>Open House</li>
            <li>Guest Lectures</li>
            <li>Workshops</li>
          </ul>
        </section>

        <section>
          <h2>Support Services</h2>
          <ul>
            <li>Counseling Services</li>
            <li>Health Services</li>
            <li>International Student Services</li>
          </ul>
        </section>
      </aside>

      <footer>
        <p>&copy; 2023 Emmanuel University</p>
      </footer>
    </div>
  );
};

export default App;
