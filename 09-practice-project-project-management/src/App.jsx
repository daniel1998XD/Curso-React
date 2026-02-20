import { useState } from "react";
import Initial from "./components/Initial";
import Menu from "./components/Menu";
import NewProject from "./components/NewProject";
import Project from "./components/Project";

function App() {
  const [projects, setProjects] = useState([]);

  const [isActive, setIsActive] = useState("initial");

  const [idProject, setIdProject] = useState(null);

  const [indiceProject, setIndiceProject] = useState();

  function handleClick(optionChosen) {
    setIsActive(optionChosen);
  }

  function handleSave(project) {
    setProjects((prevProject) => {
      return [...prevProject, project];
    });
  }

  function setProject(opcao, tarefa = null) {
    if (opcao === "delete") {
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.idProject !== idProject),
      );
    }
    if (opcao === "newTask") {
      setProjects((prevProject) =>
        prevProject.map((project) => {
          if (project.idProject === idProject) {
            return {
              ...project,
              tasks: [...project.tasks, tarefa],
            };
          }
          return project;
        }),
      );
    }

    if (opcao === "deleteTask") {
      const indiceDeletar = tarefa
      setProjects((prevProject) =>
        prevProject.map((project) => {
          if (project.idProject === idProject) {
            return {
              ...project,
              // O '_' ignora o valor do item, focando apenas no index
              tasks: project.tasks.filter(
                (_, index) => index !== indiceDeletar,
              ),
            };
          }
          return project;
        }),
      );
    }
  }

  return (
    <div className="flex gap-10 h-lvh">
      <Menu
        optionChosen={handleClick}
        projects={projects}
        setIndiceProject={setIndiceProject}
        setIdProject={setIdProject}
      />
      <button onClick={() => console.log(projects)}>debuga</button>

      {isActive === "initial" && <Initial optionChosen={handleClick} />}
      {isActive === "newProject" && (
        <NewProject optionChosen={handleClick} handleSave={handleSave} />
      )}
      {isActive === "project" && (
        <Project
          optionChosen={handleClick}
          projects={projects[indiceProject]}
          setProject={setProject}
        />
      )}
    </div>
  );
}

export default App;
