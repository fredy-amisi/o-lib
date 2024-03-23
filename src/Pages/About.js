import React, { useEffect } from "react";
import b2 from "../Images/b2.jpg";
import Scrollbutton from "../Components/Scrollbutton";

const About = () => {
  useEffect(() => {
    let teachersCount = 50;
    let coursesCount = 25;
    let membersCount = 70;
    let countriesCount = 10;

    function updateCountsOnScroll() {
      if (window.scrollY > 300) {
        updateCount("teachersCount", teachersCount);
        updateCount("coursesCount", coursesCount);
        updateCount("membersCount", membersCount);
        updateCount("countriesCount", countriesCount);
      }
    }

    // Function to update count for a specific section
    function updateCount(elementId, count) {
      let element = document.getElementById(elementId);
      let currentCount = 0;
      let updateInterval = setInterval(function () {
        if (element) {
          element.textContent = currentCount;
          currentCount++;
          if (currentCount > count) {
            clearInterval(updateInterval);
            element.textContent = count;
          }
        }
      }, 10);
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", updateCountsOnScroll);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("scroll", updateCountsOnScroll);
    };
  }, []);

  return (
    <div className="about">

<div className="vertical-about"></div>
        <h3>About<span> us</span> </h3>
      <div className="all-containers">
      <div className="about-container1">
        <img className="a-image" src={b2} alt="b2" />
      </div>
      <div className="about-container2">
       
        <h4>Embarking on a <span> Literary Odyssey:</span> <br />Crafting a <span>Digital Haven </span> for Readers</h4>
        </div>
      
      </div>
      <div className="about-container3">
          <h3>Bridging Minds through Books:</h3>
          
        <p><span> Discover the philosophy guiding our endeavor. From fostering community <br />
          engagement to championing the transformative power of literature,<br />
          explore how we're building bridges in the ever-evolving landscape<br />
          of digital reading.</span></p>
        <button className="Learn-more-button">Learn more</button>


          </div>
      <div className="division">
        <div className="section">
          <h2>Teachers</h2>
          <p id="teachersCount">0</p>
        </div>
        <div className="section">
          <h2>Courses</h2>
          <p id="coursesCount">0</p>
        </div>
        <div className="section">
          <h2>Members</h2>
          <p id="membersCount">0</p>
        </div>
        <div className="section">
          <h2>Countries</h2>
          <p id="countriesCount">0</p>
        </div>
      </div>

      <Scrollbutton/>

    </div>
    
  );
}

export default About;
