import React, { useState } from "react";
import {
    Button,
    Card,
    CardContent,
    Grid,
} from "@material-ui/core";

export default function Info({}) {

    return (
        <Card variant="outlined"
              style={
                  {backgroundColor: "#1C1D22", borderColor: "#FCFCFC", color: "#FCFCFC", width: "25vw", textAlign: "center"}
              }>
            <br/>
            <CardContent>
                <Grid container justifyContent={"center"}>
                    <Grid item xs={8}>
                        <h2>INFO</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <p>The Sieve of Eratosthenes is one of the first procedures created to algorithmically identify all of the prime numbers on [1, n], where n is any positive integer. It starts by using 2 as the first prime number and eliminates all of its multiples from prime number candidacy. It then repeats the process for each subsequent available number until all primes have been identified. This application serves as a visual aid to better conceptualize the process.</p>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant={"outlined"}>
                            Continue
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
