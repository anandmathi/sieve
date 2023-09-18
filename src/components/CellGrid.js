import React from "react";
import Cell from "./Cell";
import { Grid } from "@material-ui/core"

// export default function CellGrid({count}) {
//
//     return (
//         Array.from({length: count}, (_item, index) =>
//             <Grid item xs={12/5}>
//                 <Cell value={index+1} vis={0}/>
//             </Grid>)
//         // unvisited: backgroundColor: "#1C1D22",
//         // visiting: backgroundColor: "#FFD166",
//         // eliminated: backgroundColor: "#778da9",
//         // prime: backgroundColor: "#1EBA67",
//     );
// }

export default function CellGrid({ cellStates }) {
    return (
            cellStates.map((vis, index) => (
                <Grid item xs={12 / 5} key={index}>
                    <Cell value={index+1} vis={vis} />
                </Grid>
            ))
    );
}