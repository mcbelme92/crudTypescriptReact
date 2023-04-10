import { AddTask, EditTask, IndexTable } from "./Components/Table";
import "../src/scss/index.scss";
import { taskData } from "./data";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2>Crud Task + Typescript</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexTable taskData={taskData} />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
