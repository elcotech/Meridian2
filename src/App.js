import React, { useEffect } from 'react';
import './App.css';
import emailjs from 'emailjs-com';

/* =========================
   FULLSCREEN HELPER
========================= */
const forceFullscreen = () => {
  const el = document.documentElement;

  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement
  ) {
    return;
  }

  try {
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  } catch (e) {
    // silently fail
  }
};

function App() {
  /* =========================
     FIRST TOUCH FULLSCREEN
  ========================= */
  useEffect(() => {
    const handler = () => forceFullscreen();
    document.addEventListener('touchstart', handler, { once: true });
    document.addEventListener('click', handler, { once: true });

    return () => {
      document.removeEventListener('touchstart', handler);
      document.removeEventListener('click', handler);
    };
  }, []);

  const content = {
    brand: 'Bini Seifu Real Estate',
    tagline: 'Luxury Homes • Smart Investments • Trusted Advisors',

    about: 'About Us',
    services: 'Our Services',
    properties: 'Featured Properties',
    testimonials: 'Client Testimonials',
    contact: 'Contact Us',

    welcome: 'Find Your Dream Home With Confidence',
    description:
      'We connect you with premium residential and commercial properties, backed by expert guidance and market insight.',

    aboutText:
      '🏡 Bini Seifu Real Estate is a professional real estate firm dedicated to helping clients buy, sell, and invest in properties with confidence.\n\n' +
      '📍 We specialize in residential homes, luxury apartments, land sales, and commercial properties.\n\n' +
      '🤝 From first-time buyers to seasoned investors, we deliver personalized service and smooth transactions.',

    service1: 'Property Buying & Selling',
    service1Text:
      'We help you buy and sell homes, apartments, land, and commercial properties at the best value.',

    service2: 'Luxury & Residential Properties',
    service2Text:
      'Exclusive listings of villas, apartments, and gated community homes.',

    service3: 'Land & Investment Opportunities',
    service3Text:
      'Strategic land acquisition and high-return investments.',

    service4: 'Property Management',
    service4Text:
      'Tenant sourcing, rent collection, and maintenance services.',

    service5: 'Legal & Documentation Support',
    service5Text:
      'Contracts, title verification, and legal compliance.',

    service6: 'Consultation & Valuation',
    service6Text:
      'Professional valuation and personalized consultation.',

    property1: 'Modern Luxury Apartment',
    property1Text: '3 Bedrooms • City Center • Secure Parking',

    property2: 'Spacious Family Home',
    property2Text: '4 Bedrooms • Garden • Prime Location',

    property3: 'Commercial Office Space',
    property3Text: 'High Visibility • Easy Access',

    testimonial1:
      'Bini Seifu Real Estate helped me find my dream home easily.',
    testimonial2:
      'Excellent service and honest advice.',
    testimonial3:
      'Very professional team.',

    contactForm: 'Request Property Consultation',
  };

  /* =========================
     EMAIL SUBMIT
  ========================= */
  const sendEmail = (e) => {
    e.preventDefault();
    forceFullscreen();

    emailjs
      .sendForm(
        'service_udbhs7q',
        'template_kssz2gr',
        e.target,
        'LkPanZm-3OzubO9Pg'
      )
      .then(() => alert('Message sent successfully!'))
      .catch(() => alert('Failed to send message.'));

    e.target.reset();
  };

  return (
    <div className="App">
      <header>
        <nav>
          <h2 className="logo">{content.brand}</h2>
          <ul>
            <li>
              <a href="#about" onClick={forceFullscreen}>
                {content.about}
              </a>
            </li>
            <li>
              <a href="#services" onClick={forceFullscreen}>
                {content.services}
              </a>
            </li>
            <li>
              <a href="#properties" onClick={forceFullscreen}>
                {content.properties}
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={forceFullscreen}>
                {content.testimonials}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={forceFullscreen}>
                {content.contact}
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <h1>{content.welcome}</h1>
            <p>{content.description}</p>
            <a
              href="#contact"
              className="cta-button"
              onClick={forceFullscreen}
            >
              {content.contactForm}
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <h2>{content.about}</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{content.aboutText}</p>
        </section>

        {/* SERVICES */}
        <section className="section-dark" id="services">
          <h2>{content.services}</h2>
          <div className="grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className="card" key={i} onClick={forceFullscreen}>
                <h3>{content[`service${i}`]}</h3>
                <p>{content[`service${i}Text`]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROPERTIES */}
        <section className="section" id="properties">
          <h2>{content.properties}</h2>
          <div className="grid">
            {[1, 2, 3].map((i) => (
              <div
                className="card property"
                key={i}
                onClick={forceFullscreen}
              >
                <h3>{content[`property${i}`]}</h3>
                <p>{content[`property${i}Text`]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-dark" id="testimonials">
          <h2>{content.testimonials}</h2>
          <div className="grid">
            {[1, 2, 3].map((i) => (
              <div
                className="card testimonial"
                key={i}
                onClick={forceFullscreen}
              >
                {content[`testimonial${i}`]}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <h2>Contact & Business Information</h2>
          <p>
            📞 <strong>Phone:</strong> 0911434369 <br />
            📧 <strong>Email:</strong> biniseifu@gmail.com <br />
            🕘 <strong>Hours:</strong> Mon – Sat, 8:30 AM – 6:30 PM
          </p>

          <form className="contact-form" onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Full Name"
              required
              onFocus={forceFullscreen}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              onFocus={forceFullscreen}
            />
            <textarea
              name="message"
              placeholder="Tell us what you are looking for..."
              required
              onFocus={forceFullscreen}
            />
            <button type="submit" onClick={forceFullscreen}>
              Send Inquiry
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Bini Seifu Real Estate. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
