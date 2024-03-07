import { Alert as MuiAlert, Snackbar, useMediaQuery } from '@mui/material';
import { AlertColor } from '@mui/material/Alert';
import { useEffect, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'

interface Props {
  status?: AlertColor;
  children?: React.ReactElement | string;
}

export type AlertStatus = 'success' | 'error';


function Alert({ status = 'success', children }: Props) {
    const isMobile = useMediaQuery('(max-width: 600px)');
    const [open, setOpen] = useState(true);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 6000);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);


  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{
        vertical: isMobile ? "bottom" : "top",
        horizontal: isMobile ? "center" : "right",
      }}
    >
      <MuiAlert
        severity={status}
        sx={{
          p: 2,
          mb: isMobile ? 16 : 4,
          fontSize: "1rem",
          fontWeight: "bold",
          backgroundColor: status === "success" ? "#CDFADC" : "#FFC0C0",
          width: isMobile ? "92%" : undefined,
        }}
        icon={
          status === "success" ? (
            <AiOutlineCheckCircle
              style={{
                color: "#333333",
              }}
            />
          ) : (
            <AiOutlineCloseCircle />
          )
        }
      >
        {children}
      </MuiAlert>
    </Snackbar>
  );
}

export default Alert;