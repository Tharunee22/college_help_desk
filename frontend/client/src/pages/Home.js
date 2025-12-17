// Home.js - Complete College Help Desk Homepage
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navBrand}>
          <h1 style={styles.brandTitle}>🏫 College Help Desk Portal</h1>
        </div>
        <div style={styles.navLinks}>
          <Link to="/student-login" style={styles.navLink}>Student</Link>
          <Link to="/admin-login" style={styles.navLink}>Admin</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>Welcome to College Help Desk</h2>
          <p style={styles.heroText}>
            One-stop solution for all your college-related issues and queries. 
            Efficient issue resolution system for students and administration.
          </p>
          <div style={styles.heroButtons}>
            <Link to="/student-login">
              <button style={styles.btnPrimary}>Student Login</button>
            </Link>
            <Link to="/admin-login">
              <button style={styles.btnSecondary}>Admin Login</button>
            </Link>
          </div>
        </div>
        <div style={styles.heroImage}>
          <div style={styles.imagePlaceholder}>
            <h3>College Help Desk System</h3>
            <p>Manage all college issues efficiently</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🎓</div>
            <h3 style={styles.featureTitle}>Academic Issues</h3>
            <p style={styles.featureText}>Report problems related to academics, courses, and exams</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🏠</div>
            <h3 style={styles.featureTitle}>Hostel Problems</h3>
            <p style={styles.featureText}>Raise concerns about hostel facilities and maintenance</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🚌</div>
            <h3 style={styles.featureTitle}>Transport Services</h3>
            <p style={styles.featureText}>Report transportation issues and bus service problems</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>💰</div>
            <h3 style={styles.featureTitle}>Fee & Finance</h3>
            <p style={styles.featureText}>Queries regarding fees, scholarships, and financial aid</p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div style={styles.worksSection}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <div style={styles.stepsContainer}>
          <div style={styles.step}>
            <div style={styles.stepNumber}>1</div>
            <h4 style={styles.stepTitle}>Student Registration/Login</h4>
            <p style={styles.stepText}>Students register or login to their account</p>
          </div>
          <div style={styles.step}>
            <div style={styles.stepNumber}>2</div>
            <h4 style={styles.stepTitle}>Raise an Issue</h4>
            <p style={styles.stepText}>Submit your problem with category and description</p>
          </div>
          <div style={styles.step}>
            <div style={styles.stepNumber}>3</div>
            <h4 style={styles.stepTitle}>Admin Reviews</h4>
            <p style={styles.stepText}>College management reviews and assigns priority</p>
          </div>
          <div style={styles.step}>
            <div style={styles.stepNumber}>4</div>
            <h4 style={styles.stepTitle}>Issue Resolution</h4>
            <p style={styles.stepText}>Get notified when your issue is resolved</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>College Help Desk</h3>
            <p style={styles.footerText}>Efficient issue resolution system for educational institutions</p>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerSubtitle}>Quick Links</h4>
            <Link to="/student-login" style={styles.footerLink}>Student Portal</Link>
            <Link to="/admin-login" style={styles.footerLink}>Admin Portal</Link>
            <Link to="/student-register" style={styles.footerLink}>Register</Link>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerSubtitle}>Contact</h4>
            <p style={styles.footerText}>Email: helpdesk@college.edu</p>
            <p style={styles.footerText}>Phone: +91 9876543210</p>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p style={styles.copyright}>© 2024 College Help Desk Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  
  // Navbar Styles
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 5%',
    background: 'white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  navBrand: {
    flex: 1,
  },
  brandTitle: {
    color: '#2c3e50',
    fontSize: '1.8rem',
    margin: 0,
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    textDecoration: 'none',
    color: '#3498db',
    fontWeight: 600,
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    transition: 'all 0.3s',
  },
  
  // Hero Section Styles
  heroSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '4rem 5%',
    maxWidth: '1400px',
    margin: '0 auto',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  heroContent: {
    flex: 1,
    paddingRight: '3rem',
  },
  heroTitle: {
    fontSize: '3rem',
    color: '#2c3e50',
    marginBottom: '1rem',
    lineHeight: 1.2,
  },
  heroText: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
    marginBottom: '2rem',
    lineHeight: 1.6,
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem',
  },
  btnPrimary: {
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    background: 'linear-gradient(135deg, #3498db, #2980b9)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.3s',
    textDecoration: 'none',
    display: 'inline-block',
  },
  btnSecondary: {
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    background: 'white',
    color: '#3498db',
    border: '2px solid #3498db',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.3s',
    textDecoration: 'none',
    display: 'inline-block',
  },
  heroImage: {
    flex: 1,
  },
  imagePlaceholder: {
    width: '100%',
    maxWidth: '600px',
    height: '300px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  },
  
  // Features Section Styles
  featuresSection: {
    padding: '5rem 5%',
    background: 'white',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '3rem',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  featureCard: {
    background: '#f8f9fa',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    transition: 'all 0.3s',
    border: '2px solid transparent',
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  featureTitle: {
    color: '#2c3e50',
    marginBottom: '1rem',
    fontSize: '1.3rem',
  },
  featureText: {
    color: '#7f8c8d',
    lineHeight: 1.6,
  },
  
  // How It Works Styles
  worksSection: {
    padding: '5rem 5%',
    background: '#f8f9fa',
  },
  stepsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  step: {
    textAlign: 'center',
    padding: '2rem',
  },
  stepNumber: {
    width: '50px',
    height: '50px',
    background: '#3498db',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0 auto 1rem',
  },
  stepTitle: {
    color: '#2c3e50',
    marginBottom: '1rem',
  },
  stepText: {
    color: '#7f8c8d',
    lineHeight: 1.6,
  },
  
  // Footer Styles
  footer: {
    background: '#2c3e50',
    color: 'white',
    padding: '3rem 5% 1rem',
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto 2rem',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  footerTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  footerSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
  footerText: {
    color: '#bdc3c7',
    lineHeight: 1.6,
  },
  footerLink: {
    color: '#bdc3c7',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  footerBottom: {
    borderTop: '1px solid #34495e',
    paddingTop: '2rem',
    textAlign: 'center',
  },
  copyright: {
    color: '#bdc3c7',
    fontSize: '0.9rem',
  },
};

// Add hover effects
Object.assign(styles.navLink, {
  ':hover': {
    background: '#3498db',
    color: 'white',
  },
});

Object.assign(styles.btnPrimary, {
  ':hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 20px rgba(52, 152, 219, 0.3)',
  },
});

Object.assign(styles.btnSecondary, {
  ':hover': {
    background: '#3498db',
    color: 'white',
    transform: 'translateY(-3px)',
  },
});

Object.assign(styles.featureCard, {
  ':hover': {
    transform: 'translateY(-10px)',
    borderColor: '#3498db',
    boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
  },
});

Object.assign(styles.footerLink, {
  ':hover': {
    color: 'white',
  },
});

// Add media queries
styles.heroSection['@media (max-width: 768px)'] = {
  flexDirection: 'column',
  textAlign: 'center',
};

styles.heroContent['@media (max-width: 768px)'] = {
  paddingRight: 0,
  marginBottom: '2rem',
};

styles.heroTitle['@media (max-width: 768px)'] = {
  fontSize: '2.5rem',
};

styles.heroButtons['@media (max-width: 768px)'] = {
  justifyContent: 'center',
};