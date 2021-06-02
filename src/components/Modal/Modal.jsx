import { Modal } from '@material-ui/core';
import { Form } from '../Form/Form';
import { useStyles } from './ModalStyle';

export const CreateFilmModal = ({ open, onClose }) => {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={() => onClose()}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'>
      <div className={classes.paper}>
        <Form />
      </div>
    </Modal>
  );
};
