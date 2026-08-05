import React from "react";

export default function GetConnected() {
  return (
    <section className="get-connected-section">
      <div className="mission-inner">
        <div className="mission-block">
          <span className="section-label">Get Connected to Global Friends</span>
          <p className="mission-text">
            Ready to jump in? Fill out our interest form and let us know what
            activities you're interested in and any specific ways we can help
            you — we'll take it from there.
          </p>
        </div>

        <button
          className="btn-primary mission-cta"
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSeGuxuBFViPUxmG_f8aW_TDyztKNAAweyn_fPax4TLBYMCapw/viewform?pli=1",
              "_blank",
            )
          }
        >
          Join Our Community
        </button>
      </div>
    </section>
  );
}
