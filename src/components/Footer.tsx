import { IonText, IonButton } from '@ionic/react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-toolbar">
        <IonText className="footer-text">
          <p className="find-us">Find Us</p>
        </IonText>
        <div className="social-icons">
          <IonButton href="https://facebook.com" target="_blank" fill="clear">
            <img src="Facebook.png" alt="Facebook" className="social-icon" />
          </IonButton>
          <IonButton href="https://instagram.com" target="_blank" fill="clear">
            <img src="/Instagram.png" alt="Instagram" className="social-icon" />
          </IonButton>
          <IonButton href="https://wa.me/yournumber" target="_blank" fill="clear">
            <img src="/WhatsApp.png" alt="WhatsApp" className="social-icon" />
          </IonButton>
          <IonButton href="https://Twitter.com" target="_blank" fill="clear">
            <img src="/Twitter.png" alt="X" className="social-icon" />
          </IonButton>
          <IonButton href="https://youtube.com" target="_blank" fill="clear">
            <img src="/YouTube.png" alt="YouTube" className="social-icon" />
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default Footer;
