import React from 'react';
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import styles from './Contact.module.css';

const Contact = ({ theme }) => {
  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <h2 className={styles.sectionTitle}>Contact Me</h2>
        
        <div className={styles.contactContainer}>
          {/* Contact Info Section */}
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <FiMail className={styles.contactIcon} />
                <div>
                  <h3>Email</h3>
                  <a 
                    className={styles.contactLink}
                  >
                    tabresh786shaikh@gmail.com
                  </a>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <FiMapPin className={styles.contactIcon} />
                <div>
                  <h3>Location</h3>
                  <p>Manjram, Nanded, Maharashtra</p>
                </div>
              </div>

              {/* Social Links */}
              <div className={styles.socialContainer}>
                <a 
                  href="https://github.com/tabresh04" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="GitHub"
                >
                  <FiGithub />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/shaikh-tabresh-3686a926b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            
            {/* Google Map Embed */}
            <div className={styles.mapContainer}>
              <iframe
                title="Manjram, Nanded Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.755881791793!2d77.27826267461673!3d18.591401768869967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1.1!3m3!1m2!1s0x3bccf93d685b6157%3A0x7b04192852a26a61!2sManjram%2C%20Maharashtra%20431305!5e0!3m2!1sen!2sin!4v1713783600000!5m2!1sen!2sin"
                className={styles.mapIframe}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Form */}
          <form 
            className={styles.contactForm}
            action="https://formsubmit.co/noothing4108@gmail.com"
            method="POST"
          >
            {/* FormSubmit Hidden Fields */}
            <input type="hidden" name="_captcha" value="false" /> 
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Portfolio Message!" />
            <input type="hidden" name="_autoresponse" value="Thanks for contacting me! I'll get back to you soon." />

            {/* Form Inputs */}
            <div className={styles.formGroup}>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                className={styles.formInput}
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                type="email" 
                name="email"  
                placeholder="Your Email" 
                className={styles.formInput}
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                className={styles.formInput}
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <textarea 
                name="message"  
                placeholder="Your Message" 
                rows="5" 
                className={styles.formTextarea}
                required 
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;