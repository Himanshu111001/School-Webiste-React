import React from "react";
import "./Faculty.css";

const facultyData = [
  {
    name: "John Doe",
    position: "Principal",
    qualification: "M.Ed",
    experience: "20 years",
  },
  {
    name: "Jane Smith",
    position: "Vice Principal",
    qualification: "M.Sc. in Physics",
    experience: "15 years",
  },
  {
    name: "Emily Johnson",
    position: "English Teacher",
    qualification: "M.A. in English",
    experience: "10 years",
  },
  {
    name: "Michael Brown",
    position: "Mathematics Teacher",
    qualification: "M.Sc. in Mathematics",
    experience: "8 years",
  },
  {
    name: "Sophia Davis",
    position: "Science Teacher",
    qualification: "M.Sc. in Chemistry",
    experience: "12 years",
  },
  {
    name: "David Wilson",
    position: "Computer Science Teacher",
    qualification: "B.Tech in Computer Science",
    experience: "5 years",
  },
];

const Faculty = () => (
  <div className="faculty">
    <h1>Faculty</h1>
    {facultyData.map((member, index) => (
      <div key={index} className="faculty-member">
        <h3>{member.name}</h3>
        <p>
          <strong>Position:</strong> {member.position}
        </p>
        <p>
          <strong>Qualification:</strong> {member.qualification}
        </p>
        <p>
          <strong>Experience:</strong> {member.experience}
        </p>
      </div>
    ))}
  </div>
);

export default Faculty;
