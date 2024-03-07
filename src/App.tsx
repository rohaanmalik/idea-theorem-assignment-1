import { Box } from '@mui/material';
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
        <Form />
    </Box>
  );
}

export default App
