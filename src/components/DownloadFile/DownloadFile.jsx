import { Button, Grid } from '@material-ui/core';
import { message } from 'antd';
import { useRef } from 'react';
import { connect } from 'react-redux';
import { addFilmFromFile } from '../../store/middleware/middleware';
import { parseTxtFile } from '../../utils/parseTxtFile';

export const DownloadFile = connect(null, { addFilmFromFile })(
  ({ addFilmFromFile }) => {
    const fileInput = useRef();

    const handleClick = () => {
      const file = fileInput.current.files[0];
      const type = file.type.split('/')[0];
      if (type !== 'text') {
        message.warning('Only TEXT file');
        return;
      }
      if (!file) {
        message.warning('Download file please!', 1.5);
        return;
      }
      const reader = new FileReader();
      reader.addEventListener('load', event => {
        const currentFormat = parseTxtFile(event.target.result);
        addFilmFromFile(currentFormat);
      });
      reader.readAsText(file);
    };

    return (
      <Grid>
        <Grid align='center'>
          <h2>Download File</h2>
        </Grid>
        <input type='file' ref={fileInput} />
        <Button onClick={handleClick}>Load</Button>
      </Grid>
    );
  },
);
