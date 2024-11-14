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
import "./KerajinanSampah.css";
import Footer from "../../components/Footer";


const CraftPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Kerajinan Sampah</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow className="ion-text-center">
            <IonCol>
              <h1>Olah Sampahmu Jadi Kerajinan</h1>
              {/* Craft Item 1 */}
              <div className="craft-container">
                <img
                  src="/fotogalon.png"
                  alt="Pot Tanaman dari Galon Bekas"
                  className="craft-image"
                />
                <div className="craft-description">
                  <h2 className="craft-title">Pot tanaman dari galon bekas</h2>
                  <p>
                    Pot tanaman dari galon bekas merupakan cara kreatif untuk
                    mendaur ulang sampah plastik sekaligus memberikan tempat
                    tumbuh yang ramah lingkungan bagi tanaman. Dengan memotong,
                    menghias, dan mengisi botol dengan tanah, kita dapat menciptakan
                    pot yang unik dan menarik, serta berkontribusi pada pengurangan
                    limbah plastik di lingkungan sekitar kita.
                  </p>
                  <IonButton size="small" className="tutorial-button">
                    Lihat Tutorial
                  </IonButton>
                </div>
              </div>

              {/* Craft Item 2 */}
              <div className="additional-image-container">
                <img
                  src="/tastutupbotol.jpg"
                  alt="Tas Belanja dari Tutup Botol"
                  className="additional-image"
                />
                <div className="craft-description2">
                  <h2 className="craft-title">Tas belanja dari tutup botol plastik</h2>
                  <p>
                    Tas belanja dari tutup botol plastik adalah inovasi ramah
                    lingkungan yang mengubah sampah menjadi barang berguna.
                    Dengan mengumpulkan tutup botol, menjahitnya menjadi satu kesatuan,
                    dan menambahkan pegangan, kita dapat menciptakan tas yang stylish dan
                    kuat, sambil mengurangi dampak negatif dari limbah plastik di lingkungan.
                  </p>
                  <IonButton size="small" className="tutorial-button">
                    Lihat Tutorial
                  </IonButton>
                </div>
              </div>

              {/* Craft Item 3 */}
              <div className="additional-image-container2">
                <img
                  src="/limbahkaca.png"
                  alt="Limbah Kaca Jadi Mosaik"
                  className="additional-image2"
                />
                <div className="craft-description3">
                  <h2 className="craft-title">Limbah kaca jadi kerajinan mosaik</h2>
                  <p>
                    Limbah kaca yang diolah menjadi kerajinan mosaik adalah cara
                    yang indah untuk mendaur ulang bahan yang biasanya terbuang.
                    Dengan memecah kaca bekas menjadi potongan-potongan kecil, kita
                    dapat menciptakan karya seni yang menarik, seperti panel dinding,
                    hiasan meja, atau bahkan aksesori dekoratif, yang tidak hanya
                    mempercantik ruangan tetapi juga memberikan kehidupan baru pada
                    material yang sudah tidak terpakai.
                  </p>
                  <IonButton size="small" className="tutorial-button">
                    Lihat Tutorial
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

export default CraftPage;
