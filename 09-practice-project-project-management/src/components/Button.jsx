export default function Button({children, ...props}){
    return(
        <button className="bg-zinc-700 w-auto px-4 py-2 text-zinc-500 rounded hover:bg-zinc-600 hover:text-zinc-400" {...props} >{children}</button>
    )
}