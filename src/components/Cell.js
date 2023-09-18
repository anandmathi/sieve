import React from "react";
import {
    Card,
    CardContent,
} from "@material-ui/core";

export default function Cell({value, vis}) {

    // const [flag, setFlag] = React.useState(true);
    if (vis === 0) {
        return (
            <Card variant="outlined" // unvisited
                  style={
                      {
                          backgroundColor: "#1C1D22",
                          borderColor: "#FCFCFC",
                          color: "#FCFCFC",
                          width: "100px",
                          height: "100px",
                          textAlign: "center",
                      }
                  }>
                <br/>
                <CardContent>
                    <h2>{value}</h2>
                </CardContent>
            </Card>

            // 0 unvisited: backgroundColor: "#1C1D22",
            // 1 visiting: backgroundColor: "#FFD166",
            // 2 eliminated: backgroundColor: "#778da9",
            // 3 prime: backgroundColor: "#1EBA67",
        );
    }
    else if (vis === 1) {
        return (
            <Card variant="outlined" // visiting
                  style={
                      {
                          backgroundColor: "#1C1D22",
                          borderColor: "#FFD166",
                          color: "#FFD166",
                          width: "100px",
                          height: "100px",
                          textAlign: "center",
                      }
                  }>
                <br/>
                <CardContent>
                    <h2>{value}</h2>
                </CardContent>
            </Card>

            // unvisited: backgroundColor: "#1C1D22",
            // visiting: backgroundColor: "#FFD166",
            // eliminated: backgroundColor: "#778da9",
            // prime: backgroundColor: "#1EBA67",
        );
    }
    else if (vis === 2) {
        return (
            <Card variant="outlined" // eliminated
                  style={
                      {
                          backgroundColor: "#1C1D22",
                          borderColor: "#778da9",
                          color: "#778da9",
                          width: "100px",
                          height: "100px",
                          textAlign: "center",
                      }
                  }>
                <br/>
                <CardContent>
                    <h2>{value}</h2>
                </CardContent>
            </Card>

            // unvisited: backgroundColor: "#1C1D22",
            // visiting: backgroundColor: "#FFD166",
            // eliminated: backgroundColor: "#778da9",
            // prime: backgroundColor: "#1EBA67",
        );
    }
    else {
        return (
            <Card variant="outlined" // prime
                  style={
                      {
                          backgroundColor: "#1C1D22",
                          borderColor: "#1EBA67",
                          color: "#1EBA67",
                          width: "100px",
                          height: "100px",
                          textAlign: "center",
                      }
                  }>
                <br/>
                <CardContent>
                    <h2>{value}</h2>
                </CardContent>
            </Card>

            // unvisited: backgroundColor: "#1C1D22",
            // visiting: backgroundColor: "#FFD166",
            // eliminated: backgroundColor: "#778da9",
            // prime: backgroundColor: "#1EBA67",
        );
    }
}
