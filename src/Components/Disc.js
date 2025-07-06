import React, { useState } from 'react';
import {
    Card, CardContent, Typography, Button, Stack, LinearProgress
} from '@mui/material';
import questions from '../Data/Questions';
import profileDescriptions from '../Data/ProfileDescriptions';
import { PieChart } from '@mui/x-charts/PieChart';

const Disc = () => {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState({
        D: { label: "Dominância", value: 0, color: "#f44336" },
        I: { label: "Influência", value: 0, color: "#ff9800" },
        S: { label: "Estabilidade", value: 0, color: "#4caf50" },
        C: { label: "Conformidade", value: 0, color: "#2196f3" },
    });
    const [finished, setFinished] = useState(false);
    const formattedScore = Object.values(score);
    const sorted = Object.entries(score)
        .map(([key, data]) => ({ key, ...data }))
        .sort((a, b) => b.value - a.value);

    const handleAnswer = (category) => {
        setScore(prev => ({
            ...prev,
            [category]: {
                ...prev[category],
                value: prev[category].value + 1
            }
        }));
        if (current < questions.length - 1) {
            setCurrent(current + 1);
        } else {
            setFinished(true);
        }
    };

    if (finished) {
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
                }}>
                <CardContent sx={{
                    flexGrow: 1,
                    overflowY: 'auto',
                    padding: 2,
                }}>
                    <Typography variant="h5">Parabéns, você concluíu o teste, veja a baixo as informações sobre o seu perfil</Typography>
                    <Typography variant="h4" color="primary" mt={2}>
                        {sorted[0].label}
                    </Typography>
                    <PieChart series={[{ data: formattedScore }]} width={400} height={300} />

                    <Typography variant="h6" gutterBottom align='left'>
                        {sorted[0].label}
                    </Typography>
                    <Typography variant="body1" gutterBottom align='justify'>
                        {profileDescriptions[sorted[0].key][0]}
                    </Typography>
                    <Typography variant="h6" gutterBottom align='left'>
                        {sorted[1].label}
                    </Typography>
                    <Typography variant="body1" gutterBottom align='justify'>
                        {profileDescriptions[sorted[1].key][1]}
                    </Typography>
                    <Typography variant="h6" gutterBottom align='left'>
                        {sorted[2].label}
                    </Typography>
                    <Typography variant="body1" gutterBottom align='justify'>
                        {profileDescriptions[sorted[2].key][2]}
                    </Typography>
                    <Typography variant="h6" gutterBottom align='left'>
                        {sorted[3].label}
                    </Typography>
                    <Typography variant="body1" gutterBottom align='justify'>
                        {profileDescriptions[sorted[3].key][3]}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    const q = questions[current];
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);

    return (
        <Card sx={{
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
        }}>
            <CardContent sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <Typography variant="h6" gutterBottom>
                    Pergunta {current + 1} de {questions.length}
                </Typography>
                <Typography variant="body1" mb={2}>
                    {q.question}
                </Typography>
                <Stack spacing={2}>
                    {shuffledOptions.map((opt, i) => (
                        <Button
                            key={i}
                            variant="outlined"
                            onClick={() => handleAnswer(opt.category)}>
                            {opt.text}
                        </Button>
                    ))}
                </Stack>
                <LinearProgress
                    value={((current + 1) / questions.length) * 100}
                    variant="determinate"
                    sx={{ mt: 4 }}
                />
            </CardContent>
        </Card>
    );
};

export default Disc;
