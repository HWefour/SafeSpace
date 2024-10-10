import Button from "@mui/material/Button";
import "../components/PreviewApp.css";
import "../components/Card.css";
import Navbar from '../components/Navbar';

import Card from "./Card";
import {useState } from "react";
import BasicModal from "./BasicModal";

export default function PreviewApp() {

    const [displayParagraph , setDisplayParagraph] = useState(false)
    const [displayParagraph2 , setDisplayParagraph2] = useState(false)
    const [displayParagraph3 , setDisplayParagraph3] = useState(false)
    


  return (
    <div className="big_wrapper">
      <Navbar/>
      <div className="content_wrapper">
        <div className="phone_wrapper">
          <div className="bg">
            <img src="src/assets/Group 1622.png" />
          </div>
          <div className="phone">
            <img src="src/assets/survly explore page 2.png" />
          </div>
          <div className="phone2">
            <img src="src/assets/survly search result page 1.png" />
          </div>
        </div>
        <div className="text">
          <h1 className="title">SafeSpace </h1>
          <h3 className="under_text">
            Concu pour votre confort, Découvrez notre solution qui est aussi la
            votre
          </h3>
          <div className="cards_hover">
            <div className="key_card" onMouseEnter={()=>setDisplayParagraph(true)} onMouseLeave={()=>setDisplayParagraph(false)}>
              <h3>Questionnaire personnalisable</h3>
              {displayParagraph && (

              <p>Adaptez les enquêtes à vos besoins.</p>
              )}
            </div>
            <div className="key_card" onMouseEnter={()=>setDisplayParagraph2(true)} onMouseLeave={()=>setDisplayParagraph2(false)}>
              <h3>Rapport automatisé</h3>
              {displayParagraph2 && (
                  <p>Recevez des rapports claires et détaillés pour prendre vos décisions.</p>

              )}
            </div>
            <div className="key_card" onMouseEnter={()=>setDisplayParagraph3(true)} onMouseLeave={()=>setDisplayParagraph3(false)}>
              <h3>Support et assistance</h3>
              {displayParagraph3 && (
                  <p>Profitez d'un support technique dedié a l'utilisation de notre plateforme.</p>

              )}
            </div>
          </div>
          <div className="buttons_group">
            <BasicModal colorProps="success"/>
            <Button variant="outlined" color="success">
              SignUp
            </Button>
          </div>
        </div>
      </div>
      <section className="doctors-section">
        <h2>Notre Equipe </h2>
        <div className="list">
          <Card
            name="Efnane Haitam"
            title="Developpeur Fullstack"
            imgsrc="src/assets/AvatarMaker.png"
          />
          <Card
            name="El asri Mohamed"
            title="DevOps"
            imgsrc="src/assets/AvatarMaker_1.png"
          />
          <Card
            name="Garcia Thomas"
            title="Administrateur Reseaux"
            imgsrc=" src/assets/Thomas_GARCIA_Avatar.png"
          />
          <Card
            name="Khayati Ingrid "
            title="Expert en ingéniérie des données"
            imgsrc="src/assets/AvatarMaker2.png "
          />
        </div>
      </section>
    </div>
  );
}
