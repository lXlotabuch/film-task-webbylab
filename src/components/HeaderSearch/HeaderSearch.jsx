import InputBase from '@material-ui/core/InputBase';
import { useCallback } from 'react';
import { connect } from 'react-redux';
import { searchFilms } from '../../store/middleware/middleware';
import { debounce } from '../../utils/debounce';
import useStyles from './HeaderSearchStyle';

export const HeaderSearch = connect(null, { searchFilms })(
  ({ searchFilms }) => {
    const classes = useStyles();

    const search = useCallback(
      e => {
        const query = e.target.value;
        searchFilms({ query });
      },
      [searchFilms],
    );

    const handleSearch = debounce(search, 1000);

    return (
      <InputBase
        onChange={handleSearch}
        placeholder='Search…'
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    );
  },
);
