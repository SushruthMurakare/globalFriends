import React from "react";

export default function Mission() {
  return (
    <section className="mission-section">
      <div className="mission-inner">

        <div className="mission-block">
          <span className="section-label">What We Do</span>
          <p className="mission-text">
            Global Friends exists to welcome, befriend and serve international
            students in Golden, Colorado. We provide fun events to build
            community and friendships - like group hikes, meals, holiday
            events - and also help meet practical needs - like rides to the
            airport, getting a free bike, English Practice or getting
            connected to an American Family. If you would like to be a part
            of Global Friends, fill out our interest form, letting us know
            what activities you are interested in and any specific ways we
            can help you!
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
