import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectForm from "./Components/Projects/ProjectForm";
import Main from "./Components/UI/Main";
import ViewProject from "./Components/ViewProject/ViewProject.js";

function App() {
  const data = useSelector((state) => state.data);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        {data.formVisible && <ProjectForm />}
        <Route path="/viewdetails" element={<ViewProject />} />
      </Routes>
    </div>
  );
}

export default App;
