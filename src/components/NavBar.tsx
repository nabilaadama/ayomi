//masih tes
import React from 'react';
import {
    IonHeader,
    IonToolbar, 
    IonButtons, 
    IonTitle, 
    IonButton, 
    IonIcon 
} from '@ionic/react';
import { 
    personCircleOutline 
} from 'ionicons/icons';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar color="medium">
        <IonTitle className="navbar-title">Ayomi</IonTitle>
        <IonButtons slot="end">
          <IonButton>
            Events
          </IonButton>
          <IonButton>
            About Us
          </IonButton>
          <IonButton>
            <IonIcon icon={personCircleOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Navbar;
