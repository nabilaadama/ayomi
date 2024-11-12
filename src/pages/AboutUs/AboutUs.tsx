import React from 'react';
import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonSearchbar, 
    IonButtons, 
    IonMenuButton 
} from '@ionic/react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Tentang Kami</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="about-us-content">
                 <IonSearchbar animated={true} placeholder="Animated"></IonSearchbar>
            </IonContent>
        </IonPage>
    );
};

export default AboutUs;