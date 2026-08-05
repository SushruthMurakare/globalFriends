import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const COMMUNITY_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeGuxuBFViPUxmG_f8aW_TDyztKNAAweyn_fPax4TLBYMCapw/viewform?pli=1";

const GFI_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScWSbkiBASA5KAnOpZ_XCjIscBHkhkK3bO-CZUHu2dddCpnQQ/viewform?usp=header";

const INQUIRY_RECIPIENTS = [
  "imarquis@internationalstudents.org",
  "astumbo@internationalstudents.org",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Website inquiry from ${form.name || "a visitor"}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    const mailto = `mailto:${INQUIRY_RECIPIENTS.join(",")}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <>
      <Navbar />

      <section className="contact-header">
        <div className="contact-header__inner">
          <span className="section-label">Contact Us</span>
          <h1 className="contact-headline">We'd Love to Hear From You</h1>
          <p className="contact-sub">
            Whether you want to join the community, get connected with a host
            family, or just have a question — we're here.
          </p>
        </div>
      </section>

      <section className="contact-options">
        <div className="contact-options__grid">
          <div className="contact-card">
            <h3 className="contact-card__title">Join Our Community</h3>
            <p className="contact-card__desc">
              Sign up to get plugged into events, rides, meals, and
              friendships that fit your life here.
            </p>
            <button
              className="btn-primary"
              onClick={() => window.open(COMMUNITY_FORM_URL, "_blank")}
            >
              Join Our Community
            </button>
          </div>

          <div className="contact-card">
            <h3 className="contact-card__title">
              Join Global Families Initiative (GFI)
            </h3>
            <p className="contact-card__desc">
              Get connected with a local host family for monthly dinners,
              hikes, and friendship.
            </p>
            <button
              className="btn-primary"
              onClick={() => window.open(GFI_FORM_URL, "_blank")}
            >
              Get Matched
            </button>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-inner">
          <span className="section-label">Send Us a Message</span>
          <h2 className="contact-form-headline">Have a Question?</h2>
          <p className="contact-form-sub">
            Send a note directly to Ingrid and Anisa — we'll get back to you
            as soon as we can.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-primary contact-form__submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
