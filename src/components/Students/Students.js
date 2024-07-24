import React from "react";
import "./Students.css";

const Students = () => (
  <div className="students">
    <h1>Students</h1>
    <section>
      <h2>Life at Springdale</h2>
      <p>
        Extracurricular Activities: Music, Dance, Drama, Art, Sports, Robotics,
        Debate Club, Science Club
      </p>
      <p>
        Clubs and Societies: Literary Society, Environmental Club, Astronomy
        Club, Coding Club
      </p>
    </section>
    <section>
      <h2>Achievements</h2>
      <ul>
        <li>John Smith - National Level Math Olympiad Winner</li>
        <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
        <li>
          Tech Innovators Club - Winners of Inter-School Robotics Competition
        </li>
      </ul>
    </section>
    <section>
      <h2>Student Council</h2>
      <ul>
        <li>President: Amy Parker, Grade 12</li>
        <li>Vice President: Rajiv Mehta, Grade 11</li>
        <li>Secretary: Lisa Wong, Grade 10</li>
      </ul>
    </section>
  </div>
);

export default Students;
