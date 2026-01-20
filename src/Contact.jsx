export default function Contact() {
  return (
    <section className="contact">
      <h2 className="section-title">Contact</h2>

      <p className="contact-subtitle">
        Send me a message and I’ll get back to you soon.
      </p>

      <div className="contact-card">
        <form
          className="contact-form"
          action="https://docs.google.com/forms/d/e/1FAIpQLSfPdtD_O6ifgqKp0H3Rt0Pj0aWBj0Cri89oYGYu8Cp_1DmvNQ/viewform?usp=publish-editor"
          method="POST"
          target="hidden_iframe"
          onSubmit={() => setTimeout(() => alert("Message sent!"), 400)}
        >
          <label>
            Name
            <input name="entry.879658095" type="text" placeholder="Your name" required />
          </label>

          <label>
            Email
            <input name="entry.1027906887" type="email" placeholder="you@example.com" required />
          </label>

          <label>
            Message
            <textarea name="entry.1523292866" rows="4" placeholder="Your message..." required />
          </label>

          <button type="submit" className="btn primary contact-btn">
            ✈ Send Message
          </button>

          <iframe name="hidden_iframe" style={{ display: "none" }} />
        </form>

        <div className="contact-info">
          <p>📧 shubham.saraf.1302@gmail.com</p>
          <p>🔗 LinkedIn / GitHub (add links here)</p>
        </div>
      </div>
    </section>
  );
}