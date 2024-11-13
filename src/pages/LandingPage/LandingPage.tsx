/*jdnj*/
import React from 'react';
import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonSearchbar,
    IonInput,
    IonApp,
} from '@ionic/react';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    return (
      <IonApp>
        <IonContent fullscreen className="ion-padding">
          <div className="hero">
            <div className="overlay">
              <h1 className="title">Ayomī</h1>
              <p className="subtitle">
                Bersama membangun komunitas peduli lingkungan melalui edukasi, kegiatan volunteer, dan donasi sampah. Gabung untuk masa depan yang lebih bersih!
              </p>
              <div className="search-bar">
                <IonSearchbar animated={true} placeholder="Cari disini"></IonSearchbar>
              </div>
            </div>
          </div>
        </IonContent>
      </IonApp>
    );
  };

export default LandingPage;