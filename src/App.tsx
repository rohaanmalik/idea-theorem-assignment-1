import { Box } from '@mui/material';
import './App.css'
import Form from './components/Form';
import Header from './components/Header'

function App() {
  return (
    <Box
      sx={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <Box sx={{ mt: '56.83px' }}>
        <Form />
      </Box>
    </Box>
  );
}

export default App
