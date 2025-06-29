import { Typography, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/disc');
  }

  return (
    <Card sx={{ minWidth: 500, maxWidth: 1000 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Teste Disc Title
        </Typography>
        <Typography variant="body1" gutterBottom>
          Teste Disc body
        </Typography>
        <Button variant="outlined" onClick={handleRedirect}>
          Começar
        </Button>
      </CardContent>
    </Card>
  );
}

export default Home;