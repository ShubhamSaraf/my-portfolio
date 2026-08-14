import { useRef, useState } from "react";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfPdtD_O6ifgqKp0H3Rt0Pj0aWBj0Cri89oYGYu8Cp_1DmvNQ/formResponse";

const Contact = () => {
  const iframeRef = useRef(null);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // This prevents the initial iframe load from triggering "submitted"
  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
    setHasSubmittedOnce(true);
    // do NOT setSubmitted here — wait for iframe load
  };

  const handleIframeLoad = () => {
    if (!hasSubmittedOnce) return; // ignore initial load
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
              {/* REPLACE these entry IDs with the ones from your pre-filled link */}
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
          ref={iframeRef}
          name="hidden_iframe"
          style={{ display: "none" }}
          onLoad={handleIframeLoad}
          title="hidden_iframe"
        />

        <div className="contact-info">
          <p>✉ contact@shubhamsaraf.dev</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;