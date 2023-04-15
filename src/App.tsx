import {
  AddTask,
  EditTask,
  IndexTable,
  TableDetails,
} from "./Components/Table";
import { taskData } from "./data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/scss/index.scss";

function App() {
  return (
    <div className="App">
      <h2>Crud Task + Typescript</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexTable />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
          <Route path="/view/:id" element={<TableDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
