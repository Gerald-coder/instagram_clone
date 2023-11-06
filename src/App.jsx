import "./App.css";
import { Bio, Nav } from "./components";
import Gallary from "./components/Gallary";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Bio />
        <Gallary />
      </div>
    </>
  );
}

export default App;
