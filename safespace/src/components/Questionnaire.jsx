import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const questions = {
  "Sante-mentale": [
    "Comment évaluez-vous votre niveau de stress au travail ?",
    "Avez-vous du mal à vous concentrer sur vos tâches quotidiennes ?",
    "Ressentez-vous une fatigue mentale après une journée de travail ?",
    "Avez-vous le sentiment d'être soutenu par vos collègues ?",
    "Ressentez-vous souvent de l'anxiété liée au travail ?",
    "Le travail affecte-t-il votre humeur en dehors du bureau ?",
    "Avez-vous des difficultés à maintenir une motivation constante ?",
    "Votre charge de travail vous semble-t-elle raisonnable ?",
    "Avez-vous l'impression d'être surchargé émotionnellement ?",
    "Votre équilibre travail-vie personnelle est-il satisfaisant ?",
    "Avez-vous du mal à gérer le stress au travail ?",
    "Recevez-vous un soutien adéquat pour votre santé mentale au travail ?",
    "Le travail affecte-t-il votre sommeil ?",
    "Avez-vous des troubles de l'humeur au travail ?",
    "Votre lieu de travail encourage-t-il un bon équilibre mental ?",
    "Vous sentez-vous capable de gérer vos responsabilités au travail ?",
    "Avez-vous accès à des ressources pour améliorer votre bien-être mental ?",
    "Avez-vous du temps pour des pauses mentales durant la journée ?",
    "Ressentez-vous de la pression liée à vos performances ?",
    "Avez-vous des périodes de burnout ou d'épuisement mental ?",
    "Votre charge mentale au travail est-elle supportable ?",
    "Votre environnement de travail est-il source de stress ?",
    "Avez-vous des pensées négatives liées à votre travail ?",
    "Votre supérieur hiérarchique est-il attentif à votre bien-être mental ?",
    "Avez-vous accès à des outils pour réduire votre stress au travail ?",
    "Ressentez-vous un sentiment d'accomplissement au travail ?",
    "Le travail vous laisse-t-il du temps pour vos loisirs ?",
    "Vos collègues contribuent-ils à un environnement de travail positif ?",
    "Êtes-vous à l'aise pour parler de votre santé mentale au travail ?",
    "Avez-vous déjà eu besoin de prendre un congé pour raison de santé mentale ?"
  ],
  "Sante-physique": [
    "Avez-vous des douleurs physiques récurrentes au travail ?",
    "Prenez-vous des pauses régulières pour bouger ?",
    "Votre poste de travail est-il ergonomique ?",
    "Avez-vous des douleurs au dos après de longues heures de travail ?",
    "Vous sentez-vous physiquement fatigué en fin de journée ?",
    "Le travail affecte-t-il votre sommeil ?",
    "Faites-vous de l'exercice régulièrement en dehors du travail ?",
    "Votre lieu de travail offre-t-il des options pour l'exercice physique ?",
    "Avez-vous des douleurs au cou ou aux épaules en travaillant ?",
    "Avez-vous accès à un espace pour vous étirer ou vous détendre ?",
    "Le travail affecte-t-il votre posture ?",
    "Votre lieu de travail encourage-t-il une bonne santé physique ?",
    "Vous sentez-vous physiquement à l'aise tout au long de la journée ?",
    "Faites-vous des mouvements réguliers pendant votre journée de travail ?",
    "Avez-vous accès à des installations de santé physique au travail ?",
    "Votre entreprise propose-t-elle des activités physiques ?",
    "Votre emploi du temps permet-il de faire de l'exercice régulièrement ?",
    "Avez-vous l'impression que votre environnement de travail est sain ?",
    "Prenez-vous des pauses régulières pour reposer vos yeux ?",
    "Le travail provoque-t-il des douleurs physiques chroniques ?",
    "Avez-vous des douleurs liées à l'utilisation prolongée de l'ordinateur ?",
    "Ressentez-vous de la fatigue physique après une journée de travail ?",
    "Votre environnement de travail est-il propice à une bonne santé physique ?",
    "Votre entreprise encourage-t-elle des comportements sains ?",
    "Faites-vous attention à votre posture au travail ?",
    "Avez-vous accès à des repas sains sur votre lieu de travail ?",
    "Avez-vous l'impression que le travail affecte votre bien-être physique ?",
    "Votre entreprise propose-t-elle des bilans de santé réguliers ?",
    "Votre environnement de travail vous permet-il de rester actif ?",
    "Ressentez-vous des douleurs articulaires après une journée de travail ?"
  ],
  "Confort-au-travail": [
    "Votre espace de travail est-il confortable ?",
    "Êtes-vous satisfait de l'ergonomie de votre poste de travail ?",
    "Votre environnement de travail est-il suffisamment éclairé ?",
    "Le niveau de bruit au travail est-il acceptable ?",
    "Votre siège de bureau est-il confortable ?",
    "Avez-vous accès à une bonne ventilation dans votre bureau ?",
    "Votre espace de travail est-il bien organisé ?",
    "Le chauffage/climatisation fonctionne-t-il correctement dans votre bureau ?",
    "Avez-vous suffisamment d'espace personnel au travail ?",
    "Ressentez-vous de l'inconfort à cause de la température dans votre bureau ?",
    "Votre environnement de travail vous permet-il de vous concentrer ?",
    "Votre espace de travail est-il bien rangé ?",
    "Avez-vous suffisamment de lumière naturelle dans votre bureau ?",
    "Êtes-vous dérangé par des distractions fréquentes au travail ?",
    "Votre lieu de travail vous permet-il d'être productif ?",
    "Votre poste de travail est-il ajustable pour votre confort ?",
    "Le bruit ambiant au travail affecte-t-il votre concentration ?",
    "Votre environnement de travail est-il agréable visuellement ?",
    "Le mobilier de bureau est-il adapté à vos besoins ?",
    "Ressentez-vous de l'inconfort physique lié à votre espace de travail ?",
    "Votre entreprise prend-elle des mesures pour améliorer votre confort ?",
    "Avez-vous accès à des équipements pour améliorer votre confort ?",
    "Votre espace de travail vous permet-il de vous sentir à l'aise ?",
    "La disposition de votre bureau est-elle pratique pour votre travail ?",
    "Votre espace de travail encourage-t-il une bonne posture ?",
    "Les équipements à votre disposition sont-ils en bon état ?",
    "Avez-vous accès à des espaces de détente au travail ?",
    "Votre espace de travail favorise-t-il votre bien-être général ?",
    "Votre bureau est-il équipé de technologies modernes ?",
    "Votre environnement de travail est-il propre et bien entretenu ?"
  ]
};


function Questionnaire() {
    const { category } = useParams();
    const navigate = useNavigate();
  
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Questionnaire sur {category.replace('-', ' ')}
        </Typography>
        {questions[category]?.map((question, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="body1">{index + 1}. {question}</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="outlined">Pas du tout</Button>
              <Button variant="outlined">Un peu</Button>
              <Button variant="outlined">Modérément</Button>
              <Button variant="outlined">Beaucoup</Button>
              <Button variant="outlined">Énormément</Button>
            </Box>
          </Box>
        ))}
        <Button
          variant="contained"
          color='success'
          onClick={() => navigate('/dashboard')} 
          sx={{ mt: 4 }}
        >
          valider
        </Button>
      </Box>
    );
  }
  
  Questionnaire.propTypes = {
    category: PropTypes.string,
  };
  
  export default Questionnaire;