import { useRef, useState } from "react";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfPdtD_O6ifgqKp0H3Rt0Pj0aWBj0Cri89oYGYu8Cp_1DmvNQ/formResponse";
const CONTACT_EMAIL = "contact@shubhamsaraf.dev";

const Contact = () => {
  const submissionStarted = useRef(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    submissionStarted.current = true;
    setSubmitting(true);
  };

  const handleIframeLoad = () => {
    if (!submissionStarted.current) return;

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact</h2>

      {!submitted && (
        <p className="contact-subtitle">
          Send me a message and I’ll get back to you soon.
        </p>
      )}

      <div className="contact-card">
        {!submitted ? (
          <form
            className="contact-form"
            action={FORM_ACTION}
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
          >
            <label>
              Name
              <input
                name="entry.879658095"
                type="text"
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email
              <input
                name="entry.1027906887"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="entry.1523292866"
                rows="4"
                placeholder="Your message..."
                required
              />
            </label>

            <button
              type="submit"
              className="btn primary contact-btn"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "✈ Send Message"}
            </button>
          </form>
        ) : (
          <p className="contact-success">
            Thank you for reaching out. I’ve received your message and will get
            back to you shortly.
          </p>
        )}

        <iframe
          name="hidden_iframe"
          title="Contact form response"
          className="contact-response"
          onLoad={handleIframeLoad}
        />

        <div className="contact-info">
          <p>
            ✉ <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
