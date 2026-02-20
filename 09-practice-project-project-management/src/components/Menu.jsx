import Button from "./Button";
export default function Menu({ optionChosen, projects, setIndiceProject, setIdProject }) {
  function handleClick(i, id) {
    optionChosen("project");
    setIndiceProject(i)
    setIdProject(id)
  }

  return (
    <menu className="w-[12rem] h-full mt-9 bg-black rounded-r-3xl gap-8 flex flex-col [&>*]:mr-5 [&>*]:ml-5">
      <h1 className="text-white text-[1.5rem]">Your Projects</h1>
      <Button
        onClick={() => optionChosen("newProject")}
        className="bg-zinc-700 w-32 h-10 text-zinc-500 rounded hover:bg-zinc-600 hover:text-zinc-400"
      >
        + Add Project
      </Button>

      <ul className="flex flex-col gap-1 ">
        {projects.map((project,i) => (
          <li
            onClick={()=>handleClick(i, project.idProject)}
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
