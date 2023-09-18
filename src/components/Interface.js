import React, { useState, useEffect } from "react";
import {
    Button,
    Card,
    CardContent,
    Grid,
    IconButton,
    Slider,
    Modal, // Import Modal component
    Backdrop,
    Fade,
} from "@material-ui/core";

import CellGrid from "./CellGrid";

import { ThemeProvider, createTheme, makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InfoIcon from "@material-ui/icons/Info";
import GitHubIcon from "@material-ui/icons/GitHub";

// Define a custom styles hook for the modal
const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    modalContent: {
        backgroundColor: '#1C1D22',
        border: "1px solid #FCFCFC",
        maxWidth: '30vw',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const theme = createTheme({
    palette: {
        primary: { main: "#e036d8", contrastText: "#fff" },
    },
});

export default function Interface() {
    const classes = useStyles();

    const [size, setSize] = useState(100);
    const [spd, setSpd] = useState(1);
    const [cellStates, setCellStates] = useState([]);
    const [isVisualizing, setIsVisualizing] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Track modal open state

    // Function to handle modal open state
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleVisualizeClick = async () => {
        if (isVisualizing) {
            return;
        }
        await startSieve();
    };

    useEffect(() => {
        setCellStates(Array(size).fill(0));
    }, [size]);

    async function startSieve() {
        if (isVisualizing) {
            return;
        }

        setIsVisualizing(true);

        const newCellStates = Array(size).fill(0);

        newCellStates[0] = 2;

        await new Promise((resolve) => {
            setTimeout(() => {
                setCellStates([...newCellStates]);
                resolve();
            }, 300 / spd);
        });

        for (let i = 2; i <= Math.sqrt(size) - 1; i++) {
            if (newCellStates[i - 1] === 0) {
                newCellStates[i - 1] = 3;

                await new Promise((resolve) => {
                    setTimeout(() => {
                        setCellStates([...newCellStates]);
                        resolve();
                    }, 300 / spd);
                });

                for (let j = i * i - 1; j < size; j += i) {
                    if (newCellStates[j] === 0) {
                        newCellStates[j] = 1;

                        await new Promise((resolve) => {
                            setTimeout(() => {
                                setCellStates([...newCellStates]);
                                resolve();
                            }, 300 / spd);
                        });
                        newCellStates[j] = 2;

                        await new Promise((resolve) => {
                            setTimeout(() => {
                                setCellStates([...newCellStates]);
                                resolve();
                            }, 600 / spd);
                        });
                    }
                }
            }
        }

        for (let i = Math.ceil(Math.sqrt(size)); i < size; i++) {
            if (newCellStates[i] === 0) {
                newCellStates[i] = 1;

                await new Promise((resolve) => {
                    setTimeout(() => {
                        setCellStates([...newCellStates]);
                        resolve();
                    }, 0);
                });

                newCellStates[i] = 3;

                await new Promise((resolve) => {
                    setTimeout(() => {
                        setCellStates([...newCellStates]);
                        resolve();
                    }, 300 / spd);
                });
            }
        }

        setIsVisualizing(false);
    }

    return (
        <ThemeProvider theme={theme}>
            <Card
                variant="outlined"
                style={{
                    backgroundColor: "#1C1D22",
                    borderColor: "#FCFCFC",
                    color: "#FCFCFC",
                    width: "50vw",
                    textAlign: "center",
                    marginTop: "50px",
                    marginBottom: "50px",
                }}
            >
                <br />
                <CardContent>
                    <div style={{
                        backgroundColor: '#1C1D22',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        minWidth: '100%',
                    }}>
                        {/* Add the new icon button */}
                        <IconButton
                            component="button"
                            onClick={handleOpenModal}
                            style={{ color: "#FCFCFC" }}
                        >
                            {/* Add your custom icon */}
                            <InfoIcon />
                        </IconButton>
                        <IconButton
                            component="a"
                            style={{ color: "#FCFCFC" }}
                            href="https://www.linkedin.com/in/anand-mathi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                            component="a"
                            style={{ color: "#FCFCFC" }}
                            href="https://github.com/anandmathi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon />
                        </IconButton>
                    </div>
                    <Grid container spacing={2} justify={"center"}>
                        <Grid item xs={8}>
                            <h1>SIEVE</h1>
                        </Grid>
                        <Grid item xs={5}>
                            <h3># of Elements</h3>
                        </Grid>
                        <Grid item xs={5}>
                            <h3>Speed</h3>
                        </Grid>
                        <Grid item xs={5}>
                            <Slider
                                aria-label="# OF ELEMENTS"
                                defaultValue={100}
                                step={50}
                                marks
                                min={100}
                                max={500}
                                valueLabelDisplay="auto"
                                disabled={isVisualizing}
                                onChange={(event, value) => setSize(value)}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <Slider
                                aria-label="SPEED"
                                defaultValue={1}
                                step={0.5}
                                marks
                                min={0.5}
                                max={2}
                                valueLabelDisplay="auto"
                                disabled={isVisualizing}
                                onChange={(event, value) => setSpd(value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant={"outlined"}
                                color={"primary"}
                                onClick={handleVisualizeClick}
                            >
                                Visualize
                            </Button>
                        </Grid>
                        <CellGrid cellStates={cellStates} />
                    </Grid>
                </CardContent>
                {/* Add the modal */}
                <Modal
                    open={isModalOpen}
                    onClose={handleCloseModal}
                    className={classes.modal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={isModalOpen}>
                        <div className={classes.modalContent}>
                            <h2>Sieve of Eratosthenes</h2>
                            <p>The Sieve of Eratosthenes is an efficient algorithm used for discovering all primes between 0 and a specified number. While brute-forcing a solution would be O(n√n), the algorithm reduces the worst-case time complexity down to simply O(n x log(log n)). This tool provides a visual companion for better understanding the logic behind the process. You can read more about the algorithm&nbsp;
                                <a href={"https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes"} rel="noreferrer" target="_blank">here</a>.</p>
                        </div>
                    </Fade>
                </Modal>
            </Card>
        </ThemeProvider>
    );
}
