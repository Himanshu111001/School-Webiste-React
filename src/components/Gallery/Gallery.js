import React, { useState } from "react";
import sportsDay from "../../assets/images/sports_day.jpg";
import scienceExhibition from "../../assets/images/science_exhibition.jpg";
import culturalFest from "../../assets/images/cultural_fest.jpg";
import classroom from "../../assets/images/classroom.jpg";
import library from "../../assets/images/library.jpg";
import annualFunction from "../../assets/videos/annual_function.mp4";
import schoolTour from "../../assets/videos/School_tour.mp4";
import "./Gallery.css";

const galleryItems = [
  {
    src: sportsDay,
    alt: "Sports Day",
    description: "Students participating in various sports events.",
    category: "Events",
    type: "image",
  },
  {
    src: scienceExhibition,
    alt: "Science Exhibition",
    description: "Students presenting their science projects.",
    category: "Events",
    type: "image",
  },
  {
    src: culturalFest,
    alt: "Cultural Fest",
    description: "Students performing in the cultural fest.",
    category: "Events",
    type: "image",
  },
  {
    src: classroom,
    alt: "Classroom",
    description: "A glimpse of our interactive classrooms.",
    category: "Infrastructure",
    type: "image",
  },
  {
    src: library,
    alt: "Library",
    description: "Students reading and studying in the school library.",
    category: "Infrastructure",
    type: "image",
  },
  {
    src: annualFunction,
    alt: "Annual Function",
    description: "Highlights from our annual function.",
    category: "Events",
    type: "video",
  },
  {
    src: schoolTour,
    alt: "School Tour",
    description: "A virtual tour of our school.",
    category: "Infrastructure",
    type: "video",
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredItems = galleryItems.filter(
    (item) => filter === "All" || item.category === filter
  );

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="filter">
        <label htmlFor="filter">Filter by:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Events">Events</option>
          <option value="Infrastructure">Infrastructure</option>
        </select>
      </div>
      <div className="row">
        {filteredItems.map((item, index) => (
          <div key={index} className="col-md-4">
            {item.type === "image" ? (
              <div className="gallery-item">
                <img src={item.src} alt={item.alt} className="img-fluid" />
                <p>{item.description}</p>
              </div>
            ) : (
              <div className="gallery-item">
                <video controls className="video-fluid">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
