import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Open Snackbar 😃</button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={<span id="message-id">This is Snackbar 🎃</span>}
      />
    </div>
  );
}

export default App;
