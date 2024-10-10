import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { createTheme } from '@mui/material/styles';
import Questionnaire from './Questionnaire'; // Assurez-vous d'importer le Questionnaire si nécessaire

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(`/questionnaire/${path}`);
  };



  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Sélectionnez une catégorie de santé
      </Typography>
      <Box sx={{ display: 'flex', gap: 3, flexDirection: 'column', mt: 2 }}>
        <Button
          variant="contained"
          color='success'

          startIcon={<DescriptionIcon />}
          onClick={() => handleNavigate('Sante-mentale')}
        >
          Santé Mentale
        </Button>
        <Button
          variant="contained"
          color='success'

          startIcon={<DescriptionIcon />}
          onClick={() => handleNavigate('Sante-physique')}
        >
          Santé Physique
        </Button>
        <Button
          variant="contained"
          color='success'

          startIcon={<DescriptionIcon />}
          onClick={() => handleNavigate('Confort-au-travail')}
        >
          Confort au Travail
        </Button>
      </Box>
    </Box>
  );
}

function Dashboard({ window }) {
  return (
    <AppProvider
      navigation={[
        {
          segment: 'categorie',
          title: 'Questionnaire',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'graphs',
          title: 'Graphiques',
          icon: <DescriptionIcon />,
        },
      ]}
      theme={demoTheme}
      window={window ? window() : undefined}
    >
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<DemoPageContent />} />
          <Route path="/questionnaire/*" element={<Questionnaire />} /> 
        </Routes>
      </DashboardLayout>
    </AppProvider>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
