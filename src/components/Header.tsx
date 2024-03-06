import { AppBar, Toolbar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Logo from '/logo.png'; // assuming logo.png is in the public folder

const LogoImage = styled('img')({
  width: '294px',
  height: '32px',
});

function Header() {
  return (
    <AppBar position="fixed" sx={{ bgcolor: '#252F3D', height: '56.83px', px: 2, md: { px: 0 } }}>
      <Toolbar>
        <Box sx={{ mx: 'auto', maxWidth: '6xl', height: '100%', display: 'flex', alignItems: 'center' }}>
          <LogoImage src={Logo} alt="logo" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;