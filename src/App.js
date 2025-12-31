import React from 'react';
import './App.css';
import emailjs from 'emailjs-com';

function App() {
  const content = {
    about: 'About Us',
    services: 'Our Services',
    testimonials: 'Customer Reviews',
    contact: 'Contact & Location',
    welcome: 'Welcome to Nick Furniture Making',
    description: 'Crafting beautiful, custom furniture that transforms your living spaces',
    aboutText: '🌟 Nick Furniture Making is your trusted partner for high-quality, custom furniture craftsmanship. With years of experience in woodworking and furniture design, we create pieces that combine beauty, functionality, and durability. Each piece is handcrafted with attention to detail and built to last generations.\n🔥 We specialize in custom furniture solutions tailored to your specific needs, style preferences, and space requirements. From modern minimalist designs to classic traditional pieces, we bring your vision to life with precision and care.\n🏆 Our commitment to excellence and customer satisfaction has made us the preferred choice for homeowners, businesses, and interior designers seeking quality furniture craftsmanship.',
    servicesOffered: 'Custom Furniture',
    largeScaleDesign: 'Living Room Furniture: Custom sofas, coffee tables, TV stands, and shelving units',
    problemSolving: 'Bedroom Sets: Beautiful beds, wardrobes, nightstands, and dressers',
    serverAdmin: 'Dining Room: Custom dining tables, chairs, buffets, and serving carts',
    programmingLanguages: 'Specialty Services',
    phpFrameworks: 'Custom Woodworking: Bespoke pieces designed specifically for your space',
    jsFrameworks: 'Furniture Restoration: Repair and restore your cherished furniture pieces',
    htmlCss: 'Office Furniture: Desks, bookcases, and storage solutions for workspaces',
    databases: 'Kitchen Cabinetry: Custom kitchen cabinets and storage solutions',
    cloudServices: 'Upholstery Services: Reupholstering and cushion replacement',
    integration: 'Furniture Design Consultation: Professional advice for your furniture projects',
    cms: 'Material Selection: Guidance on wood types, finishes, and hardware',
    versionControl: 'Space Planning: Optimize your room layout with custom furniture',
    projectManagement: 'Delivery & Installation: Professional delivery and setup service',
    testimonialsText1: 'Nick created a beautiful custom dining table for our family. The craftsmanship is exceptional, and it has become the centerpiece of our home. Highly recommended for anyone looking for quality furniture!',
    testimonialsText2: 'The custom bookshelves Nick built for my office are absolutely stunning. His attention to detail and professional service made the entire process smooth and enjoyable.',
    contactForm: 'Get a Free Quote'
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_udbhs7q', 'template_kssz2gr', e.target, 'LkPanZm-3OzubO9Pg')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
      });

    e.target.reset();
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#about">{content.about}</a></li>
            <li><a href="#services">{content.services}</a></li>
            <li><a href="#testimonials">{content.testimonials}</a></li>
            <li><a href="#contact">{content.contact}</a></li>
          </ul>
        </nav>
        <div className="hero-image">
          <img src="2.jpg" alt="Hero" style={{ width: '100%', height: 'auto' }} />
        </div>
      </header>
      <main>
        <section className="hero" id="about">
          <div className="hero-content">
            <h1>🪑 🛋️</h1><br/>
            <h1>{content.welcome}</h1>
            <p>{content.description}</p>
            <a href="#contact" className="cta-button">{content.contactForm}</a>
          </div>
        </section>
        <section className="section" id="about">
          <h2>{content.about}</h2>
          <p>{content.aboutText}</p>
        </section>
        <section className="section-extended" id="services">
          <h2>{content.services}</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>{content.servicesOffered}</h3>
              <p>{content.largeScaleDesign}</p>
              <p>{content.problemSolving}</p>
              <p>{content.serverAdmin}</p>
            </div>
            <div className="service-card">
              <h3>{content.programmingLanguages}</h3>
              <p>{content.phpFrameworks}</p>
              <p>{content.jsFrameworks}</p>
              <p>{content.htmlCss}</p>
              <p>{content.databases}</p>
              <p>{content.cloudServices}</p>
              <p>{content.integration}</p>
              <p>{content.cms}</p>
              <p>{content.versionControl}</p>
              <p>{content.projectManagement}</p>
            </div>
          </div>
        </section>
        <section className="section" id="testimonials">
          <h2>{content.testimonials}</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>{content.testimonialsText1}</p>
              <p className="testimonial-author"><h3>Satisfied Homeowner</h3></p>
            </div>
            <div className="testimonial-card">
              <p>{content.testimonialsText2}</p>
              <p className="testimonial-author"><h3>Office Client</h3></p>
            </div>
          </div>
        </section>
        <section className="section" id="contact">
          <h1>Business Hours & Contact Information</h1>
          <p>
            <strong>Business Hours:</strong><br/>
            Monday - Friday: 8:00 AM - 6:00 PM<br/>
            Saturday: 9:00 AM - 4:00 PM<br/>
            Sunday: Closed<br/><br/>
            
            <strong>Phone Number:</strong><br/>
            0962117213<br/><br/>
            
            <strong>Location:</strong><br/>
            Visit our workshop to discuss your furniture project<br/>
            Free consultations and quotes available
          </p>
          <h2>Request a Free Consultation</h2>
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" />
            <textarea name="message" placeholder="Describe your furniture project, room dimensions, and any specific requirements" required></textarea><br /><br />
            <button type="submit">Send Request</button>
          </form>
        </section>
      </main> 
    </div>
  );
}

export default App;