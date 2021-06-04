import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './HeaderStyle';
import { HeaderSearch } from '../HeaderSearch/HeaderSearch';
import { Button } from '@material-ui/core';
import { CreateFilmModal } from '../Modal/Modal';
import { connect } from 'react-redux';
import { selectModalIsOpen } from '../../store/reducer/reducer';
import { openCloseModal } from '../../store/action/action';
import { Form } from '../Form/Form';
import { DownloadFile } from '../DownloadFile/DownloadFile';

const mapStateToProps = state => ({
  modalIsOpen: selectModalIsOpen(state),
});

export const Header = connect(mapStateToProps, { openCloseModal })(
  ({ modalIsOpen, openCloseModal }) => {
    const classes = useStyles();
    const [modalChildren, setModalChildren] = useState(null);

    const openModal = children => {
      setModalChildren(children);
      openCloseModal();
    };

    return (
      <>
        <header className={classes.root}>
          <AppBar position='static'>
            <Toolbar>
              <Typography className={classes.title} variant='h6' noWrap>
                WebbyLab
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <HeaderSearch />
              </div>
              <Button
                onClick={() => openModal(<DownloadFile />)}
                color='inherit'>
                Download films
              </Button>
              <Button onClick={() => openModal(<Form />)} color='inherit'>
                Create Film
              </Button>
            </Toolbar>
          </AppBar>
        </header>
        <CreateFilmModal open={modalIsOpen} onClose={openCloseModal}>
          {modalChildren}
        </CreateFilmModal>
      </>
    );
  },
);
