import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import poster from "../assets/globalFamily/poster.png";

const GOOGLE_FORM_URL = "#"; // Replace with actual Google Form URL

export default function GlobalFamilies() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section className="gf-section">
        <button className="gf-back" onClick={() => navigate("/")}>
          ← Back
        </button>

        <div className="gf-inner">
          {/* Poster */}
          <div className="gf-poster-wrap">
            <img
              src={poster}
              alt="Global Families Initiative poster"
              className="gf-poster"
            />
          </div>

          {/* Text */}
          <div className="gf-content">
            <span className="section-label">Global Families Initiative</span>

            <h1 className="gf-heading">
              Get connected to an <br />
              American Family!
            </h1>

            <p className="gf-body">
              Global Friends is a community of international and American
              friends. We create a home away from home and help meet the
              physical, emotional, social, and spiritual needs of the
              international student community in Golden.
            </p>

            <p className="gf-body">
              Global Friends wants to see YOU get connected with a local family
              here in Colorado. Global Families normally get together at least
              one time per month for a dinner, hike, or other activity. The
              schedule can be flexible depending on your availability. You don’t
              want to miss this fun experience!
            </p>

            <p className="gf-body">
              We will kick off the Fall 2026 semester and give all students and
              families a chance to meet for the first time near campus. Don’t
              miss this great opportunity to meet an American Family and form
              new friendships!
            </p>

            <a
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLScWSbkiBASA5KAnOpZ_XCjIscBHkhkK3bO-CZUHu2dddCpnQQ/viewform"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="gf-btn"
            >
              Get Matched
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
