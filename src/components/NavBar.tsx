import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar className="navbar-background">
        <IonTitle slot="start" className="navbar-title">
          Ayom<i className="icon-style fa fa-trash"></i>
        </IonTitle>

        <IonButtons slot="end" className="navbar-end-buttons">
          <IonButton className="navbar-button">Events</IonButton>
          <IonButton className="navbar-button">About Us</IonButton>
          <IonButton className="navbar-button">
            <IonIcon icon={personCircleOutline} className="icon-style" />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default NavBar;
