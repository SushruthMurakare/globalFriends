import React from "react";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <h2 className="cta-headline">Ready to feel at home?</h2>
        <p className="cta-subtext">
          Whether you just landed or have been here a while — we'd love to meet
          you.
        </p>
        <button
          className="btn-outline-white"
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
