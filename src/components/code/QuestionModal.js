import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import QuestionUpload from '../FacultyDashboard.js/QuestionUploadForm/QuestionUpload';



function getModalStyle() {
  const top = 7
  const left = 20 

  return {
    top: `${top}%`,
    left: `${left}%`,
   
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
        width: 1000,
   
    
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
  <QuestionUpload/>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen} style={{border:"none",background:"none",color:"#551A8B"}}>
      Question Upload
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
