import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

export function Registro() {

  const navigate = useNavigate()
  const { user, setUser } = useContext(GlobalContext)
  const [userForm, setUserForm] = useState({ email: '', imagen: '' })

  function controladorRegistroEmail(e) {
    console.log(e.target.value);
    setUserForm({
      ...userForm,
      email: e.target.value,
    })
  }
  function controladorRegistroImagen(e) {
    console.log(e.target.value);
    setUserForm({
      ...userForm,
      imagen: e.target.value,
    })
  }

  function controladorSubmit(e) {
    e.preventDefault()
    setUser({
      ...userForm,
    })
    navigate("/")
  }
  return (
    <div className="border bg-white w-[400px] rounded p-10 mx-auto mt-[200px]">
      <form onSubmit={controladorSubmit}>
        <input
          value={userForm.email}
          onChange={(e) => controladorRegistroEmail(e)}
          type="text"
          className="bg-slate-300 border p-2 w-full"
          placeholder="email" />
        <input
          value={userForm.imagen}
          onChange={(e) => controladorRegistroImagen(e)}
          type="text"
          id="avatar"
          className="bg-slate-300 border p-2 w-full mt-3"
          placeholder="url imagen avatar " />

        <button type="submit" className="mt-5 border bg-slate-700 text-white  w-full p-2">
          Registro
        </button>
      </form>

    </div>
  )
}