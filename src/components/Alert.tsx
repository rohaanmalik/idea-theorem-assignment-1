import { Alert as MuiAlert, Snackbar } from '@mui/material';
import { AlertColor } from '@mui/material/Alert';
import { useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'

interface Props {
  status?: AlertColor;
  children?: React.ReactElement | string;
}

export type AlertStatus = 'success' | 'error';


function Alert({ status = 'success', children }: Props) {
    const [open, setOpen] = useState(true);

  const handleClose = (
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
       }}
    >
      <MuiAlert
        severity={status}
        sx={{
            p: 2,
            mb: 4,
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: status === "success" ? "#CDFADC" : "#FFC0C0",
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