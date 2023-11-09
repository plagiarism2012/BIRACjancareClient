import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Load = () => {
    React.useEffect(() => {
        handleOpen();
    }, []);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
  
    return (
        <div>
        <Backdrop
            sx={{ color: '#0000FF', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
        </div>
    )
}

export default Load