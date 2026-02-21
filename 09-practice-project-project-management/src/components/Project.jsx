import { useRef } from "react";

export default function Project({
  projects,
  setProject,
  optionChosen,
}) {
  const formattedDate = new Date(projects.date).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: '2-digit',
    year: 'numeric',
  })


  const task = useRef();
  function handleClick() {
    setProject("delete");
    optionChosen("initial");
  }
  function handleClickTask(i) {
    setProject("deleteTask", i);
    console.log(i)
  }

  return (
    <div className="flex flex-col w-3/5 mt-20 gap-4">
      <div className="flex justify-between w-full">
        <h1 className="font-bold text-[1.8rem]">{projects.title}</h1>
        <button onClick={handleClick} className="hover:text-red-500">
          Delete
        </button>
      </div>
      <p className="text-zinc-400">{formattedDate}</p>
      <p>{projects.description}</p>
      <hr />
      <h1 className="font-bold text-[1.8rem]">Tasks</h1>
      <p className="flex gap-3">
        <input
          ref={task}
          className="bg-gray-300 border-b-4 border-gray-400 p-1 focus:border-green-500 transition-colors"
        />
        <button
          onClick={() => setProject("newTask", task.current.value)}
          className=" hover:text-green-500"
        >
          Add task
        </button>
      </p>

      <ul className="bg-zinc-300 flex flex-col gap-2 pt-10 pb-10 rounded">
        {projects.tasks.map((task, i) => (
          <div
            key={i}
            className="justify-between rounded w-full flex hover:bg-zinc-400"
          >
            <li>{task}</li>
            <button onClick={() => handleClickTask(i)} className="hover:text-red-500">Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
