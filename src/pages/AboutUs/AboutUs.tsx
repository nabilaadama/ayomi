// src/pages/AboutUs.tsx

import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonCard,
  IonCardContent,
  IonIcon,
} from "@ionic/react";
import {
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoYoutube,
  logoWhatsapp,
  personCircleOutline,
} from "ionicons/icons";
import "./AboutUs.css";
import Footer from "../../components/Footer";

const AboutUs: React.FC = () => {
  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar style={{ "--background": "#344C3D" }}>
          <IonTitle className="navbar-title">Ayomi</IonTitle>
          <IonText slot="end" className="nav-links">
            Events
          </IonText>
          <IonText slot="end" className="nav-links">
            About Us
          </IonText>
          <IonIcon icon={personCircleOutline} slot="end" className="nav-icon" />
        </IonToolbar>
      </IonHeader>

      <IonContent
        className="about-content"
        style={{ "--background": "#f5f5f5" }}
      >
        {/* Banner Image */}
        <div className="banner">
          <IonText color="light" className="banner-title">
            About Us
          </IonText>
        </div>

        {/* SDG Section */}
        <IonGrid className="sdg-section">
          <IonRow className="ion-text-center">
            <IonCol>
              <h2>SDG’s dan Ayomi</h2>
              <img src="sdglogo.png" alt="SDG Logo" className="sdg-logo" />
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size="6" sizeMd="3">
              <img src="poin13.png" alt="SDG 13" className="sdg-icon" />
            </IonCol>
            <IonCol size="6" sizeMd="3">
              <img src="poin7.png" alt="SDG 7" className="sdg-icon" />
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* Visi & Misi Section */}
        <IonGrid>
          <IonRow className="vision-mission-section">
            <IonCol size="12" sizeMd="6">
              <IonCard className="vision-mission-card">
                <IonCardContent>
                  <h1>Visi</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Esse est doloribus porro eius mollitia a blanditiis ipsum
                    nostrum ducimus non quasi laboriosam molestias accusantium
                    obcaecati, hic culpa voluptate tempora quaerat!
                  </p>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="12" sizeMd="6">
              <IonCard className="vision-mission-card">
                <IonCardContent>
                  <h1>Misi</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime placeat ratione nisi soluta illo cum temporibus aut
                    cumque facilis atque laborum tempora, corrupti tenetur illum
                    architecto, odit eius blanditiis repudiandae.
                  </p>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default AboutUs;
