import { Modal } from '@material-ui/core';
import { useStyles } from './ModalStyle';

export const CreateFilmModal = ({ open, onClose, children }) => {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={() => onClose()}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'>
      <div className={classes.paper}>{children}</div>
    </Modal>
  );
};
