import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"


export function Home() {
  const { ejemploGlobal, pepe } = useContext(GlobalContext)

  return (
    <h1>Vista Home {pepe}</h1>


  )
}