import { Typography, Card, CardContent, Button, CardActions, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/disc');
  }

  return (
    <Card
      sx={{
        width: {
          xs: '100vw',
          md: '60%',
        },
        height: {
          xs: '100vh',
          md: '60%',
        },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Descubra seu Perfil Comportamental com o DISC
        </Typography>
        <Typography variant="body1" gutterBottom align="justify">
          O teste DISC é uma ferramenta de mapeamento comportamental que ajuda você a entender melhor suas preferências, estilo de comunicação e forma de agir.
        </Typography>
        <Box mt={3}>
          <Typography variant="body1" gutterBottom align="left">
            ✅ Rápido e intuitivo
          </Typography>
          <Typography variant="body1" gutterBottom align="left">
            ✅ Sem respostas certas ou erradas
          </Typography>
          <Typography variant="body1" gutterBottom align="left">
            ✅ Resultado imediato ao final
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ padding: 2 }}>
        <Button variant="contained" fullWidth onClick={handleRedirect}>
          Começar
        </Button>
      </CardActions>
    </Card>

  );
}

export default Home;