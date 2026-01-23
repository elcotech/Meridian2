import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Content for both languages
  const content = {
    en: {
      name: 'MERIDIAN LAW FIRM LLP',
      title: 'AUTHORIZED LEGAL SERVICES',
      location: 'Addis Ababa, Ethiopia',
      phone: '+251-900-802400 / +251-911-425414',
      email: 'meridianlawinfo@gmail.com',
      website: 'https://meridianlawfirmllp.com.et',
      
      welcome: 'Strategically positioned within international legal and professional networks',
      description: 'A Full-Service Ethiopian Law Firm providing comprehensive legal services across all areas of Ethiopian law for domestic and international clients.',
      
      about: 'About Our Firm',
      aboutText: `🏛️ MERIDIAN LAW FIRM LLP - ሜሪዲያን የጥብቅና አገልግሎት ኃ/የተ/የሽ/ማህበር

A Full-Service Ethiopian Law Firm
Strategically positioned within international legal and professional networks, we provide comprehensive legal services across all areas of Ethiopian law for domestic and international clients, including foreign investors.

Through strategic legal advocacy and informed consultation, we position our clients at the forefront of their fields.`,

      services: 'Our Legal Services',
      servicesList: [
        ['📋 Legal Advisory Services', 'Expert legal guidance to help your business navigate complex matters and make informed decisions.'],
        ['💼 Commercial Law', 'Guiding businesses from start-up to multinational, including entity formation, M&A, corporate governance, and all commercial matters.'],
        ['⚔️ Litigation & Defense', 'Handling complex civil and criminal litigation with the rigor required for federal-level disputes.'],
        ['💰 Tax Law & Financial Strategy', 'Conducting high-level reviews of tax obligations, advising on incentives, and representing clients before tax authorities.'],
        ['🛡️ Insurance & Liability Advisory', 'Providing counsel on liability, coverage disputes, regulatory compliance, and risk management in all areas of law.'],
        ['🌍 Comprehensive Legal Services', 'Expert representation in civil, criminal, labour, commercial, and all areas of Ethiopian law for domestic and international clients.']
      ],

      partners: 'Our Legal Partners',
      partnersList: [
        {
          name: 'MESFIN MARE WELDEGIORGIS',
          title: 'MANAGING PARTNER',
          description: 'Professional Summary: The Managing Partner is a highly respected legal professional with over thirty (30) years of extensive experience acquired through distinguished service in governmental and public institutions and in private legal practice. He has held various senior positions within the justice and public administration sectors and has represented clients before courts, tribunals, and administrative bodies at all levels.',
          fullText: `He possesses comprehensive expertise in constitutional law, international law, criminal law, civil law, commercial law, contract and extra-contractual obligations, labor law, and administrative law, tax law and has handled complex litigation, advisory, and regulatory matters involving public institutions, multinational and domestic corporate entities, and private clients. His practice includes cross-border legal advisory, public international law matters, and cases involving international legal principles applicable under Ethiopian law.

As Managing Partner, he provides strategic leadership and professional oversight to the Firm, ensuring the delivery of high-quality legal services grounded in professional integrity, sound legal judgment, and a deep understanding of Ethiopian and international legal frameworks. His extensive experience enables him to offer authoritative, practical, and solution-oriented legal counsel across a wide range of legal disciplines.`
        },
        {
          name: 'HABTAMU BISRAT KEBEDE',
          title: 'DEPUTY MANAGING PARTNER',
          description: 'Professional Summary: The Deputy Managing Partner is an experienced legal professional with more than twenty (20) years of service in governmental and public institutions as well as in private legal practice.',
          fullText: `He has served in various professional and advisory capacities within public institutions and has extensive experience representing clients before courts and administrative bodies at different levels.

He has broad and in-depth expertise in constitutional law, criminal law, civil law, commercial law, contract and extra-contractual obligations, labor law, and administrative law, tax law and has handled a wide range of litigation, advisory, and regulatory matters involving public institutions, governmental bodies, corporate entities, and private clients.

In his role as Deputy Managing Partner, he supports the strategic and operational leadership of the Firm, contributes to the supervision of legal services, and ensures the delivery of professional, effective, and ethically grounded legal representation. His combined experience in public service and private practice enables him to provide practical, well-reasoned, and solution-oriented legal counsel across all major areas of law.`
        },
        {
          name: 'TALEMA GIZACHEW BIZUNEH',
          title: 'PARTNER',
          description: 'Professional Summary: The Partner is a senior legal professional with twenty-five (25) years of combined service in governmental institutions and as a practicing lawyer.',
          fullText: `He has served in various professional, advisory, and decision-support roles within public institutions and has practiced law extensively, representing clients before courts, tribunals, and administrative bodies at all levels.

He possesses comprehensive expertise in constitutional law, criminal law, civil law, commercial law, contract and extra-contractual obligations, labor law, and administrative law, tax law and has handled a broad range of litigation, advisory, and regulatory matters involving governmental bodies, public institutions, corporate entities, private clients, and foreign nationals.

He has substantial experience in representing foreign nationals, including matters relating to investment, immigration, commercial disputes, labor relations, and cases involving cross-border legal elements and the application of international legal principles within the Ethiopian legal system.

As a Partner of the Firm, he contributes to the delivery of high-quality legal services through sound legal analysis, professional integrity, and practical problem-solving, drawing on his extensive experience in public service and private legal practice.`
        },
        {
          name: 'AKLILU ABEBAW BELAY',
          title: 'PARTNER',
          description: 'Professional Summary: The Partner is a senior legal professional with more than twenty-two (22) years of extensive service in various governmental institutions, public corporations, and private legal practice.',
          fullText: `He has served in diverse professional and advisory capacities within public institutions and corporate entities, and has represented clients before courts, tribunals, and administrative bodies at all levels.

He possesses comprehensive expertise in constitutional law, criminal law, civil law, commercial law, contract and extra-contractual obligations, labor law, administrative law, tax law, and environmental law, and has handled complex litigation and advisory matters involving governmental bodies, public institutions, corporations, and private clients. His professional experience further includes the drafting and negotiation of complex commercial contracts and Memoranda of Understanding, particularly for institutional, infrastructure, and large-scale commercial projects.

The Partner has intensive experience in representing foreign companies and foreign nationals, including matters related to investment, corporate establishment, taxation, labor relations, environmental compliance, regulatory approvals, and commercial disputes, as well as cases involving cross-border legal elements and the application of international legal principles under Ethiopian law.

As a Partner of the Firm, he contributes to the provision of high-quality legal services through sound legal analysis, professional integrity, and practical, solution-oriented legal counsel, drawing upon his extensive experience in public institutions, corporate environments, and legal practice.`
        }
      ],

      expertise: 'Specialized Service Sectors',
      expertiseList: [
        '⚖️ Judicial Insight & Oversight – Applying impartial legal analysis to every case',
        '🌐 Strategic Networks & Policy – Bridging the gap between legislation and commercial objectives',
        '⚔️ Litigation & Defense – Federal-level civil and criminal litigation',
        '📊 Commercial Law – Entity formation, M&A, corporate governance',
        '💰 Tax Law & Financial Strategy – Tax obligations and incentives',
        '🛡️ Insurance & Liability Advisory – Risk management and compliance',
        '🌍 Foreign Investment – Investment, immigration, and cross-border legal matters'
      ],

      laws: 'Ethiopian Legal Codes',
      lawsList: [
        ['📚 Civil Code Proclamation No. 165/1960', 'The comprehensive code governing civil matters, contracts, property, and obligations.'],
        ['⚖️ Criminal Code Proclamation No. 414/2004', 'Defines crimes, penalties, and criminal procedures in Ethiopia.'],
        ['💼 Commercial Code Proclamation No. 1243/2021', 'Regulates commercial activities, companies, and business organizations.'],
        ['👥 Labour Proclamation No. 1156/2019', 'Governs employment relationships and labor rights.'],
        ['🏦 Banking Business Proclamation No. 592/2008', 'Regulates banking and financial institutions.'],
        ['🌿 Environmental Protection Org. Proclamation No. 295/2002', 'Framework for environmental protection and management.']
      ],

      articles: 'Legal Articles & Insights',
      articlesList: [
        ['📈 Navigating Ethiopian Investment Laws in 2024', 'Key insights for foreign investors entering the Ethiopian market.'],
        ['⚖️ Recent Changes in Commercial Dispute Resolution', 'Analysis of new procedural rules affecting commercial litigation.'],
        ['💼 Corporate Governance Best Practices', 'Essential guidelines for companies operating in Ethiopia.'],
        ['🌍 Cross-Border Legal Considerations', 'Important factors for international businesses in Ethiopia.'],
        ['💰 Tax Incentives for Strategic Investments', 'Understanding Ethiopia\'s tax benefits for investors.'],
        ['🛡️ Risk Management in Commercial Contracts', 'Drafting effective contracts to mitigate legal risks.']
      ],

      newsletter: 'Join Our Legal Digest',
      newsletterText: 'Receive expert legal insights, regulatory updates, and firm announcements directly in your inbox.',
      
      contact: 'Contact Us',
      officeHours: 'Office Hours',
      hours: [
        'Monday - Friday: 8:30 AM - 5:30 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Emergency consultations available'
      ],
      
      socialMedia: 'Connect With Us',
      socialLinks: [
        { platform: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/meridian-law-firm', color: '#0077B5' },
        { platform: 'Facebook', icon: '📘', url: 'https://facebook.com/meridianlawfirm', color: '#1877F2' },
        { platform: 'Telegram', icon: '✈️', url: 'https://t.me/meridianlawfirm', color: '#0088CC' },
        { platform: 'Twitter', icon: '🐦', url: 'https://twitter.com/meridianlaw', color: '#1DA1F2' },
        { platform: 'YouTube', icon: '▶️', url: 'https://youtube.com/c/meridianlawfirm', color: '#FF0000' }
      ]
    },
    
    am: {
      name: 'ሜሪዲያን የሕግ ቢሮ',
      title: 'ብቁ የሆነ የሕግ አገልግሎት',
      location: 'አዲስ አበባ፣ ኢትዮጵያ',
      phone: '+251-900-802400 / +251-911-425414',
      email: 'meridianlawinfo@gmail.com',
      website: 'https://meridianlawfirmllp.com.et',
      
      welcome: 'በዓለም አቀፍ የሕግ እና ሙያዊ አውታረ መረቦች ውስጥ በስትራቴጂክ ሁኔታ የተቀመጠ',
      description: 'ሙሉ የሕግ አገልግሎት የሚሰጥ ኢትዮጵያዊ የሕግ ቢሮ ለአገር ውስጥ እና ለዓለም አቀፍ ደንበኞች በኢትዮጵያ ሕግ በሁሉም መስኮች ላይ የሚያሟላ የሕግ አገልግሎቶችን ይሰጣል።',
      
      about: 'ስለ ቢሮችን',
      aboutText: `🏛️ ሜሪዲያን የሕግ ቢሮ - የጥብቅና አገልግሎት

ሙሉ የሕግ አገልግሎት የሚሰጥ ኢትዮጵያዊ የሕግ ቢሮ
በዓለም አቀፍ የሕግ እና ሙያዊ አውታረ መረቦች ውስጥ በስትራቴጂክ ሁኔታ የተቀመጥን ለአገር ውስጥ እና ለዓለም አቀፍ ደንበኞች፣ የውጭ ባለሃብቶችን ጨምሮ፣ በኢትዮጵያ ሕግ በሁሉም መስኮች ላይ የሚያሟላ የሕግ አገልግሎቶችን እናቀርባለን።

በስትራቴጂክ የሕግ አማራጭ እና በተማረ ምክር አማካኝነት ደንበኞቻችን በራሳቸው መስኮች መሪዎች እንዲሆኑ እናግዛለን።`,

      services: 'የሕግ አገልግሎቶቻችን',
      servicesList: [
        ['📋 የሕግ ምክር አገልግሎቶች', 'የባለሙያ የሕግ መመሪያ የንግድዎን ውስብስብ ጉዳዮች ለማስተናገድ እና በተመሠረተ ውሳኔ ለማድረግ ይረዳዎታል።'],
        ['💼 ንግድ ሕግ', 'ከመጀመሪያ እስከ ባለብዙ ብሔራዊ ድርጅት ድረስ የሚያስገቡ ንግዶች፣ የኩባንያ መስርት፣ የግዥ እና የትስስር፣ የኩባንያ አስተዳደር እና ሁሉም የንግድ ጉዳዮች።'],
        ['⚔️ የፍርድ እና መከላከያ አገልግሎት', 'በፌደራል ደረጃ የሚፈጸሙ የሲቪል እና የወንጀል ፍርድ ጉዳዮችን በጥብቅ መቅዳት።'],
        ['💰 የታክስ ሕግ እና የፋይናንስ ስትራቴጂ', 'የታክስ ግዴታዎችን ከፍተኛ ደረጃ ላይ መርምር፣ ስለ ማበረታቻዎች ማማከር እና ታክስ ባለሥልጣናት ፊት ደንበኞችን መወከል።'],
        ['🛡️ የኢንሹራንስ እና ኃላፊነት ምክር', 'በሕግ ሁሉም መስኮች ላይ ስለ ኃላፊነት፣ የክልል አለመስማማት፣ የሕግ ተገዢነት እና አደጋ አስተዳደር ምክር መስጠት።'],
        ['🌍 የሚያሟላ የሕግ አገልግሎት', 'ለአገር ውስጥ እና ለዓለም አቀፍ ደንበኞች በሲቪል፣ ወንጀል፣ የጉልበት፣ የንግድ እና በኢትዮጵያ ሕግ ሁሉም መስኮች የባለሙያ ወክል።']
      ],

      partners: 'የሕግ አጋሮቻችን',
      partnersList: [
        {
          name: 'መስፍን ማሬ ወልደጊዮርጊስ',
          title: 'የሚናገር አጋር',
          description: 'ሙያዊ ማጠቃለያ: የሚናገር አጋሩ ከሠላሳ (30) ዓመት በላይ ልዩ የሆነ ልምድ ያለው በርካታ የሕግ ሙያ ባለሙያ ነው።',
          fullText: `በመንግሥታዊ እና በየግል የሕግ ተግባር ውስጥ ልዩ አገልግሎት በመስጠት በርካታ የሕግ ሙያ ልምድ አለው። በፍትሕ እና በህዝብ አስተዳደር ዘርፎች ውስጥ የተለያዩ ከፍተኛ የሥልጣን መያዣዎችን አስጠውቋል።`
        }
        // Add other Amharic translations similarly
      ],

      expertise: 'ልዩ የአገልግሎት ዘርፎች',
      expertiseList: [
        '⚖️ የፍርድ ግንዛቤ እና ቁጥጥር - ለእያንዳንዱ ጉዳይ ግምገማ የሚሰጥ',
        '🌐 ስትራቴጂክ አውታረመረቦች እና ፖሊሲ - በሕግ እና በንግድ ግቦች መካከል ያለውን ክፍተት መሙላት',
        '⚔️ የፍርድ እና መከላከያ - በፌደራል ደረጃ የሚፈጸሙ የሲቪል እና የወንጀል ፍርድ ጉዳዮች',
        '📊 ንግድ ሕግ - የኩባንያ መስርት፣ የግዥ እና የትስስር፣ የኩባንያ አስተዳደር',
        '💰 የታክስ ሕግ እና የፋይናንስ ስትራቴጂ - የታክስ ግዴታዎች እና ማበረታቻዎች',
        '🛡️ የኢንሹራንስ እና ኃላፊነት ምክር - የአደጋ አስተዳደር እና የሕግ ተገዢነት',
        '🌍 የውጭ ኢንቨስትመንት - ኢንቨስትመንት፣ ምሰሶ እና የስደት ጉዳዮች'
      ],

      laws: 'የኢትዮጵያ ሕጎች',
      lawsList: [
        ['📚 ሲቪል ኮድ አዋጅ ቁጥር 165/1960', 'ሲቪል ጉዳዮች፣ ኮንትራት፣ ንብረት እና ግዴታዎችን የሚያስተዳድር የተሟላ ኮድ።'],
        ['⚖️ የወንጀል ኮድ አዋጅ ቁጥር 414/2004', 'በኢትዮጵያ ውስጥ ወንጀሎች፣ ቅጣቶች እና የወንጀል ሂደቶችን ይገልፃል።']
      ],

      articles: 'የሕግ ጽሁፎች እና ግንዛቤዎች',
      articlesList: [
        ['📈 በ2024 የኢትዮጵያ ኢንቨስትመንት ሕጎችን መርሳሳት', 'ወደ ኢትዮጵያ ገበያ ለሚገቡ የውጭ ባለሃብቶች ዋና ግንዛቤዎች።'],
        ['⚖️ በንግድ ክርክር መፍትሄ ውስጥ ያሉ የቅርብ ጊዜ ለውጦች', 'የንግድ ፍርድ ላይ ተጽዕኖ የሚያሳድሩ የአዲስ ሂደት ሕጎች ትንተና።']
      ],

      newsletter: 'የሕግ ዲጄስታችንን ይቀላቀሉ',
      newsletterText: 'የባለሙያ የሕግ ግንዛቤዎችን፣ የሕግ ማዘመኛዎችን እና የቢሮ ማስታወቂያዎችን በቀጥታ በኢሜልዎ ይቀበሉ።',
      
      contact: 'አግኙን',
      officeHours: 'የስራ ሰዓቶች',
      hours: [
        'ሰኞ - አርብ: 8:30 ጥዋት - 5:30 ከሰዓት',
        'ቅዳሜ: 9:00 ጥዋት - 1:00 ከሰዓት',
        'ለአደጋ ጊዜ ምክር ይገኛል'
      ],
      
      socialMedia: 'ከእኛ ጋር ይገናኙ',
      socialLinks: [
        { platform: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/meridian-law-firm', color: '#0077B5' },
        { platform: 'Facebook', icon: '📘', url: 'https://facebook.com/meridianlawfirm', color: '#1877F2' },
        { platform: 'Telegram', icon: '✈️', url: 'https://t.me/meridianlawfirm', color: '#0088CC' },
        { platform: 'Twitter', icon: '🐦', url: 'https://twitter.com/meridianlaw', color: '#1DA1F2' },
        { platform: 'YouTube', icon: '▶️', url: 'https://youtube.com/c/meridianlawfirm', color: '#FF0000' }
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

  return (
    <div className="App">
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
            <span className="social-icon">{social.icon}</span>
            <span className="social-tooltip">{social.platform}</span>
          </button>
        ))}
      </div>

      {/* Language Switcher */}
      <div className="language-switcher">
        <button
          className={`lang-btn ${language === 'en' ? 'active' : ''}`}
          onClick={() => setLanguage('en')}
        >
          🇬🇧 EN
        </button>
        <button
          className={`lang-btn ${language === 'am' ? 'active' : ''}`}
          onClick={() => setLanguage('am')}
        >
          🇪🇹 AM
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Navigation */}
      <nav className={`nav-main ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-brand">
          <h1 className="logo">{currentContent.name}</h1>
          <div className="nav-subtitle">{currentContent.title}</div>
        </div>
        
        <ul className="nav-links">
          <li>
            <button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>
              🏠 {language === 'en' ? 'Home' : 'መግቢያ'}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>
              🏛️ {currentContent.about}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('services')} className={activeSection === 'services' ? 'active' : ''}>
              ⚖️ {currentContent.services}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('partners')} className={activeSection === 'partners' ? 'active' : ''}>
              👥 {currentContent.partners}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('expertise')} className={activeSection === 'expertise' ? 'active' : ''}>
              🎯 {currentContent.expertise}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('laws')} className={activeSection === 'laws' ? 'active' : ''}>
              📚 {currentContent.laws}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('articles')} className={activeSection === 'articles' ? 'active' : ''}>
              📈 {currentContent.articles}
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>
              📞 {currentContent.contact}
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-background">
            <div className="bg-grid"></div>
            <div className="bg-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
          
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">
                <span>⚖️ {language === 'en' ? 'ESTABLISHED 1994' : 'ከ1994 ጀምሮ'}</span>
              </div>
              
              <h1 className="hero-title">
                <span className="title-line title-line-1">{currentContent.name}</span>
                <span className="title-line title-line-2">{currentContent.title}</span>
              </h1>
              
              <p className="hero-subtitle">{currentContent.welcome}</p>
              <p className="hero-description">{currentContent.description}</p>
              
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">{language === 'en' ? 'Years Experience' : 'ዓመታት ልምድ'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">{language === 'en' ? 'Cases Won' : 'ተሸንፎ የቀረ ጉዳዮች'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">{language === 'en' ? 'Countries Served' : 'አገሮች ተገልግለዋል'}</span>
                </div>
              </div>
              
              <div className="hero-buttons">
                <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
                  📞 {language === 'en' ? 'Schedule Consultation' : 'ምክር ያስይዙ'}
                </button>
                <button onClick={() => scrollToSection('services')} className="btn btn-secondary">
                  ⚖️ {language === 'en' ? 'View Services' : 'አገልግሎቶችን ይመልከቱ'}
                </button>
              </div>
            </div>
          </div>
          
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <span>{language === 'en' ? 'Scroll to explore' : 'ለማየት ይሸብልሉ'}</span>
          </div>
        </section>

        {/* About Section */}
        <section className="section about-section" id="about">
          <div className="container">
            <div className="section-header">
              <div className="section-icon">🏛️</div>
              <h2>{currentContent.about}</h2>
              <div className="section-subtitle">
                {language === 'en' ? 'Three Decades of Legal Excellence' : 'ሦስት አስርት ዓመታት የሕግ ልዩነት'}
              </div>
            </div>
            
            <div className="about-content">
              <div className="about-text">
                <p>{currentContent.aboutText}</p>
                <div className="excellence-badges">
                  <div className="badge">🏆 {language === 'en' ? 'Award Winning' : 'የሽልማት ተሸላሚ'}</div>
                  <div className="badge">⭐ {language === 'en' ? 'Top Rated' : 'ከፍተኛ ደረጃ'}</div>
                  <div className="badge">🤝 {language === 'en' ? 'Client Focused' : 'በደንበኛ ላይ ያተኮረ'}</div>
                </div>
              </div>
              
              <div className="about-visual">
                <div className="visual-card">
                  <div className="visual-icon">⚖️</div>
                  <h3>{language === 'en' ? 'Our Mission' : 'ተልዕኮችን'}</h3>
                  <p>
                    {language === 'en' 
                      ? 'To deliver exceptional legal services with integrity, expertise, and unwavering commitment to our clients\' success.' 
                      : 'በንጹህ ልቦለድ፣ በሙያ እና በደንበኞቻችን ስኬት ላይ በማይናወጥ ቁርጠኝነት ልዩ የሕግ አገልግሎቶችን ማቅረብ።'}
                  </p>
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
                    <div className="service-hover">
                      <span>{language === 'en' ? 'Learn More →' : 'ተጨማሪ እወቅ →'}</span>
                    </div>
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
                      {partner.title === 'PARTNER' && partner.name.includes('TALEMA') ? '25+' : 
                       partner.name.includes('MESFIN') ? '30+' : 
                       partner.name.includes('HABTAMU') ? '20+' : '22+'} 
                      {language === 'en' ? ' Years' : ' ዓመታት'}
                    </span>
                    <span className="exp-text">{language === 'en' ? 'Experience' : 'ልምድ'}</span>
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
                {language === 'en' ? 'Our Core Competencies' : 'ዋና አቅምችን'}
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
                <div className="stat-number">98%</div>
                <div className="stat-label">{language === 'en' ? 'Success Rate' : 'የስኬት መጠን'}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">{language === 'en' ? 'Client Support' : 'የደንበኛ ድጋፍ'}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-label">{language === 'en' ? 'Expert Network' : 'የባለሙያ አውታረመረብ'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Laws Section */}
        <section className="section laws-section" id="laws">
          <div className="container">
            <div className="section-header">
              <div className="section-icon">📚</div>
              <h2>{currentContent.laws}</h2>
              <div className="section-subtitle">
                {language === 'en' ? 'Ethiopian Legal Framework' : 'የኢትዮጵያ ሕግ መዋቅር'}
              </div>
            </div>
            
            <div className="laws-grid">
              {currentContent.lawsList.map(([title, description], index) => (
                <div className="law-card" key={index} style={{ '--delay': index * 0.1 + 's' }}>
                  <div className="law-icon">{title.split(' ')[0]}</div>
                  <h3>{title.slice(2)}</h3>
                  <p>{description}</p>
                  <button className="law-button">
                    📖 {language === 'en' ? 'Read More' : 'ተጨማሪ ያንብቡ'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="section articles-section" id="articles">
          <div className="container">
            <div className="section-header">
              <div className="section-icon">📈</div>
              <h2>{currentContent.articles}</h2>
              <div className="section-subtitle">
                {language === 'en' ? 'Latest Legal Updates' : 'የቅርብ ጊዜ የሕግ ዝመናዎች'}
              </div>
            </div>
            
            <div className="articles-grid">
              {currentContent.articlesList.map(([title, description], index) => (
                <div className="article-card" key={index} style={{ '--delay': index * 0.1 + 's' }}>
                  <div className="article-date">
                    {language === 'en' ? 'Jan 2024' : 'ጃን 2024'}
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <button className="article-button">
                    📰 {language === 'en' ? 'Read Article' : 'ጽሁፉን ያንብቡ'}
                  </button>
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
                {language === 'en' ? 'Get Your Legal Consultation' : 'የሕግ ምክርዎን ያግኙ'}
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
                    <span className="contact-icon">📞</span>
                    <div>
                      <strong>{language === 'en' ? 'Phone' : 'ስልክ'}</strong>
                      <a href={`tel:${currentContent.phone}`}>{currentContent.phone}</a>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <div>
                      <strong>Email</strong>
                      <a href={`mailto:${currentContent.email}`}>{currentContent.email}</a>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <span className="contact-icon">🌐</span>
                    <div>
                      <strong>{language === 'en' ? 'Website' : 'ድህረገፅ'}</strong>
                      <a href={currentContent.website} target="_blank" rel="noopener noreferrer">
                        {currentContent.website}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="office-hours">
                  <h4>🕒 {currentContent.officeHours}</h4>
                  {currentContent.hours.map((hour, index) => (
                    <p key={index}>{hour}</p>
                  ))}
                </div>
                
                <div className="social-section">
                  <h4>{currentContent.socialMedia}</h4>
                  <div className="social-buttons">
                    {currentContent.socialLinks.map((social, index) => (
                      <button
                        key={index}
                        className="social-btn"
                        onClick={() => handleSocialClick(social.url)}
                        style={{ '--social-color': social.color }}
                        aria-label={social.platform}
                      >
                        {social.icon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="contact-form-wrapper">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder={language === 'en' ? 'Full Name' : 'ሙሉ ስም'} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder={language === 'en' ? 'Email Address' : 'ኢሜል አድራሻ'} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <select name="service" required>
                      <option value="">
                        {language === 'en' ? 'Select Legal Service Needed' : 'የሚያስፈልገውን የሕግ አገልግሎት ይምረጡ'}
                      </option>
                      <option value="advisory">
                        {language === 'en' ? 'Legal Advisory Services' : 'የሕግ ምክር አገልግሎቶች'}
                      </option>
                      <option value="commercial">
                        {language === 'en' ? 'Commercial Law' : 'ንግድ ሕግ'}
                      </option>
                      <option value="litigation">
                        {language === 'en' ? 'Litigation & Defense' : 'ፍርድ እና መከላከያ'}
                      </option>
                      <option value="tax">
                        {language === 'en' ? 'Tax Law & Financial Strategy' : 'የታክስ ሕግ እና የፋይናንስ ስትራቴጂ'}
                      </option>
                      <option value="foreign">
                        {language === 'en' ? 'Foreign Investment' : 'የውጭ ኢንቨስትመንት'}
                      </option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder={language === 'en' 
                        ? 'Describe your legal matter or inquiry...' 
                        : 'የሕግ ጉዳይዎን ወይም ጥያቄዎን ይግለጹ...'}
                      required
                      rows="6"
                    ></textarea>
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className="submit-btn">
                    {isSubmitting 
                      ? (language === 'en' ? 'Sending...' : 'በመላክ ላይ...')
                      : (language === 'en' ? 'Send Legal Inquiry' : 'የሕግ ጥያቄ ይላኩ')}
                    {!isSubmitting && <span className="btn-icon">⚡</span>}
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
                {language === 'en' 
                  ? 'Excellence in Legal Representation' 
                  : 'በሕግ ወክልነት ውስጥ ልዩነት'}
              </p>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4>{language === 'en' ? 'Quick Links' : 'ፈጣን አገናኞች'}</h4>
                <button onClick={() => scrollToSection('services')}>{currentContent.services}</button>
                <button onClick={() => scrollToSection('articles')}>{currentContent.articles}</button>
                <button onClick={() => scrollToSection('contact')}>{currentContent.contact}</button>
              </div>
              
              <div className="link-group">
                <h4>{language === 'en' ? 'Resources' : 'ሀብቶች'}</h4>
                <button onClick={() => scrollToSection('laws')}>{currentContent.laws}</button>
                <button onClick={() => scrollToSection('expertise')}>{currentContent.expertise}</button>
                <button onClick={() => scrollToSection('partners')}>{currentContent.partners}</button>
              </div>
            </div>
            
            <div className="footer-newsletter">
              <h4>📬 {currentContent.newsletter}</h4>
              <p>{currentContent.newsletterText}</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder={language === 'en' ? 'Enter your email' : 'ኢሜልዎን ያስገቡ'} 
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  {language === 'en' ? 'Subscribe' : 'ይመዝገቡ'}
                </button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} MERIDIAN LAW FIRM LLP. {language === 'en' ? 'All rights reserved.' : 'ሁሉም መብቶች የተጠበቁ ናቸው።'}</p>
            <div className="footer-social">
              {currentContent.socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="footer-social-btn"
                  onClick={() => handleSocialClick(social.url)}
                  aria-label={social.platform}
                >
                  {social.icon}
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