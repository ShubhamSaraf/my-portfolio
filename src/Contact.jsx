const CONTACT_EMAIL = "contact@shubhamsaraf.dev";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact</h2>

      <p className="contact-subtitle">
        Send me a message and I’ll get back to you soon.
      </p>

      <div className="contact-card">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Your message..."
              required
            />
          </label>

          <button type="submit" className="btn primary contact-btn">
            ✉ Open Email App
          </button>
        </form>

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
