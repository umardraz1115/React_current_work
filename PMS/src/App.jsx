// import { useState } from "react";
// import CreateProjectForm from "./components/CreateProjectForm";
// import MainContent from "./components/MainContent";
// import SideBar from "./components/sidebar";
// import ProjectDetail from "./components/ProjectDetail";

// function App() {
//   const [showing, setShowing] = useState(false);
//   const [project, setProject] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null);

//   function checkDataValidation() {
//     if (
//       project.title === "null" &&
//       project.description === "null" &&
//       project.date === "null"
//     ) {
//       return false;
//     } else {
//       return true;
//     }
//   }

//   function handleInputData(title, description, date) {
//     const newProject = { title, description, date };
//     setProject((prevProject) => [...prevProject, newProject]);
//   }

//   function handleCurrentRendering() {
//     setShowing(true);
//   }

//   function handleCanelForm() {
//     setShowing(false);
//   }

//   function handleProjectSelect(project) {
//     setSelectedProject(project);
//   }

//   console.log(project);
//   return (
//     <>
//       <div className="flex">
//         <SideBar
//           onAddClickButton={handleCurrentRendering}
//           projectList={checkDataValidation ? project : "null"}
//           onSelectProject={handleProjectSelect}
//         />
//         {!showing ? (
//           <MainContent onProjectClickButton={handleCurrentRendering} />
//         ) : (
//           <CreateProjectForm
//             onEntry={handleInputData}
//             onCancel={handleCanelForm}
//           />
//         )}
//         {selectedProject && <ProjectDetail details={selectedProject} />}
//         {/* <ProjectDetail details={project} /> */}
//       </div>
//     </>
//   );
// }

// export default App;
import { useState } from "react";
import CreateProjectForm from "./components/CreateProjectForm";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const [view, setView] = useState("main");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleInputData(title, description, date) {
    const newProject = { title, description, date };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setView("main");
  }

  // Function to handle switching between views
  function handleViewChange(viewName) {
    setView(viewName);
    if (viewName === "form") {
      setSelectedProject(null);
    }
  }

  // Function to handle project selection
  function handleProjectSelect(project) {
    setSelectedProject(project);
    setView("detail"); 
  }

  return (
    <div className="flex">
      {/* SideBar component to display projects and trigger form */}
      <SideBar
        onAddClickButton={() => handleViewChange("form")}
        projectList={projects}
        onSelectProject={handleProjectSelect}
      />

      {/* Conditionally render the content based on current view */}
      {view === "main" && <MainContent onProjectClickButton={() => handleViewChange("form")} />}

      {view === "form" && (
        <CreateProjectForm
          onEntry={handleInputData}
          onCancel={() => handleViewChange("main")}
        />
      )}

      {view === "detail" && selectedProject && (
        <ProjectDetail details={selectedProject} />
      )}
    </div>
  );
}

export default App;