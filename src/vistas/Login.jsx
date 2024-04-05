import { Link } from "react-router-dom";

export function Login(){
  return (
    <div className="border bg-white w-[400px] rounded p-10 mx-auto mt-[200px]">
      <input type="text" className="bg-slate-300 border p-2 w-full" placeholder ="email" />
      <button className="mt-5 border bg-slate-700 text-white  w-full p-2">
        <Link to="/">Iniciar sesión</Link>
      </button>
    </div>
  )
  
}