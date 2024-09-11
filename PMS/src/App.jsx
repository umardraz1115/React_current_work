import { useState } from "react";
import CreateProjectForm from "./components/CreateProjectForm";
import MainContent from "./components/MainContent";
import SideBar from "./components/sidebar";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const [showing, setShowing] = useState(false);
  const [project, setProject] = useState([]);

  function checkDataValidation() {
    if (
      project.title === "null" &&
      project.description === "null" &&
      project.date === "null"
    ) {
      return false;
    } else {
      return true;
    }
  }

  function handleInputData(title, description, date) {
    const newProject = { title, description, date };
    setProject((prevProject) => [...prevProject, newProject]);
  }

  function handleCurrentRendering() {
    setShowing(true);
  }

  function handleCanelForm() {
    setShowing(false);
  }

  console.log(project); 
  return (
    <>
      <div className="flex">
        <SideBar
          onAddClickButton={handleCurrentRendering}
          projectList={checkDataValidation ? project : "null"}
        />
        {!showing ? (
          <MainContent onProjectClickButton={handleCurrentRendering} />
        ) : (
          <CreateProjectForm
            onEntry={handleInputData}
            onCancel={handleCanelForm}
          />
        )}
        {/* <ProjectDetail details={project} /> */}
      </div>
    </>
  );
}

export default App;
