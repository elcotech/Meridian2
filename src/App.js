import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [language, setLanguage] = useState('am'); // Default Amharic
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Content for both languages (exactly as you provided - unchanged)
  const content = {
    en: {
      name: 'MERIDIAN LAW FIRM LLP',
      
      location: 'Addis Ababa, Ethiopia',
      phone: '+251-900-802400 / +251-911-425414',
      email: 'meridianlawinfo@gmail.com',
      website: 'https://meridianlawfirmllp.com.et',
      whatsapp: 'https://wa.me/251900802400',
      
      welcome: 'Strategically positioned within international legal and professional networks',
      description: 'A Full-Service Ethiopian Law Firm providing comprehensive legal services.',
      
      about: 'About Our Firm',
      aboutText: `🏛️ MERIDIAN LAW FIRM LLP - ሜሪዲያን የጥብቅና አገልግሎት ኃ/የተ/የሽ/ማህበር

A Full-Service Ethiopian Law Firm
Strategically positioned within international legal and professional networks, we provide comprehensive legal services across all areas of Ethiopian law for domestic and international clients, including foreign investors.`,

      services: 'Our Legal Services',
      servicesList: [
        ['📋 Legal Advisory Services', 'Expert legal guidance to help your business navigate complex matters.'],
        ['💼 Commercial Law', 'Guiding businesses from start-up to multinational operations.'],
        ['⚔️ Litigation & Defense', 'Handling complex civil and criminal litigation with expertise.'],
        ['💰 Tax Law & Financial Strategy', 'Conducting high-level reviews of tax obligations.'],
        ['🛡️ Insurance & Liability Advisory', 'Providing counsel on liability and risk management.'],
        ['🌍 Comprehensive Legal Services', 'Expert representation in all areas of Ethiopian law.']
      ],

      partners: 'Our Legal Partners',
      partnersList: [
        {
          name: 'MESFIN MARE WELDEGIORGIS',
          title: 'MANAGING PARTNER',
          description: 'Professional Summary: Highly respected legal professional with extensive experience in governmental institutions and private legal practice.',
          fullText: `He possesses comprehensive expertise in constitutional law, international law, criminal law, civil law, commercial law, contract and extra-contractual obligations, labor law, and administrative law, tax law and has handled complex litigation, advisory, and regulatory matters involving public institutions, multinational and domestic corporate entities, and private clients.`
        },
        {
          name: 'HABTAMU BISRAT KEBEDE',
          title: 'DEPUTY MANAGING PARTNER',
          description: 'Professional Summary: Experienced legal professional with substantial service in governmental institutions and private legal practice.',
          fullText: `He has broad and in-depth expertise in constitutional law, criminal law, civil law, commercial law, contract and extra-contractual obligations, labor law, and administrative law, tax law and has handled a wide range of litigation, advisory, and regulatory matters.`
        },
        {
          name: 'TALEMA GIZACHEW BIZUNEH',
          title: 'PARTNER',
          description: 'Professional Summary: Senior legal professional with extensive combined service in governmental institutions and as a practicing lawyer.',
          fullText: `He possesses comprehensive expertise in constitutional law, criminal law, civil law, commercial law, contract and extra-contractual obligations, labor law, and administrative law, tax law and has handled a broad range of litigation, advisory, and regulatory matters.`
        },
        {
          name: 'AKLILU ABEBAW BELAY',
          title: 'PARTNER',
          description: 'Professional Summary: Senior legal professional with extensive service in various governmental institutions, public corporations, and private legal practice.',
          fullText: `He possesses comprehensive expertise in constitutional law, criminal law, civil law, commercial law, contract and extra-contractual obligations, labor law, administrative law, tax law, and environmental law, and has handled complex litigation and advisory matters.`
        }
      ],

      expertise: 'Specialized Service Sectors',
      expertiseList: [
        '⚖️ Judicial Insight & Oversight',
        '🌐 Strategic Networks & Policy',
        '⚔️ Litigation & Defense',
        '📊 Commercial Law',
        '💰 Tax Law & Financial Strategy',
        '🛡️ Insurance & Liability Advisory',
        '🌍 Foreign Investment'
      ],

      legalCodes: 'Ethiopian Legal Framework',
      legalCodesList: [
        {
          category: 'Codes',
          items: [
            '📚 Civil Code',
            '⚖️ Criminal Code',
            '💼 Commercial Code'
          ]
        },
        {
          category: 'Proclamations',
          items: [
            '👥 Labour Proclamation',
            '🏛️ Investment Proclamation',
            '🏦 Banking Business Proclamation'
          ]
        },
        {
          category: 'Regulations',
          items: [
            '📋 Trade Regulations',
            '📊 Financial Regulations',
            '🛡️ Insurance Regulations'
          ]
        },
        {
          category: 'Directives',
          items: [
            '🎯 Central Bank Directives',
            '📈 Capital Market Directives',
            '🏢 Regulatory Directives'
          ]
        }
      ],

      articles: 'Legal Articles & Insights',
      articlesList: [
        ['📈 Navigating Ethiopian Investment Laws', 'Key insights for foreign investors entering the Ethiopian market.'],
        ['⚖️ Commercial Dispute Resolution', 'Analysis of new procedural rules affecting commercial litigation.'],
        ['💼 Corporate Governance', 'Essential guidelines for companies operating in Ethiopia.'],
        ['🌍 Cross-Border Legal', 'Important factors for international businesses in Ethiopia.']
      ],

      newsletter: 'Join Our Legal Digest',
      newsletterText: 'Receive expert legal insights, regulatory updates, and firm announcements.',
      
      contact: 'Contact Us',
      officeHours: 'Office Hours',
      hours: [
        'Monday - Friday: 8:30 AM - 5:30 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Emergency consultations available'
      ],
      
      socialMedia: 'Connect With Us',
      socialLinks: [
        { platform: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/meridian-law-firm-llp-ethiopia-3693593a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: '#0077B5' },
        { platform: 'Facebook', icon: 'facebook', url: 'https://facebook.com/meridianlawfirm', color: '#1877F2' },
        { platform: 'Telegram', icon: 'telegram', url: 'https://t.me/meridianlawfirm', color: '#0088CC' },
        { platform: 'TikTok', icon: 'tiktok', url: 'https://www.tiktok.com/@meridianlawfirm?_r=1&_t=ZN-93TffCGfLiY', color: '#000000' },
        { platform: 'YouTube', icon: 'youtube', url: 'https://youtube.com/c/meridianlawfirm', color: '#FF0000' }
      ]
    },
    
    am: {
      name: 'ሜሪዲያን የሕግ ቢሮ ኃ/የተ/የሽ/ማህበር',
    
      location: 'አዲስ አበባ፣ ኢትዮጵያ',
      phone: '+251-900-802400 / +251-911-425414',
      email: 'meridianlawinfo@gmail.com',
      website: 'https://meridianlawfirmllp.com.et',
      whatsapp: 'https://wa.me/251900802400',
      
      welcome: 'በዓለም አቀፍ የሕግ እና ሙያዊ አውታረ መረቦች ውስጥ በስትራቴጂክ ሁኔታ የተቀመጠ',
      description: 'ሙሉ የሕግ አገልግሎት የሚሰጥ ኢትዮጵያዊ የሕግ ቢሮ።',
      
      about: 'ስለ ቢሮአችን',
      aboutText: `🏛️ ሜሪዲያን የሕግ ቢሮ - የጥብቅና አገልግሎት

ሙሉ የሕግ አገልግሎት የሚሰጥ ኢትዮጵያዊ የሕግ ቢሮ
በዓለም አቀፍ የሕግ እና ሙያዊ አውታረ መረቦች ውስጥ በስትራቴጂክ ሁኔታ የተቀመጥን።`,

      services: 'የሕግ አገልግሎቶቻችን',
      servicesList: [
        ['📋 የሕግ ምክር አገልግሎቶች', 'የባለሙያ የሕግ መመሪያ የንግድዎን ጉዳዮች ለማስተናገድ።'],
        ['💼 ንግድ ሕግ', 'ከመጀመሪያ እስከ ባለብዙ ብሔራዊ ድርጅት ድረስ የሚመሩ ንግዶች።'],
        ['⚔️ የፍርድ እና መከላከያ', 'በሲቪል እና የወንጀል ፍርድ ጉዳዮች ልምድ ያለው አገልግሎት።'],
        ['💰 የታክስ ሕግ እና የፋይናንስ ስትራቴጂ', 'የታክስ ግዴታዎችን ከፍተኛ ደረጃ መርምር።'],
        ['🛡️ የኢንሹራንስ እና ኃላፊነት ምክር', 'ስለ ኃላፊነት እና አደጋ አስተዳደር ምክር መስጠት።'],
        ['🌍 የተሟላ የሕግ አገልግሎት', 'በኢትዮጵያ ሕግ ሁሉም መስኮች የባለሙያ ውክልና።']
      ],

      partners: 'የሕግ አጋሮቻችን',
      partnersList: [
        {
          name: 'መስፍን ማሬ ወልደጊዮርጊስ',
          title: 'አስተዳዳሪ አጋር',
          description: 'ሙያዊ ማጠቃለያ: ከፍተኛ የሕግ ሙያ ባለሙያ፣ በመንግሥት ተቋማት እና በግል የሕግ ተግባር ሰፊ ልምድ ያለው።',
          fullText: `በሕገ መንግሥት ሕግ፣ ዓለም አቀፍ ሕግ፣ የወንጀል ሕግ፣ ፍትሐ ብሔር ሕግ፣ ንግድ ሕግ፣ ውል እና ከውል ውጪ ግዴታዎች፣ የሠራተኛ ሕግ፣ አስተዳደራዊ ሕግ እና የታክስ ሕግ ሰፊ እውቀት ያለው።`
        },
        {
          name: 'ሀብታሙ ብስራት ከበደ',
          title: 'ምክትል አስተዳዳሪ አጋር',
          description: 'ሙያዊ ማጠቃለያ: በመንግሥት ተቋማት እና በግል የሕግ ተግባር ሰፊ ልምድ ያለው የሕግ ባለሙያ።',
          fullText: `በሕገ መንግሥት ሕግ፣ የወንጀል ሕግ፣ ፍትሐ ብሔር ሕግ፣ ንግድ ሕግ፣ ውል እና ከውል ውጪ ግዴታዎች፣ የሠራተኛ ሕግ፣ አስተዳደራዊ ሕግ እና የታክስ ሕግ ሰፊ እውቀት ያለው።`
        },
        {
          name: 'ጣለማ ግዛቸው ብዙነህ',
          title: 'አጋር',
          description: 'ሙያዊ ማጠቃለያ: በመንግሥት ተቋማት እና በግል የሕግ ተግባር ሰፊ ልምድ ያለው ከፍተኛ የሕግ ባለሙያ።',
          fullText: `በሕገ መንግሥት ሕግ፣ የወንጀል ሕግ፣ ፍትሐ ብሔር ሕግ፣ ንግድ ሕግ፣ ውል እና ከውል ውጪ ግዴታዎች፣ የሠራተኛ ሕግ፣ አስተዳደራዊ ሕግ እና የታክስ ሕግ ሰፊ እውቀት ያለው።`
        },
        {
          name: 'አክሊሉ አበባው በላይ',
          title: 'አጋር',
          description: 'ሙያዊ ማጠቃለያ: በተለያዩ የመንግሥት ተቋማት፣ የመንግሥት ኮርፖሬሽኖች እና በግል የሕግ ተግባር ሰፊ ልምድ ያለው ከፍተኛ የሕግ ባለሙያ።',
          fullText: `በሕገ መንግሥት ሕግ፣ የወንጀል ሕግ፣ ፍትሐ ብሔር ሕግ፣ ንግድ ሕግ፣ ውል እና ከውል ውጪ ግዴታዎች፣ የሠራተኛ ሕግ፣ አስተዳደራዊ ሕግ፣ የታክስ ሕግ እና የአካባቢ ሕግ ሰፊ እውቀት ያለው።`
        }
      ],

      expertise: 'ልዩ የአገልግሎት ዘርፎች',
      expertiseList: [
        '⚖️ የፍርድ ግንዛቤ እና ቁጥጥር',
        '🌐 ስትራቴጂክ አውታረመረቦች እና ፖሊሲ',
        '⚔️ የፍርድ እና መከላከያ',
        '📊 ንግድ ሕግ',
        '💰 የታክስ ሕግ እና የፋይናንስ ስትራቴጂ',
        '🛡️ የኢንሹራንስ እና ኃላፊነት ምክር',
        '🌍 የውጭ ኢንቨስትመንት'
      ],

      legalCodes: 'የኢትዮጵያ ሕግ መዋቅር',
      legalCodesList: [
        {
          category: 'ኮዶች',
          items: [
            '📚 ፍትሐ ብሔር ኮድ',
            '⚖️ የወንጀል ኮድ',
            '💼 ንግድ ኮድ'
          ]
        },
        {
          category: 'አዋጆች',
          items: [
            '👥 የሠራተኞች አዋጅ',
            '🏛️ የኢንቨስትመንት አዋጅ',
            '🏦 የባንክ ንግድ አዋጅ'
          ]
        },
        {
          category: 'ደንቦች',
          items: [
            '📋 የንግድ ደንቦች',
            '📊 የፋይናንስ ደንቦች',
            '🛡️ የኢንሹራንስ ደንቦች'
          ]
        },
        {
          category: 'መመሪያዎች',
          items: [
            '🎯 የማዕከላዊ ባንክ መመሪያዎች',
            '📈 የካፒታል ገበያ መመሪያዎች',
            '🏢 የቁጥጥር መመሪያዎች'
          ]
        }
      ],

      articles: 'የሕግ ጽሑፎች እና ግንዛቤዎች',
      articlesList: [
        ['📈 የኢትዮጵያ ኢንቨስትመንት ሕጎች', 'ወደ ኢትዮጵያ ገበያ ለሚገቡ የውጭ ባለሃብቶች ቁልፍ መረጃዎች።'],
        ['⚖️ የንግድ ክርክር መፍትሄ', 'በንግድ ክርክር ላይ ተጽዕኖ የሚያሳድሩ አዳዲስ የሥርዓት ሕጎች ትንተና።']
      ],

      newsletter: 'የሕግ ዲጄስታችንን ይቀላቀሉ',
      newsletterText: 'የባለሙያ የሕግ ግንዛቤዎችን፣ የሕግ ማሻሻያዎችን እና የቢሮ ማስታወቂያዎችን በኢሜልዎ ይቀበሉ።',
      
      contact: 'አግኙን',
      officeHours: 'የሥራ ሰዓቶች',
      hours: [
        'ሰኞ - ዓርብ: 8:30 ጥዋት - 5:30 ከሰዓት',
        'ቅዳሜ: 9:00 ጥዋት - 1:00 ከሰዓት',
        'ለአደጋ ጊዜ ምክክር ይገኛል'
      ],
      
      socialMedia: 'ከእኛ ጋር ይገናኙ',
      socialLinks: [
        { platform: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/meridian-law-firm-llp-ethiopia-3693593a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: '#0077B5' },
        { platform: 'Facebook', icon: 'facebook', url: 'https://facebook.com/meridianlawfirm', color: '#1877F2' },
        { platform: 'Telegram', icon: 'telegram', url: 'https://t.me/meridianlawfirm', color: '#0088CC' },
        { platform: 'TikTok', icon: 'tiktok', url: 'https://www.tiktok.com/@meridianlawfirm?_r=1&_t=ZN-93TffCGfLiY', color: '#000000' },
        { platform: 'YouTube', icon: 'youtube', url: 'https://youtube.com/c/meridianlawfirm', color: '#FF0000' }
      ]
    }
  };

  const currentContent = content[language];

  // Animation effects
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
      _subject: `New Legal Inquiry from ${formData.get('name')}`,
      _captcha: "false"
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/meridianlawinfo@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitMessage(language === 'en' ? 
          '✅ Thank you! Your legal inquiry has been sent successfully. We will respond within 24 hours.' :
          '✅ እናመሰግናለን! የሕግ ጥያቄዎ በተሳካ ሁኔታ ተልኳል። በ24 ሰዓታት ውስጥ እንመልሳለን።'
        );
        e.target.reset();
      } else {
        setSubmitMessage(language === 'en' ?
          '⚠️ There was an error sending your message. Please try again or email directly at meridianlawinfo@gmail.com' :
          '⚠️ መልእክትዎን በመላክ ላይ ስህተት ተከስቷል። እንደገና ይሞክሩ ወይም በቀጥታ ወደ meridianlawinfo@gmail.com ይጻፉ።'
        );
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage(language === 'en' ?
        '❌ Network error. Please try again or contact directly via phone.' :
        '❌ የኔትዎርክ ስህተት። እንደገና ይሞክሩ ወይም በቀጥታ በስልክ ያግኙን።'
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    }
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open(currentContent.whatsapp, '_blank');
  };

  const renderSocialIcon = (iconName) => {
    switch(iconName) {
      case 'linkedin': return <i className="fab fa-linkedin-in"></i>;
      case 'facebook': return <i className="fab fa-facebook-f"></i>;
      case 'telegram': return <i className="fab fa-telegram-plane"></i>;
      case 'tiktok': return <i className="fab fa-tiktok"></i>;
      case 'youtube': return <i className="fab fa-youtube"></i>;
      case 'whatsapp': return <i className="fab fa-whatsapp"></i>;
      default: return iconName;
    }
  };

  return (
    <div className="App">
      {/* WhatsApp Button */}
      <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
        <i className="fab fa-whatsapp"></i>
      </button>

      {/* Floating Social Media */}
      <div className="floating-social">
        {currentContent.socialLinks.map((social, index) => (
          <button
            key={index}
            className="social-button"
            onClick={() => handleSocialClick(social.url)}
            style={{ '--social-color': social.color, '--delay': index * 0.1 + 's' }}
            aria-label={social.platform}
          >
            {renderSocialIcon(social.icon)}
            <span className="social-tooltip">{social.platform}</span>
          </button>
        ))}
      </div>

      {/* Language Switcher */}
      <div className="language-switcher">
        <button
          className={`lang-btn ${language === 'en' ? 'active' : ''}`}
          onClick={() => setLanguage('en')}
        >🇬🇧 EN</button>
        <button
          className={`lang-btn ${language === 'am' ? 'active' : ''}`}
          onClick={() => setLanguage('am')}
        >🇪🇹 AM</button>
      </div>

      {/* Menu Toggle - always visible */}
      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span><span></span><span></span>
        </div>
      </button>

      {/* Navigation - semi‑transparent overlay */}
      <nav className={`nav-main ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>🏛️ {language === 'en' ? 'Home' : 'መግቢያ'}</button></li>
          <li><button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>🎫 {currentContent.about}</button></li>
          <li><button onClick={() => scrollToSection('services')} className={activeSection === 'services' ? 'active' : ''}>⚖️ {currentContent.services}</button></li>
          <li><button onClick={() => scrollToSection('partners')} className={activeSection === 'partners' ? 'active' : ''}>👥 {currentContent.partners}</button></li>
          <li><button onClick={() => scrollToSection('expertise')} className={activeSection === 'expertise' ? 'active' : ''}>🎯 {currentContent.expertise}</button></li>
          <li><button onClick={() => scrollToSection('legal-codes')} className={activeSection === 'legal-codes' ? 'active' : ''}>📚 {currentContent.legalCodes}</button></li>
          <li><button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>📞 {currentContent.contact}</button></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        {/* HERO SECTION - Your Lady Justice Image */}
        <section className="hero" id="home">
          <div className="hero-background">
            <div className="bg-grid"></div>
            <div className="bg-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
            </div>
          </div>
          <div className="container">
            <div className="hero-content">
              {/* Hero badge removed as requested */}
              <h1 className="hero-title">
                <span className="title-line title-line-1">{currentContent.name}</span>
                <span className="title-line title-line-2">{currentContent.title}</span>
              </h1>
              <p className="hero-subtitle">{currentContent.welcome}</p>
              <p className="hero-description">{currentContent.description}</p>
              <div className="hero-stats">
                <div className="stat-item"><span className="stat-text">{language === 'en' ? 'Extensive Experience' : 'ሰፊ ልምድ'}</span></div>
                <div className="stat-item"><span className="stat-text">{language === 'en' ? 'Proven Track Record' : 'የተረጋገጠ አፈጻጸም'}</span></div>
                <div className="stat-item"><span className="stat-text">{language === 'en' ? 'International Reach' : 'ዓለም አቀፍ ሽፋን'}</span></div>
              </div>
              <div className="hero-buttons">
                <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
                  <i className="fas fa-calendar-alt"></i> {language === 'en' ? 'Schedule Consultation' : 'ምክር ያስይዙ'}
                </button>
                <button onClick={() => scrollToSection('services')} className="btn btn-secondary">
                  <i className="fas fa-gavel"></i> {language === 'en' ? 'View Services' : 'አገልግሎቶችን ይመልከቱ'}
                </button>
              </div>
            </div>
            
            {/* YOUR LADY JUSTICE IMAGE - STUNNING ANIMATIONS */}
            <div className="hero-visual">
              <img 
                src="/1.png" 
                alt="Statue of Lady Justice holding scales and sword, symbolizing fairness and law"
                className="lady-justice-img"
              />
            </div>
          </div>
          <div className="scroll-indicator">
            <div className="mouse"><div className="wheel"></div></div>
            <span>{language === 'en' ? 'Scroll to explore' : 'ለማየት ይሸብልሉ'}</span>
          </div>
        </section>

        {/* All other sections remain exactly as in your original code - they are already perfect */}
        {/* About Section */}
        <section className="section about-section" id="about">
          <div className="container">
            <div className="section-header">
              <div className="section-icon">🏛️</div>
              <h2>{currentContent.about}</h2>
              <div className="section-subtitle">
                {language === 'en' ? 'Three Decades of Legal Excellence' : 'ሦስት አስርት ዓመታት የሕግ ልዕልና'}
              </div>
            </div>
            <div className="about-content">
              <div className="about-text">
                <p className="text-summary">{currentContent.aboutText}</p>
                <details className="read-more-details">
                  <summary>{language === 'en' ? 'Read More' : 'ተጨማሪ ያንብቡ'}</summary>
                  <div className="details-content">
                    <p>{language === 'en' 
                      ? 'Through strategic legal advocacy and informed consultation, we position our clients at the forefront of their fields. Our team of experienced attorneys combines deep knowledge of Ethiopian law with international legal expertise to deliver exceptional results.' 
                      : 'በስትራቴጂክ የሕግ ተሟጋችነት እና በተማረ ምክክር አማካኝነት ደንበኞቻችን በራሳቸው መስኮች ግንባር ቀደም እንዲሆኑ እናደርጋለን። ልምድ ያላቸው የሕግ ባለሙያዎቻችን የኢትዮጵያ ሕግ ጥልቅ እውቀት ከዓለም አቀፍ የሕግ ብቃት ጋር በማጣመር ልዩ ውጤቶችን ያስገኛሉ።'}
                    </p>
                  </div>
                </details>
                <div className="excellence-badges">
                  <div className="badge">🏆 {language === 'en' ? 'Award Winning' : 'የሽልማት ተሸላሚ'}</div>
                  <div className="badge">⭐ {language === 'en' ? 'Top Rated' : 'ከፍተኛ ደረጃ'}</div>
                  <div className="badge">🤝 {language === 'en' ? 'Client Focused' : 'በደንበኛ ላይ ያተኮረ'}</div>
                </div>
              </div>
              <div className="about-visual">
                <div className="visual-card">
                  <div className="visual-icon">⚖️</div>
                  <h3>{language === 'en' ? 'Our Mission' : 'ተልዕኮአችን'}</h3>
                  <p>{language === 'en' 
                    ? 'To deliver exceptional legal services with integrity, expertise, and unwavering commitment to our clients\' success.' 
                    : 'በታማኝነት፣ በሙያ ብቃት እና በደንበኞቻችን ስኬት ላይ በማይናወጥ ቁርጠኝነት ልዩ የሕግ አገልግሎቶችን ማቅረብ።'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-header">
              <div className="section-icon">⚖️</div>
              <h2>{currentContent.services}</h2>
              <div className="section-subtitle">
                {language === 'en' ? 'Comprehensive Legal Solutions' : 'የተሟላ የሕግ መፍትሄዎች'}
              </div>
            </div>
            <div className="services-grid">
              {currentContent.servicesList.map(([iconTitle, description], index) => {
                const icon = iconTitle.charAt(0);
                const title = iconTitle.slice(2);
                return (
                  <div className="service-card" key={index} style={{ '--delay': index * 0.1 + 's' }}>
                    <div className="service-icon">{icon}</div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <button className="read-more-btn" onClick={() => scrollToSection('contact')}>
                      {language === 'en' ? 'Learn More →' : 'ተጨማሪ እወቅ →'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="section partners-section" id="partners">
          <div className="container">
            <div className="section-header">
              <div className="section-icon">👥</div>
              <h2>{currentContent.partners}</h2>
              <div className="section-subtitle">
                {language === 'en' ? 'Meet Our Legal Experts' : 'የሕግ ባለሙያዎቻችንን ይግኙ'}
              </div>
            </div>
            <div className="partners-grid">
              {currentContent.partnersList.map((partner, index) => (
                <div className="partner-card" key={index} style={{ '--delay': index * 0.2 + 's' }}>
                  <div className="partner-header">
                    <div className="partner-avatar">
                      <span className="avatar-icon">{['👨‍⚖️', '👨‍💼', '👨‍🎓', '👨‍⚖️'][index]}</span>
                    </div>
                    <div className="partner-info">
                      <h3>{partner.name}</h3>
                      <div className="partner-title">{partner.title}</div>
                    </div>
                  </div>
                  <div className="partner-summary">
                    <p>{partner.description}</p>
                  </div>
                  <details className="partner-details">
                    <summary>{language === 'en' ? 'View Full Profile' : 'ሙሉ መግለጫ ይመልከቱ'}</summary>
                    <div className="details-content">
                      <p>{partner.fullText}</p>
                    </div>
                  </details>
                  <div className="partner-experience">
                    <span className="exp-badge">
                      {language === 'en' ? 'Extensive Experience' : 'ሰፊ ልምድ'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="section expertise-section" id="expertise">
          <div className="container">
            <div className="section-header">
              <div className="section-icon">🎯</div>
              <h2>{currentContent.expertise}</h2>
              <div className="section-subtitle">
                {language === 'en' ? 'Our Core Competencies' : 'ዋና አቅሞቻችን'}
              </div>
            </div>
            <div className="expertise-list">
              {currentContent.expertiseList.map((item, index) => (
                <div className="expertise-item" key={index} style={{ '--delay': index * 0.1 + 's' }}>
                  <span className="expertise-icon">{item.split(' ')[0]}</span>
                  <span className="expertise-text">{item.slice(2)}</span>
                </div>
              ))}
            </div>
            <div className="expertise-stats">
              <div className="stat-card">
                <div className="stat-text">{language === 'en' ? 'Exceptional Success Rate' : 'የላቀ የስኬት መጠን'}</div>
              </div>
              <div className="stat-card">
                <div className="stat-text">{language === 'en' ? '24/7 Client Support' : 'ሙሉ ጊዜ የደንበኛ ድጋፍ'}</div>
              </div>
              <div className="stat-card">
                <div className="stat-text">{language === 'en' ? 'Vast Expert Network' : 'ሰፊ የባለሙያ አውታረመረብ'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Codes Section */}
        <section className="section legal-codes-section" id="legal-codes">
          <div className="container">
            <div className="section-header">
              <div className="section-icon">📚</div>
              <h2>{currentContent.legalCodes}</h2>
              <div className="section-subtitle">
                {language === 'en' ? 'Comprehensive Ethiopian Legal Framework' : 'የተሟላ የኢትዮጵያ ሕግ መዋቅር'}
              </div>
            </div>
            <div className="legal-codes-grid">
              {currentContent.legalCodesList.map((category, index) => (
                <div className="category-card" key={index} style={{ '--delay': index * 0.1 + 's' }}>
                  <div className="category-header">
                    <h3>{category.category}</h3>
                  </div>
                  <div className="category-items">
                    {category.items.map((item, itemIndex) => {
                      const icon = item.charAt(0);
                      const text = item.slice(2);
                      return (
                        <div className="code-item" key={itemIndex}>
                          <span className="code-icon">{icon}</span>
                          <span className="code-text">{text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="section-header">
              <div className="section-icon">📞</div>
              <h2>{currentContent.contact}</h2>
              <div className="section-subtitle">
                {language === 'en' ? 'Get Your Legal Consultation' : 'የሕግ ምክክርዎን ያግኙ'}
              </div>
            </div>
            {submitMessage && (
              <div className={`alert-message ${submitMessage.includes('✅') ? 'success' : 'error'}`}>
                {submitMessage}
              </div>
            )}
            <div className="contact-grid">
              <div className="contact-info">
                <h3>📍 {currentContent.location}</h3>
                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-icon"><i className="fas fa-phone"></i></span>
                    <div>
                      <strong>{language === 'en' ? 'Phone' : 'ስልክ'}</strong>
                      <a href={`tel:${currentContent.phone}`}>{currentContent.phone}</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon"><i className="fas fa-envelope"></i></span>
                    <div>
                      <strong>Email</strong>
                      <a href={`mailto:${currentContent.email}`}>{currentContent.email}</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon"><i className="fas fa-globe"></i></span>
                    <div>
                      <strong>{language === 'en' ? 'Website' : 'ድህረገጽ'}</strong>
                      <a href={currentContent.website} target="_blank" rel="noopener noreferrer">{currentContent.website}</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon"><i className="fab fa-whatsapp"></i></span>
                    <div>
                      <strong>WhatsApp</strong>
                      <a href={currentContent.whatsapp} target="_blank" rel="noopener noreferrer">
                        {language === 'en' ? 'Chat with us' : 'ከእኛ ጋር ይነጋገሩ'}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="office-hours">
                  <h4><i className="far fa-clock"></i> {currentContent.officeHours}</h4>
                  {currentContent.hours.map((hour, index) => <p key={index}>{hour}</p>)}
                </div>
                <div className="social-section">
                  <h4><i className="fas fa-share-alt"></i> {currentContent.socialMedia}</h4>
                  <div className="social-buttons">
                    {currentContent.socialLinks.map((social, index) => (
                      <button
                        key={index}
                        className="social-btn"
                        onClick={() => handleSocialClick(social.url)}
                        style={{ '--social-color': social.color }}
                        aria-label={social.platform}
                      >
                        {renderSocialIcon(social.icon)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="contact-form-wrapper">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input type="text" name="name" placeholder={language === 'en' ? 'Full Name' : 'ሙሉ ስም'} required />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" placeholder={language === 'en' ? 'Email Address' : 'ኢሜል አድራሻ'} required />
                  </div>
                  <div className="form-group">
                    <select name="service" required>
                      <option value="">{language === 'en' ? 'Select Legal Service Needed' : 'የሚፈልጉትን የሕግ አገልግሎት ይምረጡ'}</option>
                      {/* English options updated with new list */}
                      {language === 'en' ? (
                        <>
                          <option value="corporate">📑 Corporate & Commercial Law (Company formation, governance, compliance, and commercial transactions.)</option>
                          <option value="contract">📜 Contract Drafting & Negotiation (Preparation, review, and negotiation of contracts and legal instruments.)</option>
                          <option value="employment">👷 Employment Law (Advisory and representation in employment relations and labor disputes.)</option>
                          <option value="administrative">🏢 Administrative & Regulatory Law (Advisory and representation involving government authorities and regulatory bodies.)</option>
                          <option value="tax_investment">💰 Tax & Investment Advisory (Legal guidance on tax matters and foreign/direct investment compliance.)</option>
                          <option value="international">🌍 International & Cross-Border Matters (Legal support for foreign investors and multinational entities operating in Ethiopia.)</option>
                          <option value="environmental">🌱 Environmental & Compliance Law (Advisory on environmental regulations and compliance obligations.)</option>
                        </>
                      ) : (
                        /* Amharic options unchanged (previous list) */
                        <>
                          <option value="advisory">የሕግ ምክር አገልግሎቶች</option>
                          <option value="commercial">ንግድ ሕግ</option>
                          <option value="litigation">ክርክር እና መከላከያ</option>
                          <option value="tax">የታክስ ሕግ እና የፋይናንስ ስትራቴጂ</option>
                          <option value="foreign">የውጭ ኢንቨስትመንት</option>
                        </>
                      )}
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder={language === 'en' ? 'Describe your legal matter or inquiry...' : 'የሕግ ጉዳይዎን ወይም ጥያቄዎን ይግለጹ...'}
                      required
                      rows="6"
                    ></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="submit-btn">
                    {isSubmitting 
                      ? (language === 'en' ? 'Sending...' : 'በመላክ ላይ...')
                      : (language === 'en' ? 'Send Legal Inquiry' : 'የሕግ ጥያቄ ይላኩ')}
                    {!isSubmitting && <span className="btn-icon"><i className="fas fa-paper-plane"></i></span>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="footer-logo">{currentContent.name}</h3>
              <p className="footer-tagline">
                {language === 'en' ? 'Excellence in Legal Representation' : 'በሕግ ውክልና ልዕልና'}
              </p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>{language === 'en' ? 'Quick Links' : 'ፈጣን አገናኞች'}</h4>
                <button onClick={() => scrollToSection('services')}>{currentContent.services}</button>
                <button onClick={() => scrollToSection('about')}>{currentContent.about}</button>
                <button onClick={() => scrollToSection('legal-codes')}>{currentContent.legalCodes}</button>
                <button onClick={() => scrollToSection('contact')}>{currentContent.contact}</button>
              </div>
            </div>
            <div className="footer-newsletter">
              <h4><i className="fas fa-newspaper"></i> {currentContent.newsletter}</h4>
              <p>{currentContent.newsletterText}</p>
              <div className="newsletter-form">
                <input type="email" placeholder={language === 'en' ? 'Enter your email' : 'ኢሜልዎን ያስገቡ'} className="newsletter-input" />
                <button className="newsletter-btn">{language === 'en' ? 'Subscribe' : 'ይመዝገቡ'}</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} MERIDIAN LAW FIRM LLP. {language === 'en' ? 'All rights reserved.' : 'ሁሉም መብቶች የተጠበቁ ናቸው።'}</p>
            <div className="footer-social">
              {currentContent.socialLinks.map((social, index) => (
                <button key={index} className="footer-social-btn" onClick={() => handleSocialClick(social.url)} aria-label={social.platform}>
                  {renderSocialIcon(social.icon)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
