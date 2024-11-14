import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import "./Events.css";
import Footer from "../../components/Footer";

const Events: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Event</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow className="ion-text-center">
            <IonCol>
              <h1>Kegiatan Komunitas Ayomi</h1>
              {/* Craft Item 1 */}
              <div className="craft-container">
                <img
                  src="/Bersihbersih.png"
                  alt="Aksi Bersih bersih"
                  className="craft-image"
                />
                <div className="craft-description">
                  <h2 className="craft-title">
                    Aksi Bersih-Bersih di Pantai Akkarena tanggal 10 Desember
                    2024
                  </h2>
                  <p>
                    Aksi bersih-bersih di Pantai Akkarena pada 10 November 2024
                    bertujuan untuk menjaga kebersihan dan kelestarian
                    lingkungan pantai yang sering terancam oleh sampah. Kegiatan
                    ini mengajak masyarakat untuk berpartisipasi dalam
                    membersihkan pantai sambil meningkatkan kesadaran akan
                    pentingnya menjaga ekosistem laut.
                  </p>
                  <IonButton size="small" className="tutorial-button">
                    Daftar Sekarang
                  </IonButton>
                </div>
              </div>

              {/* Craft Item 2 */}
              <div className="additional-image-container">
                <img
                  src="/sosialisasi.png"
                  alt="Sosialisasi Pengelolaan Sampah"
                  className="additional-image"
                />
                <div className="craft-description2">
                  <h2 className="craft-title">
                    Sosialisasi Pengelolaan Sampah di Sekolah: Ajarkan Anak
                    Cinta Lingkungan!
                  </h2>
                  <p>
                    Sosialisasi pengelolaan sampah di SDN Paccinang 1 tanggal 15
                    November 2024 diadakan untuk mengajarkan anak-anak tentang
                    pentingnya menjaga lingkungan melalui praktik pengelolaan
                    sampah yang baik. Dengan melibatkan siswa dalam kegiatan
                    seperti memilah sampah dan mendaur ulang, diharapkan mereka
                    dapat mengembangkan kecintaan terhadap lingkungan dan
                    menjadi agen perubahan di komunitas mereka.
                  </p>
                  <IonButton size="small" className="tutorial-button">
                    Daftar Sekarang
                  </IonButton>
                </div>
              </div>

              {/* Craft Item 3 */}
              <div className="additional-image-container2">
                <img
                  src="/pemutaranfilm.png"
                  alt="Pemutaran Film dan Dialog"
                  className="additional-image2"
                />
                <div className="craft-description3">
                  <h2 className="craft-title">
                    Pemutaran Film dan Dialog Lingkungan: Bersama Wujudkan Aksi
                    Kurangi Sampah!
                  </h2>
                  <p>
                    Pemutaran film dan dialog lingkungan pada tanggal 23
                    Desember 2024 di Benteng Rotterdam bertujuan untuk
                    meningkatkan kesadaran masyarakat tentang isu sampah dan
                    lingkungan. Melalui pemutaran film dokumenter tentang dampak
                    sampah, acara ini mengajak peserta untuk berdiskusi dan
                    merumuskan langkah-langkah konkret yang dapat diambil
                    bersama untuk mengurangi sampah di komunitas. Diharapkan
                    kegiatan ini dapat menginspirasi peserta untuk lebih peduli
                    pada lingkungan dan mengambil peran aktif dalam menjaga
                    kebersihan sekitar mereka.
                  </p>
                  <IonButton size="small" className="tutorial-button">
                    Daftar Sekarang
                  </IonButton>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Events;
