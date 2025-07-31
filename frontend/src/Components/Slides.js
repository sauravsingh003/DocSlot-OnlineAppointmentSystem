import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Slides.css"; // Don't forget to import your CSS file

function Slides() {
  return (
    <div className="slides-container">
      <ToastContainer />

      {/* Background Image */}
      <img
        src="/assests/img6.jpg"
        alt="Banner"
        className="slides-bg-image"
      />

      {/* Doctor Image */}
      <img
        src="/assests/heroImg.png"
        alt="Doctor"
        className="slides-doctor-img"
      />

      {/* Text Area */}
      <div className="slides-text-wrapper">
        <div className="slides-text-content">
          <h1 className="slides-heading">Welcome to DocSlot</h1>
          <h2 className="slides-subheading">
            Book your appointment with trusted doctors —<br />
            anytime, anywhere.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Slides;
