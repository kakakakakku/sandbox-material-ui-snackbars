import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
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
        message={<span id="message-id">This is Snackbar 🎃</span>}
      />
    </div>
  );
}

export default App;
