import Interface from './components/Interface';
import './App.css';
import { Grid } from "@material-ui/core";

function App() {
  return (
  <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
    >
    <Interface/>
    </Grid>
  );
}

export default App;
