import { useRef, useState } from "react";

export default function NewProject({ optionChosen, handleSave }) {

  const inputTextareaStyle =
    "bg-gray-300 border-b-4 border-gray-400 p-1 focus:border-green-500 transition-colors";
  const labelStyle = "text-2xl bold";

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function handleSubmit() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;
    

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      date.trim() === ""
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    
    const dataForm = {
      title: title,
      description: description,
      date: date,
      tasks: [],
      idProject:crypto.randomUUID()
    };
    
    handleSave(dataForm);

    optionChosen("initial");
  }

  return (
    <div className="flex flex-col w-3/5 mt-10 ">
      
      <div className="flex justify-end gap-4">
        <button
          onClick={() => optionChosen("initial")}
          className="text-slate-950 w-20 h-10 hover:text-red-500"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="bg-slate-950 text-gray-100 w-20 h-10 rounded-xl hover:bg-slate-800"
        >
          Save
        </button>
      </div>
      <form className="flex-col gap-4 ml-8">
        <p className="flex flex-col">
          <label className={labelStyle}>Title</label>
          <input
            ref={titleRef}
            id="title"
            type="text"
            className={inputTextareaStyle}
          />
        </p>
        <p className="flex flex-col">
          <label className={labelStyle}>Description</label>
          <textarea
            ref={descriptionRef}
            name="description"
            id="description"
            className={inputTextareaStyle}
          ></textarea>
        </p>
        <p className="flex flex-col">
          <label className={labelStyle}>Date</label>
          <input
            ref={dateRef}
            id="date"
            type="date"
            className={inputTextareaStyle}
          />
        </p>
      </form>
    </div>
  );
}
