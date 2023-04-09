import { IndexTable } from "./Components/Table";
import "../src/scss/index.scss";
import { taskData } from "./data";

function App() {
  return (
    <div className="App">
      <h2>Crud Task + Typescript</h2>
      <IndexTable taskData={taskData} />
    </div>
  );
}

export default App;
