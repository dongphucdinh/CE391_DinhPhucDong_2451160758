import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact-card">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something clear and useful.</h2>
        </div>
        <div className="contact-actions">
          <a href="mailto:dinhphucdong@example.com" className="button button-primary">
            Email Me
          </a>
          <a href="tel:+84000000000" className="button button-secondary">
            Call
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
