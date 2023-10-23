import * as React from 'react';
import { Snackbar, Alert, AlertColor } from '@mui/material';

interface Props {
  handleClose: (event: React.SyntheticEvent | any) => void;
  openCartAlert: boolean;
  text: string;
  jenis?: AlertColor;
}

const AlertCart = ({ handleClose, openCartAlert, text, jenis = 'success' }: Props) => {
  return (
    <React.Fragment>
      <Snackbar
        open={openCartAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <Alert severity={jenis} variant="filled" sx={{ width: '100%', color: 'white' }}>
          {text}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default AlertCart;
