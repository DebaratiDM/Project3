import "./App.css";
import Header from "./Component/Header";
import { Container } from "react-bootstrap";
import Grid from "./Component/Grid";
import AreaOfCircle from "./Component/AreaOfCircle";
import AreaOfRectangle from "./Component/AreaOfRectangle";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Grid />
        <AreaOfRectangle />
        <AreaOfCircle />
      </Container>
    </div>
  );
}

export default App;
