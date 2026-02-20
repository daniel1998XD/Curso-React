import noProject from "../assets/no-projects.png"
import Button from "./Button"
export default function Initial({optionChosen}){

    return(
        <div className="flex flex-col w-3/5 mt-20 justify-cemter items-center gap-4">
            <img src={noProject} alt="Nenhum projeto" className="w-[60px] h-[60px]"/>
            <h1 className="text-zinc-500 font-bold">No Project Selected</h1>
            <p className="text-zinc-500">Select a project or get started with new one</p>
            <Button onClick={()=>optionChosen("newProject")} className="bg-zinc-700 w-40 h-10 text-zinc-500 rounded hover:bg-zinc-600 hover:text-zinc-400">Create new project</Button>
        </div>
    )
}