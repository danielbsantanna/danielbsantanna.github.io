import React, { useState } from 'react';
import {
    Card, CardContent, Typography, Button, Stack, LinearProgress
} from '@mui/material';
import questions from '../Data/Questions';
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

    const getTopCategory = () => {
        const sorted = Object.entries(score)
            .map(([key, data]) => ({ key, ...data }))
            .sort((a, b) => b.value - a.value);
            console.log(sorted)
        return sorted[0].label
    }

    if (finished) {
        return (
            <Card>
                <CardContent>
                    <Typography variant="h5">Parabéns, seu tipo de perfil é:</Typography>
                    <Typography variant="h4" color="primary" mt={2}>
                        {getTopCategory()}
                    </Typography>
                    <PieChart series={[{ data: formattedScore }]} width={400} height={300} />
                </CardContent>
            </Card>
        );
    }

    const q = questions[current];
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);

    return (
        <Card>
            <CardContent>
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
