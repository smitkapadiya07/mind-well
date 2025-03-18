import React from 'react';
import { Box, Container, Stepper, Step, StepLabel, Card, CardContent, Typography, Button, Grid } from "@mui/material";

const steps = [
    "Complete a Brief Assessment",
    "Get Matched with Therapists",
    "Schedule a Free Consultation",
    "Begin Your Therapy Journey"
];

const descriptions = [
    "Answer a few questions about your needs, preferences, and goals for therapy. This helps us understand where you're looking for.",
    "Our advanced algorithm matches you with licensed therapists who specialize in your specific needs and align with your preferences.",
    "Book a complimentary 15-minute video call with your potential therapist to ensure they’re the right fit for you.",
    "Once you’ve found your match, choose a plan that works for you and start your therapy sessions through secure video, audio, or messaging."
];

function Works() {
    return (
        <Box>
            <Container maxWidth="md" sx={{ mt: 5 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    How It Works
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                    Getting started with MindWell is simple. Follow these steps to begin your mental wellness journey.
                </Typography>

                <Stepper orientation="vertical" activeStep={-1}>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <Card variant="outlined" sx={{ mt: 2, mb: 2 }}>
                                <CardContent>
                                    <Typography variant="body2">{descriptions[index]}</Typography>
                                </CardContent>
                            </Card>
                        </Step>
                    ))}
                </Stepper>

                <Grid container justifyContent="center" sx={{ mt: 3 }}>
                    <Button variant="contained" color="primary">Start Your Journey Today</Button>
                </Grid>
            </Container>
        </Box>
    );
}

export default Works;
