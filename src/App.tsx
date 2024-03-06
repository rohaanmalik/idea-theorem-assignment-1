import { Box } from '@mui/material';
import './App.css'
import Form from './components/Form';
import Header from './components/Header'

function App() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: { md: "100%" },
        }}
      >
        <Form />
      </Box>
    </Box>
  );
}

export default App
