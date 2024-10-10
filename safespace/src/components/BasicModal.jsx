import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import "../components/BasicModal.css"
import { borderRadius, display, width } from '@mui/system';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'white',
  border: '1px solid black',
  boxShadow: 24,
  height : 400,
};



export default function BasicModal({colorProps}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='modal_wrapper'>
        <Button onClick={handleOpen} color={colorProps === "success" ? "success" : ""} variant='contained'>LogIn</Button>
        
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="box">
        <div className="login-page">
      <div className="login-container">
        <h2>Connexion à SafeSpace</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Entrez votre email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" placeholder="Entrez votre mot de passe" required />
          </div>
          <button  className="login-btn"> <Link to="/dashboard">Se connecter</Link> </button>
        </form>
      </div>
    </div>

        </Box>
      </Modal>
    </div>
  );
}
