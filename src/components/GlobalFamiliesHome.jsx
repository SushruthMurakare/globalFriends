import React from "react";
import poster from "../assets/images/gfi.jpg";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScWSbkiBASA5KAnOpZ_XCjIscBHkhkK3bO-CZUHu2dddCpnQQ/viewform?usp=header";

export default function GlobalFamiliesHome() {
  return (
    <section className="gf-home-section">
      <div className="gf-inner">
        {/* Poster */}
        <div className="gf-poster-wrap">
          <img
            src={poster}
            alt="International students sharing a holiday meal with an American host family"
            className="gf-poster"
          />
        </div>

        {/* Text */}
        <div className="gf-content">
          <span className="section-label">Global Families Initiative</span>

          <h2 className="gf-heading">Get connected to an American Family!</h2>

          <p className="gf-body">
            Global Friends wants to see YOU get connected with a local family
            here in Colorado. Global Families normally get together at least
            one time per month for a dinner, hike, or other activity. The
            schedule can be flexible depending on your availability. You
            don’t want to miss this fun experience!
          </p>

          <p className="gf-body">
            We will kick off the Fall 2026 semester and give all students and
            families a chance to meet for the first time near campus. Don’t
            miss this great opportunity to meet an American Family and form
            new friendships!
          </p>

          <p className="gf-body">Fill out the form to get involved!</p>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gf-btn"
          >
            Get Matched
          </a>
        </div>
      </div>
    </section>
  );
}
