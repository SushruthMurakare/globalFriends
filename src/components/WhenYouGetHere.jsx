import React from "react";
import { useNavigate } from "react-router-dom";
import airportPickup from "../assets/airport/Airport pickup.png";

export default function WhenYouGetHere() {
  const navigate = useNavigate();

  return (
    <section className="wygh-section">
      <div className="wygh-inner">
        <div className="wygh-image-wrap">
          <img
            src={airportPickup}
            alt="Airport pickup for international students"
            className="wygh-image"
          />
        </div>

        <div className="wygh-content">
          <div className="mission-block">
            <span className="section-label wygh-label">
              When You Get Here
            </span>
            <p className="mission-text">
              If you are a new international student or coming in the next
              semester, we want you to have a smooth transition! Click here for
              helpful information about Golden, Colorado, the weather,
              traveling from the airport to campus, and other resources.
            </p>
          </div>

          <button
            className="btn-primary mission-cta wygh-cta"
            onClick={() =>
              navigate(`/resources/${encodeURIComponent("When You Get Here")}`)
            }
          >
            When You Get Here
          </button>
        </div>
      </div>
    </section>
  );
}
