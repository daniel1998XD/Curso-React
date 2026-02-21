import Button from "./Button";
export default function Menu({
  optionChosen,
  projects,
  setIndiceProject,
  setIdProject,
}) {
  function handleClick(i, id) {
    optionChosen("project");
    setIndiceProject(i);
    setIdProject(id);
  }

  return (
    <menu className="w-1/3 min-h-full mt-9 bg-black rounded-r-3xl gap-8 flex flex-col [&>*]:mr-5 [&>*]:ml-5">
      <h1 className="text-white text-[1.5rem]">Your Projects</h1>
      <Button onClick={() => optionChosen("newProject")}>+ Add Project</Button>

      <ul className="flex flex-col gap-1 ">
        {projects.map((project, i) => (
          <li
            onClick={() => handleClick(i, project.idProject)}
            key={project.idProject}
            className="text-gray-300 rounded hover:bg-gray-900 hover:text-gray-100"
          >
            {project.title}
          </li>
        ))}
      </ul>
    </menu>
  );
}
